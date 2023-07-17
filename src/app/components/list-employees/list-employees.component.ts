import { Component, OnInit } from '@angular/core';
import { FetchService } from '@app/fetch.service';

@Component({
  selector: 'app-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employeesList: any = [];
  loading: boolean = false;
  errorMessage: any;

  ngOnInit() {
    this.loadEmployees();
  }
  constructor(
    public fetchService: FetchService
  ){}

  loadEmployees() {
    this.loading = true;
    this.errorMessage = "";
    return  this.fetchService.GetEmployees().subscribe((data: any) => {
      this.loading = false; 
      this.employeesList = data.data;
    },(error) => {
      console.error('error caught');
      this.errorMessage = error;
      this.loading = false;      
    })
  }
}
