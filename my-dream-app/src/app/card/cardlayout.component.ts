import { Component, Input } from '@angular/core';
declare var jquery:any;
declare var $ :any;



@Component({
  selector: 'app-cardlayout',
  templateUrl: './cardlayout.component.html',
  styleUrls: ['./cardlayout.component.scss']

})
export class CardLayoutComponent {
projects = [{name: "Hyatt", 
            link:"https://careers.hyatt.com/en-US/careers",
            image: "../assets/hyatt.PNG"},
            {name: "Waterloop", 
            link:"https://teamwaterloop.ca/",
            image: "../assets/waterloop.PNG"},
            {name: "Awire", 
            link:"https://awiretech.com/",
            image: "../assets/awire.PNG"},
            {name: " Shaw News Room", 
            link:"http://newsroom.shaw.ca/",
            image: "../assets/shaw.PNG"},
            {name: " Shaw.ca", 
            link:"http://shaw.ca/",
            image: "../assets/shawca.PNG"},
            {name: "VCA",
            link: "http://varsitycommunityassociation.ca/en/",
            image: "../assets/community.PNG"}];
}
