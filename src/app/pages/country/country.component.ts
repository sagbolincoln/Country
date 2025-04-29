import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CountryService } from '../../country.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  standalone: true,
  imports: [RouterModule,CommonModule],
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() country: any;
  @Output() countrySelected = new EventEmitter<string>();
  dataservce = inject(CountryService)

  isHidden: boolean = false;
  country2: any

  constructor() {}

  ngOnInit(): void {
    this.countrySelected.emit(this.country);
    this.dataservce.getCountries().subscribe(
      data => {
        console.log(data)
        this.country2 = data
      }
    )
  }

  onClick(): void {
    
  }

  ngOnDestroy(): void {}
}
