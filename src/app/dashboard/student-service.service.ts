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
  // Should be private
  // Public for testing
  Students: Student[] = [
    { Name: "Amos", Gender: 'Male', Balance: 0 },
    { Name: "Collins", Gender: 'Male', Balance: 1 },
    { Name: "Victor", Gender: 'Male', Balance: 2 },
    { Name: "Movine", Gender: 'Female', Balance: 4 },
    { Name: "Duke Angwenyi", Gender: 'Male', Balance: 7 },
    { Name: "Alex ", Gender: "Male", Balance: 52},
    { Name: "Breeeh", Gender: "Male", Balance: 12},
    { Name: "John ", Gender: "Male", Balance: -12},
    { Name: "Alex ", Gender: "Male", Balance: -10},
    { Name: "Aicy", Gender: "Male", Balance: -9},
    { Name: "Martin ", Gender: "Male", Balance: -1},
    { Name: "Euphantus", Gender: "Male", Balance: -13}

   ]

  constructor() { }

  get() {
    console.log('hekllo');
    
  }
}
