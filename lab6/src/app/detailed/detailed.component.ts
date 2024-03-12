import { Component } from '@angular/core';
import { albumData } from '../inteface';
import { DataService } from '../data.service';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-detailed',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './detailed.component.html',
  styleUrl: './detailed.component.sass'
})
export class DetailedComponent {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute) { }

  album!: albumData 


  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const albumId: number = Number(params.get('albumId'))
      
      this.dataService.getElemById(albumId).subscribe(data => {
        this.album = data
        
      }, error => {
        console.error('Произошла ошибка при получении данных:', error);
      });
      
    });
  }

  editAlbum(f: NgForm){
    this.album.title = f.value.title
    this.dataService.updateData(this.album)
    
    f.reset()
  } 
}
