import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {}
window.addEventListener('scroll', () => {
  var nav = document.querySelector('.navbar');
  nav?.classList.toggle('sticky', window.scrollY > 0);
});
