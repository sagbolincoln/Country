import { Component, inject } from '@angular/core';
import { CountryService } from '../../country.service';
import { ActivatedRoute } from '@angular/router';
import { CountryComponent } from '../country/country.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule, CountryComponent, FormsModule],
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  countryService = inject(CountryService);
  route = inject(ActivatedRoute);

  countries: any[] = [];
  filteredCountries: any[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data) => {
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
