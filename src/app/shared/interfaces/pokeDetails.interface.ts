export interface IPokeDetails {
    id: number;
    name: string;
    url: string;    
    sprites: IPokeSprites;
    types: IPokeTypeSlot[];
    stats: IPokeBaseStat[];
    moves: IPokeMove[];
}
export interface IPokeTypeSlot{
   type: IPokeType
}
export interface IPokeSprites{
    front_shiny:   string
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