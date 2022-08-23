import { Injectable } from '@angular/core';

export interface Student {
  Name: string;
  Gender: string
  Balance: number | string
}

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  Students: Student[] = [
    { Name: "Amos Mwongela", Gender: 'Male', Balance: 0 },
    { Name: "Collins Mutunga", Gender: 'Male', Balance: 1 },
    { Name: "Victor Ngane", Gender: 'Male', Balance: 2 },
    { Name: "Movine Obae", Gender: 'Female', Balance: 4 },
    { Name: "Duke Angwenyi", Gender: 'Male', Balance: 7 },

   ]

  constructor() { }

  get() {
    console.log('hekllo');
    
  }
}
