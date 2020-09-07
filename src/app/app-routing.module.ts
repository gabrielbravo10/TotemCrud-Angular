import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFuncionarioComponent } from './list-funcionario/list-funcionario.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';

const routes: Routes = [
  {path: '', component: ListFuncionarioComponent},
  {path: 'funcionarios', component: ListFuncionarioComponent},
  {path: 'funcionarios/:id', component: FuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
