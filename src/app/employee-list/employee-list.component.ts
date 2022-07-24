import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})

export class EmployeeListComponent implements OnInit {
  Employee: any = [];
  searchbySale: any = '';
  searchbyCustomers : any = '';

  constructor(public restApi: RestApiService) {}

  ngOnInit() {
    this.loadEmployees();
    this.loadEmployee(this.searchbyCustomers);
    this.loadEmployee(this.searchbySale);
  }

  // Get employees list
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    });
  }
  
  loadEmployee(id: any) {
    return this.restApi.getEmployee(id).subscribe((data: {}) => {
      this.Employee = data;
    });
  }

  
  // Delete employee
  deleteEmployee(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteEmployee(id).subscribe((data) => {
        this.loadEmployees();
      });
    }
  }

  searchbySales(searchbySale: any) {
   
      this.restApi.searchbySales(searchbySale).subscribe((data) => {
        // return this.restApi.getEmployeebySales(searchbySale).subscribe((data: {}) => {
        //   console.log(data)
        //   this.Employee = data;
        this.loadEmployee(searchbySale)
        });
      // });
    }

    searchbyCustomer(searchbyCustomers: any) {
   
      this.restApi.searchbyCustomer(searchbyCustomers).subscribe((data) => {
        // return this.restApi.getEmployee(searchbyCustomers).subscribe((data: {}) => {
        //   this.Employee = data;
        // });
        this.loadEmployee(searchbyCustomers)
      });
    }
}
