import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FetchService } from '../../fetch.service';

@Component({
  selector: 'app-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  loading: boolean = false;
  errorMessage: any;
  employeesList: any[] = [];

  constructor(private fetchService: FetchService){}

  ngOnInit() {
    this.loading = true;
    this.errorMessage = "";
    this.loadEmployees();    
  }

  loadEmployees() {    
    this.loading = false;
    // console.log(this.fetchService.GetEmployees()); 
    this.employeesList = this.fetchService.GetEmployees();
  }
}
