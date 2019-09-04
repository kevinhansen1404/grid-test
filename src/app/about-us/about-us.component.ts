import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  title = 'My first AGM project';
  lat = 59.133112;
  lng = 10.224608;

  constructor() { }

  ngOnInit() {
  }

}
