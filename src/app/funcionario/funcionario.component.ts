import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../list-funcionario/list-funcionario.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FuncionarioDataService } from '../service/data/funcionario-data.service';


@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  id: number;
  funcionario: Funcionario;

  constructor(
    private funcionarioService: FuncionarioDataService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.funcionario = new Funcionario(this.id, '', '', '', '');

    if (this.id != -1) {
      this.funcionarioService.retrieveFuncionario(this.id).subscribe(
        data => this.funcionario = data
      )
    }  
  }


  saveFuncionario() {
    if (this.id == -1) {
      this.funcionarioService.createFuncionario(this.funcionario)
      .subscribe(
        data => {
          this.router.navigate(['funcionarios'])
        }
      )
    } else {
      this.funcionarioService.updateFuncionario(this.id, this.funcionario).subscribe(
        data => {
          this.router.navigate(['funcionarios'])
          
        }
      )
    }
  
  }

}
