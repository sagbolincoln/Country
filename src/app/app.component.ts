import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CountryService } from './country.service';
import { CountryComponent } from './pages/country/country.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, CountryComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Country';
  dataservice = inject(CountryService)
  countries: any[] = []
  country: any
  id = "TWN"
  region = "americas"
  capital = "Paris"
  
  ngOnInit(): void {

    this.dataservice.getEuropeContries().subscribe((data: any) => {
      this.countries = data
      console.log(this.countries)
    }
    )
  }
      
}
