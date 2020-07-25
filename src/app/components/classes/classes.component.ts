import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
})
export class ClassesComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  alerta: string  = 'alert-danger';
  // tslint:disable-next-line: ban-types
  propiedades: Object = {
    danger: 'true'
  };


  constructor() {}

  ngOnInit(): void {}
}
