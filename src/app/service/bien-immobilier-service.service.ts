import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BienImmobilier } from '../models/data/bien-immobilier';

@Injectable({
  providedIn: 'root'
})
export class BienImmobilierServiceService {

  url="http://127.0.0.1:8000/"
  constructor(private htppClient:HttpClient) { }

  getAllBienImmobilier():Observable<BienImmobilier[]>{

    return this.htppClient.get<BienImmobilier[]>(this.url+"listesBienImmoblier")
  }
}

