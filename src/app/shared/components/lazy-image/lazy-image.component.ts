import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded : boolean = false;

  ngOnInit(): void {
    if( !this.url ) throw new Error('URL property is required');
  }

  // onLoad() {
  //   console.log('Image loaded');
  //   this.hasLoaded = true;
  // }

  // Código SOLO a modo de prueba para dar un lapso de tiempo y apreciar el refreco de las imagenes
  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000 );
  }

}
