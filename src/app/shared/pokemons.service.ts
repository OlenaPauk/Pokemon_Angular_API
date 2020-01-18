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
    let offset = page === 0 ? 1 : page * 12;
    return this.http
      .get<IPokeList>(`http://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`)
      .pipe();
  }

  getPokeDetails(pokeId: number): Observable<IPokeDetails> {
    return this.http
      .get<IPokeDetails>(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .pipe();
  }

  getPokeTypes(): Observable<IPokeList> {    
    return this.http
      .get<IPokeList>('http://pokeapi.co/api/v1/type/')
      .pipe();
  }
}
