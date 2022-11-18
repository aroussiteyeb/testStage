import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }
  /* title = 'owlcarouselinAngular';  
  images = ['../../assets/img/photos/about21.jpg', '../../assets/img/photos/about21.jpg', '../../assets/img/photos/about21.jpg'];  
  
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };  */
  images = [
    {path: '../../assets/img/photos/about21.jpg'},
    {path: '../../assets/img/photos/about22.jpg'},
    {path: '../../assets/img/photos/about23.jpg'},
  ]
  prueba = true

  

  ngOnInit(): void {
    
   
  }

  changeEvent() {
    console.log(this.prueba);
  }

}
