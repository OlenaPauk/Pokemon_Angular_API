import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  pokeUrl: string = '';
  

  constructor(private http: HttpClient) { }

  getPokeList(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon');

      // .map(response => response.json().items) 
      // .subscribe(
      //   data => this.pokemonsList = data,
      //   error => console.log(error)
      // );

    // return this.http.get(`${this.pokeUrl}?limit=${limit}?offset=${offset}`)
    // return this.http.get('https://pokeapi.co/api/v2/pokemon')
  }










  // getPokemonList(limit: number, offset: number) {
  //   return this.http.get(`${this.pokeUrl}?limit=${limit}?offset=${offset}`)
  //     .toPromise()
  //     // .then(response => response.json().resPoke)
  //     .then(items => items.map((item, idp) => {
  //       const id: number = idp + offset + 1;
  //       return {
  //         name: item.name,
  //         image: `${this.pokeUrl}${id}.png`,
  //         id
  //       }
  //     }))

  // }

}
