import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})

export class EmployeeCreateComponent implements OnInit {
  @Input() employeeDetails = {sales_id:0, date_of_purchase:'', customer_id:0, fuel:'', vehicle_segment:'', selling_price:0,
  power_steering:'', airbags:'',sunroof:'', matt_finish:'', music_system:'', customer_gender:'', customer_income_group:'',
  customer_region:'',customer_marital_status:''};

  constructor(public restApi: RestApiService, public router: Router) {}

  ngOnInit() {}

  addEmployee(dataEmployee: any) {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employees-list']);
    });
  }
}
