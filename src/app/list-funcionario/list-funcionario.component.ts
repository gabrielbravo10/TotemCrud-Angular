import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioDataService } from '../service/data/funcionario-data.service';
import { HttpClient } from '@angular/common/http';


export class Funcionario {

  constructor(
    public id:number,
    public nome:string,
    public email:string,
    public cpf:string,
    public cargo:string) {
    }
    
}

export class IResult<T> {
  content: T[]
}


@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.css']
})
export class ListFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[];
  message: string;


  constructor(
    private funcionarioService: FuncionarioDataService, 
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.refreshFuncionarios();
  }

  // async refreshFuncionarios() {
  //   const { data } = await this.funcionarioService.retrieveAllFuncionarios();
  //   this.funcionarios = data;
  // }

  // const { success, data } = await
  //     this.http.
  //   if (success) {
  //     return data;
  //   } else {
  //     return undefined;
  //   }

  refreshFuncionarios() {
    this.funcionarioService.retrieveAllFuncionarios().subscribe(
      response => {
        console.log({response});
        this.funcionarios = response.content;
      }
    )
  }

  deleteFuncionario(id, nome) {
    this.funcionarioService.deleteFuncionario(id).subscribe(
      response => {
        this.message = `${nome} deletado com sucesso!`;
        this.refreshFuncionarios();
      }
    )
    setTimeout(() => {
      this.message = '';
  }, 3000);
  }

  addFuncionario() {
    this.router.navigate(['funcionarios', -1]);
  }

  updateFuncionario(id) {
    this.router.navigate(['funcionarios', id]);
  }

}
