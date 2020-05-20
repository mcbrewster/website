import { Component, ViewChild } from '@angular/core';
import { fillProperties } from '@angular/core/src/util/property';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-app';
  flipx: boolean;
  active :string;
  @ViewChild(CardComponent) child;

  flip(){
    if (this.child) {
      this.child.flip()
    }
  }

  ngOnInit(): void {
    this.active = window.location.pathname.substr(1);
  }
}
