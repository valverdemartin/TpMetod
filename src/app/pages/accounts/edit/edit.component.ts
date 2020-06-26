import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id;
  title: string = '';
  icon: string = '';
  clientForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService) { 
    this.clientForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      telphoneNumber: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
      dni: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
    
    this.id = this.route.snapshot.url[this.route.snapshot.url.length-1].path;
    console.log(this.id);
    if(this.id == 0){
      this.title = 'Crear cliente';
      this.icon = 'fa fa-plus';
    }else{
      this.title = 'Editar cliente';
      this.icon = 'fas fa-edit';
      this.getClient();
    }
    document.getElementById('icon').className = this.icon;

  }

  getClient(){
    let client: any = JSON.parse(localStorage.getItem('client'));
    console.log(client);
    if(client != null){
      this.clientForm.controls['first_name'].setValue(client.clientName);
      this.clientForm.controls['last_name'].setValue(client.lastName);
      this.clientForm.controls['telphoneNumber'].setValue(client.contactNumber);
      this.clientForm.controls['dni'].setValue(client.dni);
      this.clientForm.controls['email'].setValue(client.email);
      this.clientForm.controls['city'].setValue(client.city);
      localStorage.removeItem('client');

    }else{
      this.cancel();
    }
  }
  
  onSubmit(){
    if(this.clientForm.valid){
      let client = new Client();
      client.idClient = this.id;
      client.clientName = this.clientForm.get('first_name').value;
      client.lastName = this.clientForm.get('last_name').value;
      client.contactNumber = this.clientForm.get('telphoneNumber').value;
      client.dni = this.clientForm.get('dni').value;
      client.email = this.clientForm.get('email').value;
      client.city = this.clientForm.get('city').value;

      if(this.id == 0){
        this.clientService.createClient(client).subscribe(
          (response: any) => {
            this.cancel();
          },  
          (error: string) => {

          }
        )
      }else{
        this.clientService.updateClient(client).subscribe(
          (response: any) => {
            this.cancel();
          },
          (error: string) => {

          }
        )
      }

    }else{
      
      this.clientForm.markAllAsTouched();
    }
  }

  cancel(){
    this.router.navigate(['/home/clients']);
  }





}
