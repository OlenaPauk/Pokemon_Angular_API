import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from '../poke-service.service';
import { Pokemon } from '../pokemon';
import { GetPokemonsResults } from '../getPokemonsResults';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemonsList;
  showList: boolean = false;
  // isLoading: boolean = false;
  constructor(private pokeService: PokeServiceService) { }

  ngOnInit() {
    this.pokemonsList = this.pokeService.getPokeList()
    .subscribe(
        data => {
          this.pokemonsList = (<GetPokemonsResults>data).results;
          this.showList = true
        },
        error => console.log(error)
      );
    
    // this.loadMore();
  }
  
  // loadMore() {
  //   this.isLoading = true;
  //   this.pokeService.getPokemonList(this.pokemonsList.length, 12)
  //     .then(pokemon => {
  //       pokemon = pokemon.map(p => {
  //         p.imageLoaded = false;
  //         return p;
  //       });
  //       this.pokemonsList = this.pokemonsList.concat(pokemon);
  //       this.isLoading = false;
  //     })
  //     .catch(() => {
  //       this.isLoading = false;
  //     });
  // }
}
