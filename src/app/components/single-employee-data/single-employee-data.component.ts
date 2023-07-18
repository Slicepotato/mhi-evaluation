import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from '../../fetch.service';

@Component({
  selector: 'app-single-employee-data',
  templateUrl: './single-employee-data.component.html',
  styleUrls: ['./single-employee-data.component.scss']
})
export class SingleEmployeeDataComponent implements OnInit {
  employeeSingle: any;
  id = '';
  loading: boolean = false;
  errorMessage: any;
  employeeList: any;

  constructor(
    private fetchService: FetchService, private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.loadEmployee();
  }

  loadEmployee() {
    this.employeeList = this.fetchService.GetEmployees();
    this.employeeSingle = this.employeeList.find((emp: { id: string; }) => emp.id == this.id);
  }
}
