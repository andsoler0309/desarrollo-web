import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
import { ArtworkModule } from '../artwork/artwork.module';



@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    ArtworkModule,
  ],
  declarations: [
    MuseumListComponent,
    MuseumDetailComponent
  ],
  exports: [MuseumListComponent, MuseumDetailComponent]
})
export class MuseumModule { }
