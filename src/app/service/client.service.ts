import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/data/bien-immobilier';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  
  url="http://127.0.0.1:8000/"
  constructor(private htppClient:HttpClient) { }

  addAccountClient(formData:FormData){

    return this.htppClient.post(this.url+"RegisterAccount",formData)
  }


  doLogin(client:FormData){
    return this.htppClient.post(this.url+"client-login",client)

  }
}
