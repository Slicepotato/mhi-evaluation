import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from '@app/fetch.service';


@Component({
  selector: 'app-single-employee-data',
  templateUrl: './single-employee-data.component.html',
  styleUrls: ['./single-employee-data.component.scss']
})
export class SingleEmployeeDataComponent implements OnInit {

  employeeSingle: any = [];
  id = '';
  loading: boolean = false;
  errorMessage: any;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.loadEmployee();
  }
  constructor(
    public fetchService: FetchService,
    private route: ActivatedRoute
  ){}

  loadEmployee() {
    this.loading = true;
    this.errorMessage = "";
    return  this.fetchService.GetEmployee(this.id).subscribe((data: any) => {
      this.loading = false; 
      this.employeeSingle = data.data;
      console.log(data.data)
    },(error) => {
      console.error('error caught');
      this.errorMessage = error;
      this.loading = false;      
    })
  }
}
