import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { albumImg } from '../inteface';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.sass'
})
export class AlbumPhotosComponent {
  constructor( private location: Location, private dataService: DataService,  private route: ActivatedRoute ) { 
  }

  data!: albumImg[]
  imgUrlNow: string | undefined

  ngOnInit(){
    

    this.route.paramMap.subscribe(params => {
      const albumId: number = Number(params.get('albumId'))
      
      this.dataService.getImg(albumId).subscribe((data: albumImg[]) => {
        this.data = data
        
      }, (error: any) => {
        console.error('Произошла ошибка при получении данных:', error);
      });
      
    });
    
  }

  goBack() {
    this.location.back();

  }

}
