import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  EmployeesList: any = [];

  ngOnInit() {
    this.loadEmployees();
  }
  constructor(
    public fetchService: FetchService
  ){}

  loadEmployees() {
    return this.fetchService.GetEmployees().subscribe((data: {}) => {
      this.EmployeesList = data;
    })
  }

}
