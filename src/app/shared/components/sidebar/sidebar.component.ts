import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {


  // private gifsService
  constructor( private gifsService: GifsService ) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag( tag: string ) {
    this.gifsService.searchTag( tag);
  }

}
