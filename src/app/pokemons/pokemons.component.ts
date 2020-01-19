import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../shared/pokemons.service';
import { IPokeList } from '../shared/interfaces/pokemonsList.interface';
import { IPokeDetails } from '../shared/interfaces/pokeDetails.interface';
import { IPokeTypeItem } from '../shared/interfaces/pokeTypeItem.interface';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {  
  private pagesCount = 0;

  public pokemonsList: IPokeDetails[] = [];  
  public pokemonTypesList: IPokeTypeItem[] = [];
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

  pokeDetails(pokeId: number): void{
    this.pokemonDetails = this.pokemonsList.find(item => item.id === pokeId);
  }

  private getPokeTypes(): void {
    this.pokeService.getPokeTypes()
      .subscribe((poke: IPokeList) => this.pokemonTypesList.push(...poke.results));    
  }

  private LoadPokeList(page: number): void {
    this.pokeService.getPokeList(page)
      .subscribe((poke: IPokeList) => {        
        poke.results.forEach(p => 
          // load Poke Details for each Pokemon
          this.pokeService.getPokeDetails(p.url)
            .subscribe((pokeDetails: IPokeDetails) =>             
              this.pokemonsList.push(pokeDetails))  
        );
      });    
  } 
}
