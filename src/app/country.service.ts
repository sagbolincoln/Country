import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  httpClient = inject(HttpClient);

  constructor() { }

  // Récupérer tous les pays
  getCountries(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://restcountries.com/v3.1/all').pipe(
      map((data: any) => {
        const countriesArray = [];
        for (let index = 0; index < data.length; index++) {
          const el = data[index];
          countriesArray.push({
            id: el.cca3,
            name: el.name?.common,
            capital: el.capital?.[0],
            language: el.languages,
            region: el.region,
            flag: el.flags?.png,
            area: el.area,
            map: el.maps?.googleMaps,
            population: el.population,
            carSide: el.car?.side,
            continent: el.continents?.[0],
            independant: el.independent,
            frenchName: el.translations?.fra?.official
          });
        }
        return countriesArray;
      })
    );
  }

  // Récupérer un pays
  getOneCountry(id: string): Observable<any> {
    return this.httpClient.get<any>('https://restcountries.com/v3.1/alpha/' + id).pipe(
      map((data: any) => {
        const el = data[0];
        return {
          id: el.cca3,
          name: el.name?.common,
          capital: el.capital?.[0],
          language: el.languages,
          region: el.region,
          flag: el.flags?.png,
          area: el.area,
          map: el.maps?.googleMaps,
          population: el.population,
          carSide: el.car?.side,
          continent: el.continents?.[0],
          independant: el.independent,
          frenchName: el.translations?.fra?.official
        };
      })
    );
  }

  // Récupérer les pays par région
  getCountriesByRegions(region: string): Observable<any[]> {
    return this.httpClient.get<any>('https://restcountries.com/v3.1/region/' + region).pipe(
      map((data: any) => {
        const countriesByRegion = [];
        for (let index = 0; index < data.length; index++) {
          const el = data[index];
          countriesByRegion.push({
            id: el.cca3,
            name: el.name?.common,
            capital: el.capital?.[0],
            language: el.languages,
            region: el.region,
            flag: el.flags?.png,
            area: el.area,
            map: el.maps?.googleMaps,
            population: el.population,
            carSide: el.car?.side,
            continent: el.continents?.[0],
            independant: el.independent,
            frenchName: el.translations?.fra?.official
          });
        }
        return countriesByRegion;
      })
    );
  }

  // Récupérer les pays par capitale
  getCountryByCapital(capital: string): Observable<any[]> {
    return this.httpClient.get<any>('https://restcountries.com/v3.1/capital/' + capital).pipe(
      map((data: any) => {
        const countriesByCapital = [];
        for (let index = 0; index < data.length; index++) {
          const el = data[index];
          countriesByCapital.push({
            id: el.cca3,
            name: el.name?.common,
            capital: el.capital?.[0],
            language: el.languages,
            region: el.region,
            flag: el.flags?.png,
            area: el.area,
            map: el.maps?.googleMaps,
            population: el.population,
            carSide: el.car?.side,
            continent: el.continents?.[0],
            independant: el.independent,
            frenchName: el.translations?.fra?.official
          });
        }
        return countriesByCapital;
      })
    );
  }
}
