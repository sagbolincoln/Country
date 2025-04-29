import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  httpClient = inject(HttpClient)


  constructor() { }

  //Récupérer tous les pays
  getCountries(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://restcountries.com/v3.1/all').pipe(
      map((data: any) => {
        const constriesArray = []
        for (let index = 0; index < data.length; index++) {
          const el = data[index]
          // console.log( Object.keys(el.currencies))
          constriesArray.push({
            id: el.cca3,
            name: el.name.common,
            capital: el.capital,
            language: el.languages,
            region: el.name.region,
            flag: el.flags.png,
            area: el.area,
            map: el.maps.googleMaps,
            population: el.population,
            carSide: el.car.side,
            continent: el.continents[0],
            independant: el.independent,
            frenchName: el.translations.fra.official
          })
        }
        return constriesArray
      })
    )
  }


  //Récupérer un pays
  getOneCountry(id: string): Observable<any> {
    return this.httpClient.get<any>('https://restcountries.com/v3.1/alpha/' + id).pipe(
      // tap((data: any) => console.log(data)),
      map((data: any) => {
        const newCountry = {
          id: data[0].cca3,
          name: data[0].name?.common,
          capital: data[0].capital[0],
          language: data[0].languages,
          region: data[0].name?.region,
          flag: data[0].flags?.png,
          area: data[0].area,
          map: data[0].maps?.googleMaps,
          population: data[0].name?.population,
          carSide: data[0].car?.side,
          continent: data[0]?.continents[0],
          independant: data[0].independent,
          frenchName: data[0].translations?.fra.official
        }
        return newCountry
      })
    )
  }

  //Trier les pays par regions
  getCountriesByRegions(region: string): Observable<any[]> {
    return this.httpClient.get<any>('https://restcountries.com/v3.1/region/' + region).pipe(
      tap((data: any) => console.log(data)),
      map((data: any) => {
        const countryByRegion = []
        for (let index = 0; index < data.length; index++) {
          const el = data[index]
          countryByRegion.push({
            id: el.cca3,
            name: el.name.common,
            capital: el.capital,
            language: el.languages,
            region: el.name.region,
            flag: el.flags.png,
            area: el.area,
            map: el.maps.googleMaps,
            population: el.name.population,
            carSide: el.car.side,
            continent: el.continents[0],
            independant: el.independent,
            frenchName: el.translations.fra.official
          })
        }
        return countryByRegion
      })
    )
  }

  getCountryByCapital(capital: string): Observable<any> {
    return this.httpClient.get<any>('https://restcountries.com/v3.1/capital/' + capital).pipe(
      map((data: any) => {
        const CountriesByCapital = []
        for (let index = 0; index < data.length; index++) {
          const el = data[index]
          CountriesByCapital.push({
            id: el.cca3,
            name: el.name.common,
            capital: el.capital,
            language: el.languages,
            region: el.name.region,
            flag: el.flags.png,
            area: el.area,
            map: el.maps.googleMaps,
            population: el.name.population,
            carSide: el.car.side,
            continent: el.continents[0],
            independant: el.independent,
            frenchName: el.translations.fra.official
          })
        }
        return CountriesByCapital
      }
      )
    )
  }


}
