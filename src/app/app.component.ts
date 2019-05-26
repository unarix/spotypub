import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // host: {
  //   '(document:click)': 'onClick($event)',
  // },
})
export class AppComponent {
  
  constructor(private elementRef:ElementRef) {}

  title = 'app';

  onClick(event) {
    // var clickover = $(event.target);
    
    // var _opened = $navbar.hasClass("in");
    // if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
    //     $navbar.collapse('hide');
    // }
   }


}
