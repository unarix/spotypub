import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  @ViewChild("myNavbar") myNavbar: ElementRef;

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit() {
  }

  hideNavbar(componente) { 
    console.log("colapse!")
    this.router.navigate(['/'+componente]);
    //this.renderer.addClass(this.myNavbar.nativeElement, "collapse");
    //this.renderer.addClass(this.myNavbar.nativeElement, "fadeOut");
    //this.renderer.removeClass(this.myNavbar.nativeElement, "show");
  }


}
