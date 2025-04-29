import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CountryService } from './country.service';
import { CountryComponent } from './pages/country/country.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit{
  title = 'Country';
  dataservice = inject(CountryService)
  countries: any[] = []
  country: any
  id = "TWN"
  region = "americas"
  capital = "Paris"
  
  ngOnInit(): void {}
      
}
