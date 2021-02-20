import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.css']
})
export class Footer1Component implements OnInit {

  @Input() phone = '';
  @Input() email = '';
  @Input() adress = '';

  constructor() { }

  ngOnInit(): void {
  }

}
