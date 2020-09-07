import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Funcionario, IResult } from 'src/app/list-funcionario/list-funcionario.component';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllFuncionarios() {
    return this.http.get<IResult<Funcionario>>(`http://localhost:8080/totemti/funcionarios`);
  }

  retrieveFuncionario(id) {
    return this.http.get<Funcionario>(`http://localhost:8080/totemti/funcionarios/${id}`);
  }

  createFuncionario(funcionario) {
    return this.http.post(`http://localhost:8080/totemti/funcionarios/`, funcionario);
  }

  updateFuncionario(id, funcionario) {
    return this.http.put(`http://localhost:8080/totemti/funcionarios/${id}`, funcionario);
  }

  deleteFuncionario(id) {
    return this.http.delete(`http://localhost:8080/totemti/funcionarios/${id}`);
  }


}
