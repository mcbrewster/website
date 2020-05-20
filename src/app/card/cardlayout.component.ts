import { Component, Input } from '@angular/core';
declare var jquery:any;
declare var $ :any;



@Component({
  selector: 'app-cardlayout',
  templateUrl: './cardlayout.component.html',
  styleUrls: ['./cardlayout.component.scss']

})
export class CardLayoutComponent {
projects = [
            {name: "Druid Query toolkit",
              link:"https://imply.io/post/druid-console-query-view",
              image: "../assets/toolkit.PNG"},
            {name: "Druid Web Console",
              link:"https://github.com/apache/druid/tree/master/web-console",
              image: "../assets/console.PNG"},
            {name: "Snack Overflow",
              link:"https://devpost.com/software/snackoverflow",
              image: "../assets/snack.PNG"},
            {name: "Hyatt",
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
