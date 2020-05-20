import { Component, Input } from '@angular/core';
declare var jquery:any;
declare var $ :any;



@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']

})
export class GraphComponent {
  title = 'my-carddream-app';
  flipx: Boolean = false; 
  
  flip(){
    this.flipx = !this.flipx; 
 
  } 
}
