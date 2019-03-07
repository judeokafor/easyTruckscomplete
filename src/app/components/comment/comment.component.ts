import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserService } from "../../services/user.service";


import * as Materialize from 'materialize-css';
declare var $: any;


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentForm: FormGroup = new FormGroup({
    comment: new FormControl(null, [Validators.maxLength(50), Validators.required]),
    username: new FormControl(null, Validators.required),
  });
  error: any = {
    show: false,
    msg: '',
  };
  disable: boolean = false;
  constructor(private _router: Router,
    private _userService: UserService,
    private _flashMessages: FlashMessagesService,
  ) { }

  ngOnInit() {
  }
 
  submitComment() {
    if (!this.commentForm.valid) {
      console.log('Invalid Form'); return;
    }
    else {
      this._userService.addComment(this.commentForm.value)
        .subscribe(
          data => {
            console.log(data);
            this.disable = true
            console.log('Successfully sent comment. Thanks for your feedback');
            this.error.show = true;
            this.error.msg = 'Comment Sent Successfully';
            setTimeout(() => {
              this.disable = false
              this.error.show = false;
              this.error.msg = '';
            }, 5000);
          },
          error => { console.error(error) }
        )
    }
  }
  get username() {
    return this.commentForm.get('username');
  }
  get comment() {
    return this.commentForm.get('comment');
  }
}
