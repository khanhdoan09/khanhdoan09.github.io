import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css', '../responsive.component.css'],
})
export class NavigationComponent implements OnInit {

  constructor() { }

  isHidden=false;
  ngOnInit(): void {
  }

  openNav() {
    if (!this.isHidden) {
      this.isHidden=true;
    }
    else {
      this.isHidden=false
    }
  }
}
