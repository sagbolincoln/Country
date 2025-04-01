import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
      this.dataservice.getCountries().subscribe(
        data => {
          console.log(data)
          this.countries = data
        }
      )
      
      this.dataservice.getOneCountry(this.id).subscribe(
        data => {
          this.country = data
        }
      )
      
      this.dataservice.getCountriesByRegions(this.region).subscribe(
        data => {
          console.log(data)
        }
      )

      this.dataservice.getCountryByCapital(this.capital).subscribe(
        data => {
          console.log(data[0])
        }
      )
  }
}
