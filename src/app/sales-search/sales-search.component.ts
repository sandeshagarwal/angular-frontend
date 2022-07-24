import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sales-search',
  templateUrl: './sales-search.component.html',
  styleUrls: ['./sales-search.component.scss']
})
export class SalesSearchComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  Employee: any = [];
  employeeData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.restApi.getEmployee(this.id).subscribe((data: {}) => {
      console.log(data)
      this.Employee = data;
    });
   // console.log(this.id)
  }

}
