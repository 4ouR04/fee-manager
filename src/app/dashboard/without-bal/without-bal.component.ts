import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-without-bal',
  templateUrl: './without-bal.component.html',
  styleUrls: ['./without-bal.component.css'],
})
export class WithoutBalComponent implements OnInit {
  constructor(private Students: StudentServiceService) {}

  ngOnInit(): void {}
  allStudents = this.Students.Students;
  filteredArray2 = this.allStudents.sort().filter((wthoutb) => wthoutb.Balance <= 0);
}
