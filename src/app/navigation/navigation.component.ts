import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  scrolled = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const numb = window.scrollY;
    console.log(numb)

    if (numb >= 150){
      this.scrolled = 1;
    }
    else {
      this.scrolled = 0;
    }
  }
  
  ngOnInit(): void {
    console.log(this.scrolled)
  }

}
