import { Component, Input } from '@angular/core';
declare var jquery:any;
declare var $ :any;



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']

})
export class CardComponent {
  title = 'my-carddream-app';
  flipx: Boolean = false; 
  @Input() project: any ; 
  
}
