import { Component, EventEmitter, Input, Output } from '@angular/core';
import { personaje } from 'src/interfaces/personaje';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() personaje: any = {}

  @Output() eventoSaludo = new EventEmitter<any>();
  @Output() eliminar = new EventEmitter<any>();

  constructor() {

  }

}
