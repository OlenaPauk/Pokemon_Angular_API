export interface IPokeDetails {
    id: number;
    name: string;
    types: IPokeTypeSlot[];
    stats: IPokeBaseStat[];
    moves: IPokeMove[];
}
export interface IPokeTypeSlot{
   type: IPokeType
}
export interface IPokeType{
    name: string
}
export interface IPokeBaseStat{
    base_stat: number;
    stat: IPokeStat
}
export interface IPokeStat{
    name: string
}
export interface IPokeMove{
}