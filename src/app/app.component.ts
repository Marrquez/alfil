import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router){};

  goToPolicies(){
    this.router.navigate(['policies', {}]);
  };

  goToHome(){
    this.router.navigate(['home', {}]);
  };
}
