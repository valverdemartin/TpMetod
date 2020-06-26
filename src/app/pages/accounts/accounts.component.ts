import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  headers: string[] = ['Apellido', 'Teléfono', 'Email', 'DNI', 'Ciudad'];
  filter: string = '';
  clients: Client[] = [
    // {client_name: 'Martín', last_name: 'Valverde', client_email: 'tincho@elChuletas.com',client_dni: 468753, contact_number: 6846, id_client: 8},
    // {client_name: 'Julián', last_name: 'Calvé', client_email: 'juli@juli.com',client_dni: 38685103, contact_number: 456, id_client: 5}
  ];

  deleteName: string = '';
  deleteID: number;
  modalTitle: string = '';


  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  editClient(client: Client){
    localStorage.setItem('client', JSON.stringify(client));
    this.router.navigate(['home/clients/' + client.idClient]);
  }

  getClients(){
    this.clientService.getClients().subscribe(
      (response: any) => {
        this.clients = response;
      },
      (error: string) => {

      }
    )
  }

  deleteRequest(client: Client){
    this.deleteName = client.clientName + ' ' + client.lastName;
    this.deleteID = client.idClient;
  }

  deleteClient(){
    this.clientService.deleteClient(this.deleteID).subscribe(
      (response: any) => {
        document.getElementById('close').click();
        this.getClients();
      },
      (error: string) => {

      }
    )
  }

}
