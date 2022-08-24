import { Component, OnInit } from '@angular/core';
import {StudentServiceService } from '../student-service.service'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  constructor(public Students: StudentServiceService) {}

  ngOnInit(): void { 
    // this.Students.Students=[]
  }
  allStudents = this.Students.Students
  // this.Students.get()
  // this.Students.
  // this.allStudents.
  filteredArray = this.allStudents.sort().filter(wb=>wb.Balance > 0)
}
