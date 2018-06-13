import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss'],
})
export class PassengerDetailComponent {
  @Input() item: Passenger;
  @Output() edit = new EventEmitter<Passenger>();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  editing = false;

  toggleEdit() {
    this.editing = true;
  }

  onSubmit(name: string) {

    this.edit.emit({...this.item, fullname: name});
    this.editing = false;
  }

  onRemove() {
    this.remove.emit(this.item);
  }
}
