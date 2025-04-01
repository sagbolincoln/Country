import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Pipe } from '@angular/core';
import { CountryService } from '../../country.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  countries: any[] = [];
  countryservice = inject(CountryService)

  ngOnInit(): void {
    this.countryservice.getCountries().subscribe(
      data => {
        this.countries = data
        console.log(this.countries)
      }
    )
  }


}
