import { Directive, EventEmitter, Output } from '@angular/core';


@Directive({
  selector: '[appEdit]'
})
export class EditDirective {
  @Output()appEdit = new EventEmitter();

  constructor() { }

}
