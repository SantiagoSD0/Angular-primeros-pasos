import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService) {}

  get characterList(): Character[] {
    return [...this.dbzService.characterList];
  }

  public onDeleteCharacter(id: string):void{
    this.dbzService.DeleteById(id);
  }

  public AddNewCharacter( character: Character){
    this.dbzService.AddNewCharacter(character);
  }

}
