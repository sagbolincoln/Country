import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../country.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  countryService = inject(CountryService);

  country: any;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.countryService.getOneCountry(id).subscribe((data) => {
        this.country = data;
        console.log('Pays sélectionné :', this.country);
      });
    }
  }

  getLanguages(): string[] {
    return this.country?.languages
      ? Object.values(this.country.languages)
      : [];
  }

  getReturnPath(): string {
    const continent = this.country?.continent?.toLowerCase();
    switch (continent) {
      case 'africa': return '/africa';
      case 'europe': return '/europe';
      case 'asia': return '/asia';
      case 'americas': return '/americas';
      case 'oceania': return '/oceania';
      default: return '/countries';
    }
  }
}
