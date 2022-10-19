import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Output() onMenuChange = new EventEmitter();
  fireMenuChange(e: any) {
    this.onMenuChange.emit(e);
  }

  ngOnInit(): void {}
}
