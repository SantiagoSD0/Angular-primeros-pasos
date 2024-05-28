import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: '', name: '', power: 0
  }];

  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();

  public onDeleteById(id?: string):void {

    if(!id) return;

    console.log(id);

    this.onDelete.emit(id);
  }
}
