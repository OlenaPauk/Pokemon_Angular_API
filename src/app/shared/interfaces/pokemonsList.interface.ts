import { IPokeDetails } from './pokeDetails.interface';

export interface IPokeList {
    count: number;
    results: IPokeDetails[];
}