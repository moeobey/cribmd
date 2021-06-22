import { Component } from "@angular/core";

@Component({
  selector: 'app-home-layout',
  template: `
  <app-nav></app-nav>
  <router-outlet></router-outlet>

  `
})
export class HomeLayoutComponent {
  constructor(){
  }

}

