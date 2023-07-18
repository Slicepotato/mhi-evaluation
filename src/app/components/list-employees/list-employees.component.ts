import { Component, OnInit } from '@angular/core';
import { FetchService } from '@app/fetch.service';

@Component({
  selector: 'app-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employeesList: any;
  loading: boolean = false;
  errorMessage: any;

  constructor(private fetchService: FetchService){}

  ngOnInit() {
    this.loading = true;
    this.errorMessage = "";
    this.loadEmployees();
  }

  loadEmployees() {    
    this.loading = false; 
    this.employeesList = this.fetchService.GetEmployees();  }
}
