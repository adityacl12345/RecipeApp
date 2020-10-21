import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @Output() menuItemSelected = new EventEmitter<string>();
  // onSelect(menuItem: string){
  //   this.menuItemSelected.emit(menuItem);
  // }
}
