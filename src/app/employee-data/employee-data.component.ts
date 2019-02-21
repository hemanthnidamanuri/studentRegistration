import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

  users: any;

  constructor(private es: EmployeesService) { }

  ngOnInit() {
    this.es.get_users().subscribe((res: any) => {
        this.users = res;
    });
  }
}
