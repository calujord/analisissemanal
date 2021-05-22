import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-item-cart',
  templateUrl: './add-item-cart.component.html',
  styleUrls: ['./add-item-cart.component.css']
})
export class AddItemCartComponent implements OnInit {

  constructor() { }
  @Input() cant: number;


  @Output()
  onChange = new EventEmitter<number>();
  ngOnInit(): void {
  }

  increase() {
    this.cant++;
    this.onChange.emit(this.cant);
  }
  decrease() {
    if (this.cant > 0) {
      this.cant--;
      this.onChange.emit(this.cant);
    }

  }

}
