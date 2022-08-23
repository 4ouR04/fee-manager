import { Component, OnInit } from '@angular/core';
import { OptionService } from './option.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public myoption: OptionService) {}

  ngOnInit(): void { }
  option = this.myoption.option
  
}
