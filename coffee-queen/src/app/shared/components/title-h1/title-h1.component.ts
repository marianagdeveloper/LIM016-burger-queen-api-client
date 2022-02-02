import { Component, OnInit, Input } from '@angular/core';
import { ITitleH1 } from './title-h1.metadata';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.scss']
})
export class TitleH1Component implements OnInit {
  @Input() data: ITitleH1 ={
    text: 'Holaaaaa',
    type: 'primary'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
