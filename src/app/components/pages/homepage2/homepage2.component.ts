import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage2',
  templateUrl: './homepage2.component.html',
  styleUrls: ['./homepage2.component.css']
})
export class Homepage2Component implements OnInit {

  slides = [
    {
      title: 'Welcome to SICTHA',
      desc: 'the 1st edition of the international fair of cotton, textile, accessoires',
      image: 'assets/img/banner/01.jpg'
    },
    {
      title: 'cotton',
      desc: 'Lorem ipsum dolor sit amet consectetur, jh ghgh fgfgf gfgg quam rem expedi', 
      image: 'assets/img/banner/02.jpg'
    },
    {
      title: 'textile',
      desc: 'Lorem ipsum dolor sit amet consectetur, jh ghgh fgfgf gfgg quam rem expedi',
      image: 'assets/img/banner/03.jpg'
    },
    {
      title: 'clothing ',
      desc: 'Lorem ipsum dolor sit amet consectetur, jh ghgh fgfgf gfgg quam rem expedi',
      image: 'assets/img/banner/04.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
