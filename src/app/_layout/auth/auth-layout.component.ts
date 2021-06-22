import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {slideInAnimation, slider, transformer} from '../../_animations/route-animations'
@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css'],
  animations:[
    slider
  ]
})
export class AuthLayoutComponent {
  constructor(public router:Router){

  }
  prepareRoute(outlet: RouterOutlet) {
    console.log( outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation)
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
