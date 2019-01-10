import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const service_base = 'http://127.0.0.1:5000/api/users/';

const service_quote = 'http://127.0.0.1:5000/api/quotes/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) { }
// register new users
  register(body:any){
    return this._http.post(`${service_base}register`, body, {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
// user login 
  login(body:any){
    return this._http.post(`${service_base}login`,body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
// users naviagtion to dashboard after registration and login
  user(){
    return this._http.get(`${service_base}user`,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  // user logout
  logout(){
    return this._http.get(`${service_base}logout`,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  // quote and order
  quote(body:any){
    return this._http.post(`${service_quote}quote`, body, {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  //user comment
  comment(body:any){
    return this._http.post(`${service_base}comment`, body, {
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

}
