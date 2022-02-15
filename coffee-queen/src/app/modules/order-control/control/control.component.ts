import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  public claseNew?:string;
  constructor() { }

  ngOnInit(): void {
  }
   navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
    this.claseNew='classNew';
  }

}
