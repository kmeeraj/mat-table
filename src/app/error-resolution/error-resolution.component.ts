import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-resolution',
  templateUrl: './error-resolution.component.html',
  styleUrls: ['./error-resolution.component.scss']
})
export class ErrorResolutionComponent implements OnInit {

  @Input()
  steps: Step[];
  constructor() { }

  ngOnInit() {
  }

}


export interface Step {
  remedy: string;
  remedyOpcode: string;
  remedyInfo: any;
}
