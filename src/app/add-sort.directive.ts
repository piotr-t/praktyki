import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddSort]'
})
export class AddSortDirective {



  @HostListener('click', ['$event.target'])
    eventClick(e): any{
      // alert('ok');
     //  this.el.nativeElement.innerHTML = '<app-sort-up></app-sort-up> ' + this.el.nativeElement.innerHTML;
     console.log(this.el.nativeElement.children[0]);
     this.el.nativeElement.children[0].style = 'background-color:red';

    }

  constructor(private el: ElementRef) { }

}
