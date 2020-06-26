import { Component, OnInit } from '@angular/core';
import { Extinguisher } from '../../models/extinguisher';
import { ExtinguisherService } from 'src/app/services/extinguisher.service';

@Component({
  selector: 'app-extinguisher',
  templateUrl: './extinguisher.component.html',
  styleUrls: ['./extinguisher.component.scss']
})
export class ExtinguisherComponent implements OnInit {
  bar_code: string = '';
  extinguishers: Extinguisher[] = [];
  headers: string[] = ['Nombre y Apellido','Marca', 'Agente Extintor', 'Capacidad', 'Fecha de Fabricación', 'Fecha de Carga', 'Fecha de test hidraulico', 'Código de Barras','Opciones'];
  constructor(private extinguisherService: ExtinguisherService) { }

  ngOnInit(): void {
  }

  getExtinguisher(){
    this.extinguisherService.getExtinguisher(this.bar_code).subscribe(
      (response: any) => {
        this.extinguishers = response;
      },
      (error: any) =>{
        alert(error.message);
      }
    )
  }

  editExtinguisher(e){

  }
  deleteExtinguisher(e){

  }

  onDeleteExtinguisher(){}

}
