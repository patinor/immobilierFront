import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/data/bien-immobilier';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  token=false

  
  url="http://127.0.0.1:8000/"
  constructor(private htppClient:HttpClient) { }

  addAccountClient(formData:FormData){

    return this.htppClient.post(this.url+"RegisterAccount",formData)
  }


  doLogin(client:FormData){
    return this.htppClient.post(this.url+"client-login",client)

  }

  setAuthentification(token:string){
    sessionStorage.setItem('authToken', token);

  }

  getAuthentification(){
    const token= sessionStorage.getItem('authToken');
    return token
  }
  demandeVisite(client_id:string,bien_id:number,date:string){
    const formData=new FormData()
    formData.append('client_id',client_id);
    formData.append('bien_id',bien_id.toString());
    formData.append('date_propose',date);

    return this.htppClient.post(this.url+"visite-client",formData)

  }
}
