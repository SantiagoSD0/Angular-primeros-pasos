import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characterList: Character[] = [{
    id: uuid(), name: 'Krillin', power: 1000},{
    id: uuid(), name: 'Goku', power: 9500},{
    id: uuid(), name: 'Vegeton', power: 7500
  }];

  public AddNewCharacter( character: Character): void {

    const newCharacter: Character = { ...character, id: uuid() };

    this.characterList.push(newCharacter);
  }

  public DeleteById (id: string): void{
    this.characterList = this.characterList.filter( character => character.id !== id );
  }

}
