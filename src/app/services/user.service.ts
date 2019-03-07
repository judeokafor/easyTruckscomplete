import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "Rxjs";

import { Quote } from "../models/quote";
import { Comment } from "../models/comment";
import { ContactUS } from "../models/contactus";
import { User } from "../models/user";

const service_base = 'http://localhost:5000/users/';

const service_quote = 'http://localhost:5000/quotes/';

// http headers
const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _http: HttpClient) { }
  
  // Quote Routes
  
  // get all quotes
  getQuotes(): Observable<Quote[]> {
    return this._http.get<Quote[]>(`${service_quote}quote`);
  }
  // get quote by id 
  getQuoteById(id): Observable<Quote> {
    return this._http.get<Quote>(`${service_quote}quote${id}`);
  }
  //post quote 
  addQuote(quote:Quote): Observable<Quote> {
    return this._http.post<Quote>(`${service_quote}quote`, quote, httpOptions)
  }
  // delete quote
  deleteQuote(id): Observable<Quote> {
    return this._http.get<Quote>(`${service_quote}quote/delete/${id}`, httpOptions)
  }
  // update quote
  updateQuote(id, quote): Observable<Quote> {
    return this._http.post<Quote>(`${service_quote}quote/update/${id}`, quote, httpOptions);
  }

  // comment routes

  // get comment
  getComments(): Observable<Comment[]> {
    return this._http.get<Comment[]>(`${service_base}comment`);
  }
// get comment by id 
getCommentById(id): Observable<Comment> {
  return this._http.get<Comment>(`${service_base}comment${id}`);
}
//post comment 
addComment(comment:Comment): Observable<Comment> {
  return this._http.post<Comment>(`${service_base}comment`, comment, httpOptions)
}
// delete comment
deleteComment(id): Observable<Comment> {
  return this._http.get<Comment>(`${service_base}comment/delete/${id}`, httpOptions)
}

// contactUs routes
  // get contactus
  getContactUs(): Observable<ContactUS[]> {
    return this._http.get<ContactUS[]>(`${service_base}contactus`);
  }
// get comment by id 
getContactUsById(id): Observable<ContactUS> {
  return this._http.get<ContactUS>(`${service_base}contactus${id}`);
}
//post comment 
addContactUs(contactus:ContactUS): Observable<ContactUS> {
  return this._http.post<ContactUS>(`${service_base}contactus`, contactus, httpOptions)
}
// delete comment
deleteContactUs(id): Observable<ContactUS> {
  return this._http.get<ContactUS>(`${service_base}contactus/delete/${id}`, httpOptions)
}

// users route
// register user
  registerUser(user : User): Observable<User> {
    return this._http.post<User>(`${service_base}register`, user , httpOptions);
  }
  // user login 
  login(user : User): Observable<User> {
    return this._http.post<User>(`${service_base}login`, user, httpOptions);
  }
  // users naviagtion to dashboard after registration and login
  user(): Observable<User> {
    return this._http.get<User>(`${service_base}user`);
  }

  // user logout
  logout(): Observable<User> {
    return this._http.get<User>(`${service_base}logout`);
  }
}
