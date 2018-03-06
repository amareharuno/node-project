import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.less']
})
export class EntityDetailsComponent implements OnInit {

  @Input() visible: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
