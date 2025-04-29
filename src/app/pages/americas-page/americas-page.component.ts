import { Component, OnInit, inject } from '@angular/core';
import { CountryService } from '../../country.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-americas-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CountryComponent],
  templateUrl: './americas-page.component.html',
  styleUrls: ['./americas-page.component.css']
})
export class AmericasPageComponent implements OnInit {
  countryService = inject(CountryService);

  countries: any[] = [];
  filteredCountries: any[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.countryService.getCountriesByRegions('americas').subscribe(data => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  filterCountries(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCountries = this.countries.filter(country =>
      country.name.toLowerCase().includes(term)
    );
  }

  resetFilter(): void {
    this.searchTerm = '';
    this.filteredCountries = [...this.countries];
  }
}
