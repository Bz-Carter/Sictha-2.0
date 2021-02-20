import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactUs = {
    breadcrumb: 'assets/img/contactUs.jpg',
    image: 'assets/img/illustration/post-image.jpg',
    title: 'Contact Us',
    subTitle: 'Need Any Help For Business & Consulting',
    info: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was',
    phone: '+225 20 21 82 18',
    email: 'info@sictha.ci',
    adress: 'Immeuble KM, Abidjan plateau 4e Etage BP 01 BP 7661 Abidjan 01.'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
