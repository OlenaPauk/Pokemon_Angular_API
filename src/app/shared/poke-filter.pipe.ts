import { Pipe, PipeTransform } from '@angular/core';
import { IPokeDetails } from './interfaces/pokeDetails.interface';

@Pipe({
  name: 'pokeFilter'
})
export class PokeFilterPipe implements PipeTransform {
  transform(items: IPokeDetails[], filter: string): any {
    if (!items || !filter) {
        return items;
    }    
    return items.filter(item => 
      item.types.some(u => u.type.name === filter));
  }
}
