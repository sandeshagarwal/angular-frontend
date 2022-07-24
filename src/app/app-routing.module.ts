import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SalesSearchComponent } from './sales-search/sales-search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sales-list' },
  { path: 'create-sales-bill', component: EmployeeCreateComponent },
  { path: 'sales-list', component: EmployeeListComponent },
  { path: 'sales-edit/:id', component: EmployeeEditComponent },
  { path: 'sales-search/:id', component: SalesSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
