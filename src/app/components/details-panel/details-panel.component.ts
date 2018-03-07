import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.less']
})
export class DetailsPanelComponent implements OnInit {

  _visible: boolean;
  _title: string;

  @Output() visibleChange = new EventEmitter();

  @Input()
  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
    this.visibleChange.emit(this._visible);
  }

  @Input()
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
  constructor() {
  }

  ngOnInit(): void {
  }

  hidePanel(): void {
    this.visible = false;
  }
}
