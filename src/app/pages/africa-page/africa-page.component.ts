import { Component, inject, OnInit } from '@angular/core';
import { CountryService } from '../../country.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-africa-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CountryComponent],
  templateUrl: './africa-page.component.html',
  styleUrls: ['./africa-page.component.css']
})
export class AfricaPageComponent implements OnInit {
  countryService = inject(CountryService);

  countries: any[] = [];
  filteredCountries: any[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.countryService.getCountriesByRegions('africa').subscribe(data => {
      console.log('Pays d’Afrique :', data); // Pour vérifier la structure
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
