import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/Cliente';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
    clientes:Cliente[] = [];
  constructor(private clienteService: ClienteService) {

  }

  listar():void{
    //this.clintes é que vai ser recebido no front
    this.clientes = this.clienteService.listar();
  }

  ngOnInit():void{
    this.listar();
  }

}
