import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  nav = 'Navbar';
  home ='Home';
  master = 'Master Data';
  constructor() { }

  ngOnInit() {
  }

}
