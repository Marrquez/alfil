import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styles: [require('./menu.component.less')]
})
export class MenuComponent {

  constructor(private router: Router){};

  showPolicies(){
    console.log("aaaa?");
    this.router.navigate(['policies', {}]);
  };
}
