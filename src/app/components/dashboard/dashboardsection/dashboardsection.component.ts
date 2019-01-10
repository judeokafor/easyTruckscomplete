import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-dashboardsection",
  templateUrl: "./dashboardsection.component.html",
  styleUrls: ["./dashboardsection.component.css"]
})
export class DashboardsectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.jquery_code();
  }
  jquery_code() {
    //hide section
    $(".section").hide();

    setTimeout(function() {
      $(document).ready(function() {
        //init side nav
        (<any>$(".button-collapse")).sideNav();

        //init modal
        (<any>$(".modal")).modal();

        // initialize select
        (<any>$('select').material_select());

        //show sections
        (<any>$(".section")).fadeIn();

        //hide preloader
        (<any>$(".loader")).fadeOut();
        //counter effect
        (<any>$(".count")).each(function() {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text()
              },
              {
                duration: 2000,
                easing: "swing",
                step: function(now) {
                  $(this).text(Math.ceil(now));
                }
              }
            );
        });
        // latest comments-approve and deny
        // (<any>$(".approve")).click(function(e) {
        //   Materialize.toast("Comment Approved", 3000);
        //   e.preventDefault();
        // });
        // (<any>$(".deny")).click(function(e) {
        //   Materialize.toast("Comment Denied", 3000);
        //   e.preventDefault();
        // });

        // // quick todos
        // (<any>$("#todo-form")).submit(function(e) {
        //   const output = `
        //   <li class="collection-item">
        //       <div>
        //         ${$("#todo").val()}
        //         <a href="!#" class="secondary-content delete">
        //           <i class="material-icons">close</i>
        //         </a>
        //       </div>
        //     </li>
        //   `;
        //   (<any>$(".todos")).append(output);
        //   Materialize.toast("Todo added", 3000);
        //   e.preventDefault();
        // });

        // // delete todos
        // $(<any>".todos").on("click", ".delete", function(e) {
        //   $(this)
        //     .parent()
        //     .parent()
        //     .remove();
        //   Materialize.toast("Todo removed", 3000);

        //   e.preventDefault();
        // });

        // //text editor cke editor
        // CKEDITOR.replace('body');
        // CKEDITOR.replace('description');
      });
    }, 1000);
  }
}
