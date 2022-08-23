import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  
  Name = '';
  Balance = '';
  Gender=''
  constructor(private Students: StudentServiceService) {}

  ngOnInit(): void {}
  onAdd() {
    this.Students.Students.push({
      Name: this.Name,
      Gender:this.Gender,
      Balance: this.Balance
    })
    this.Name = ''
    this.Gender = ''
    this.Balance = ''
  }
}
