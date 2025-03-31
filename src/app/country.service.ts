import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private readonly countries: Array<any> = []
  private country: any
  httpClient = inject(HttpClient)


  constructor() { }

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
            population: el.name.population,
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

  getOneCountry(id: string): Observable<any>{
    return this.httpClient.get<any>('https://restcountries.com/v3.1/name/'+id).pipe(
      tap((data: any) => console.log(data)),
      map((data: any) =>{
        this.country = {
          id: data.cca3,
          name: data.name?.common,
          capital: data.capital,
          language: data.languages,
          region: data.name?.region,
          flag: data.flags?.png,
          area: data.area,
          map: data.maps?.googleMaps,
          population: data.name?.population,
          carSide: data.car?.side,
          // continent: data?.continents[0],
          independant: data.independent,
          frenchName: data.translations?.fra.official
        }
        console.log(this.country)
      })
    )
    return this.country
  }

}
