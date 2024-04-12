import { Cliente } from './../interfaces/Cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor() { }

  //Estamos criando uma lista na interface Cliente. Esta lista virá da API
  clientes:Cliente[] = [
    {id: "bhjifsdhfjkl", nome: "Guilherme Mendes"},
    {id: "teste", nome: "teste 2", telefone:"2345678"}
  ];

  listar():Cliente[]{
    return this.clientes
  }

  remove(id:string){
    //Encontrar um dos objetos
    const cliente = this.clientes.find(c => c.id == id);
    //Validar se existe esse objeto
    if(cliente){
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index, 1);
    }
  }

  adicionar(cliente: Cliente){
    this.clientes.push(cliente);
  }

}
