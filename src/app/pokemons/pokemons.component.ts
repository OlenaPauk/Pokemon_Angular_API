import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../shared/pokemons.service';
import { IPokeItem } from '../shared/interfaces/pokeItem.interface';
import { IPokeList } from '../shared/interfaces/pokemonsList.interface';
import { IPokeDetails } from '../shared/interfaces/pokeDetails.interface';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  private pokemonsDetailsList: IPokeDetails[] = [];

  public pokemonsList: IPokeItem[] = [];
  public pagesCount = 0;
  
  public pokemonTypesList: IPokeItem[] = [];

  public pokemonDetails: IPokeDetails;
    
  constructor(private pokeService: PokemonsService) { }

  ngOnInit() {
    this.LoadPokeList(0); 
    this.getPokeTypes();
  }

  morePokemons(): void {
    this.pagesCount++;
    this.LoadPokeList(this.pagesCount);    
  }

  private getPokeTypes(): void {
    this.pokeService.getPokeTypes()
      .subscribe((poke: IPokeList) => this.pokemonTypesList.push(...poke.results));    
  }

  private LoadPokeList(page: number): void {
    this.pokeService.getPokeList(page)
      .subscribe((poke: IPokeList) => this.pokemonsList.push(...poke.results));    
  }
  private LoadPokeDetails(pokeId: number) {
    let pokemon = this.pokemonsDetailsList.find(p => p.id);
    if(!pokemon){
      this.pokeService.getPokeDetails(pokeId)
        .subscribe((poke: IPokeDetails) => {
          this.pokemonsDetailsList.push(poke);
          this.pokemonDetails = poke;
        });   
    } 
    else{
      this.pokemonDetails = pokemon;
    }
  }

}
