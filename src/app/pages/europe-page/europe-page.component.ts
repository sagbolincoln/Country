import { Component, OnInit, inject } from '@angular/core';
import { CountryService } from '../../country.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-europe-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CountryComponent],
  templateUrl: './europe-page.component.html',
  styleUrls: ['./europe-page.component.css']
})
export class EuropePageComponent implements OnInit {
  countryService = inject(CountryService);

  countries: any[] = [];
  filteredCountries: any[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.countryService.getCountriesByRegions('europe').subscribe(data => {
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
