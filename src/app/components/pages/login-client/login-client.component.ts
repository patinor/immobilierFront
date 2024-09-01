import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Client } from '../../../models/data/bien-immobilier';
import { ClientService } from '../../../service/client.service';


@Component({
  selector: 'app-login-client',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login-client.component.html',
  styleUrl: './login-client.component.css'
})
export class LoginClientComponent {


  client=new Client()
  constructor(private clientService:ClientService){}
  submit(clientForm: NgForm) {
    if (clientForm.invalid) {
      console.log("Form is invalid");
      return;
    }
  
    const formData = new FormData();
    formData.append('emailOrTel', this.client.nom);
    formData.append('password', this.client.password);
  
    this.clientService.doLogin(formData).subscribe(
      (response: any) => {
        console.log(response);
        if (response.message !=='Information incorrecte') {
          this.clientService.setAuthentification(response.message)
          console.log(response.message)
          alert('Login fonctionne 🆗 !');
        } else {
          alert('Login failed');
        }
      },
      (error) => {
        console.log('Error during login:', error);
      }
    );
  }
  
}
