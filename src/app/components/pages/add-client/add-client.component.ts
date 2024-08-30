import { Component } from '@angular/core';
import { Client } from '../../../models/data/bien-immobilier';
import { ClientService } from '../../../service/client.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {


  client= new Client()

  password_confirm=""

  selectedFile: File | null = null;

  constructor(private clientService:ClientService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile?.name)
  }
 
  submit(clientForm: NgForm) {
    if (clientForm.invalid || !this.selectedFile) {
      console.log("Form is invalid");
      return;
    }
    if(this.client.password != this.password_confirm){

      alert("Les mots de passes sont différents !");
      return;
    }
    const formdata=new FormData()
    formdata.append('nom',this.client.nom)
    formdata.append('prenom',this.client.prenom)
    formdata.append('email',this.client.email)
    formdata.append('adresse',this.client.adresse)
    formdata.append('tel',this.client.tel)
    formdata.append('password',this.client.password)

    if(this.selectedFile){

      formdata.append('piece_identite', this.selectedFile, this.selectedFile.name);
    }

    this.clientService.addAccountClient(formdata).subscribe((data=>{
      console.log(data);
    }))



  }
}
