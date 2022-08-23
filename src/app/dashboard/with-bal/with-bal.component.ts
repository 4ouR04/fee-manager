import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';


@Component({
  selector: 'app-with-bal',
  templateUrl: './with-bal.component.html',
  styleUrls: ['./with-bal.component.css'],
})
export class WithBalComponent implements OnInit {
  constructor(private Students: StudentServiceService) {}

  ngOnInit(): void { }
  allStudents = this.Students.Students
  filteredArray1 = this.allStudents.sort().filter(wb=>wb.Balance > 0)

}
