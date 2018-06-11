import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss'],
})
export class PassengerDetailComponent implements OnChanges {
  @Input() item: Passenger;
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes) {
    console.log('changes: ', changes);
    if (changes.item) {
      this.item = Object.assign({}, changes.item.currentValue);
    }
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.item);
    }
    this.editing = !this.editing;
  }

  onNameChange(name: string) {
    this.item.fullname = name;
  }

  onRemove() {
    this.remove.emit(this.item);
  }
}
