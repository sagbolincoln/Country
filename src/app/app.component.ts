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
  id = "French Southern and Antarctic Lands"
  
  ngOnInit(): void {
      this.dataservice.getCountries().subscribe(
        data => {console.log(data)
          this.countries = data
        }
      )
      
      this.dataservice.getOneCountry(this.id).subscribe(
        data => {
          console.log(data)
          this.country = data
        }
      )
      
  }
}
