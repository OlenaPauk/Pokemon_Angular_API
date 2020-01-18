import { IPokeItem } from './pokeItem.interface';

export interface IPokeList {
    count: number;
    results: IPokeItem[];
}