import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokeList } from './interfaces/pokemonsList.interface';
import { Observable } from 'rxjs';
import { IPokeDetails } from './interfaces/pokeDetails.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService { 
  constructor(private http: HttpClient) { }

  getPokeList(page: number): Observable<IPokeList> {
    let offset =  page * 12;
    return this.http
      .get<IPokeList>(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`)
      .pipe();
  }

  getPokeDetails(pokeId: number): Observable<IPokeDetails> {
    return this.http
      .get<IPokeDetails>(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .pipe();
  }

  getPokeTypes(): Observable<IPokeList> {    
    return this.http
      .get<IPokeList>('https://pokeapi.co/api/v2/type/')
      .pipe();
  }

  getPokeImageUrl(pokeId: number): string{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeId}.png`
  }

  extractPokeId(pokeUrl: string): number{
    let temp = pokeUrl.split('/');
    return +temp[temp.length - 2];
  }
}
