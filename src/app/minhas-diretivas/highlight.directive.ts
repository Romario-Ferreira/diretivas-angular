import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

 @Input() color: string ='';

  constructor(
    //private _elementRef: ElementRef,
    //private _renderer: Renderer2
    ) {

    }

    @HostListener('mouseenter') onMouseEnter(){
      this.color = (this.color != '') ? this.color : 'red';
    }

    @HostListener('mouseleave') onMouseLeave(){
      this.color ='';
    }

  //  private highlight(color: string){
  //     this._renderer.setStyle(
  //       this._elementRef.nativeElement,
  //       'background-color',
  //       color
  //     );
  //   }

    @HostBinding('style.backgroundColor') get setColor (){
      return this.color;
    }

}
