import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
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

  public pokeFilter: string = '';

  public isShowT: boolean=false;
  public topPosToStartShowing:number = 100;
  public scrollPosition: number;

  constructor(public pokeService: PokemonsService) { }

  ngOnInit() {
    this.LoadPokeList(0);
    this.getPokeTypes();
  }
  @ViewChild("buttonMore", {static: false}) Down: ElementRef;
  @HostListener('window:scroll')
  checkScrollTop() {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (this.scrollPosition >= this.topPosToStartShowing) {
      this.isShowT = true;
    } else {
      this.isShowT = false;
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  gotoDown() {
    this.Down.nativeElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  morePokemons(): void {
    this.pagesCount++;
    this.LoadPokeList(this.pagesCount);
  }

  filterPokeType(e) {
    this.pokemonDetails = null;
  }

  pokeDetails(pokeId: number): void {
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
            .subscribe((pokeDetails: IPokeDetails) => {
              this.pokemonsList.push(pokeDetails);
              this.pokemonsList.sort((u, v) => u.id - v.id);
              this.pokeFilter = '';
            })
        );
      });
  }


}
