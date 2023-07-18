import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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
  employeesFilter: any[] = [];
  @ViewChild('ageMin') inputAgeMin: any;
  @ViewChild('ageMax') inputAgeMax: any;
  @ViewChild('salary') inputSalary: any;
  vowelFilter: any;
  results: any | undefined;
  vowelFilterResponse: string | undefined;
  wordEval: string | undefined;
  alertClass: string | undefined;

  constructor(private fetchService: FetchService){}

  ngOnInit() {
    this.loading = true;
    this.errorMessage = "";
    this.loadEmployees();    
  }

  loadEmployees() {    
    this.loading = false;
    this.employeesList = this.fetchService.GetEmployees();
    this.employeesFilter = this.employeesList;
    this.results = ' | ' + this.employeesFilter.length + ' rows.';
  }

  filterAge(min: any, max: any, salary: any) {
      const between = this.employeesList.filter(function(list) {
        return (list.employee_age > min && list.employee_age < max && list.employee_salary > salary);
      });

      if(between.length == 0) {
        this.results = ' | 0 rows';
        this.employeesFilter = between;
      } else {
        this.results = ' | ' + between.length + ' rows.';
        this.employeesFilter = between;
      }
  }

  clearFilter() {
    this.inputAgeMin.nativeElement.value = '';
    this.inputAgeMax.nativeElement.value = '';
    this.inputSalary.nativeElement.value = '';
    this.loadEmployees();
  }

  filterVowel(id: any) {
    const found = this.employeesList.find((list) => {
      return list.id == id && this.startsWithVowel(list.employee_name);
    });

    if(id == 0) {
      this.vowelFilterResponse = '';
      this.alertClass = '';
    } 
    else if(id > this.employeesList.length) {
      this.vowelFilterResponse =  "Invalid Employee";
      this.alertClass = "alert alert-danger";
    }
    else if(!found) {
      this.vowelFilterResponse =  "Employee's name does not begin with a vowel.";
      this.alertClass = "alert alert-warning"
    } else {
      this.vowelFilterResponse = found.employee_name;
      this.alertClass = "alert alert-success"
    }
  }

  startsWithVowel(wordEval: string){
    var vowels = ("aeiouAEIOU"); 
    return vowels.indexOf(wordEval[0]) !== -1;
 }
}
