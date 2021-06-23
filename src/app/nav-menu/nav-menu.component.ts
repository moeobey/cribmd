import { Component } from "@angular/core";

@Component({
  selector: 'app-nav',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent {
  menuIsActive = false;

  toggle() {
    this.menuIsActive = !this.menuIsActive;
  }
}
