import { Component } from '@angular/core';
import { CountryDetailComponent } from '../country-detail/country-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CountryDetailComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
