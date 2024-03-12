import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { albumData } from '../inteface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.sass'
})
export class AlbumsComponent {
  constructor(private dataService: DataService) { }

  counter: number = 101;
  data!: albumData[]

  ngOnInit(){
    this.dataService.getData().subscribe(data => {
      this.data = data
    }, error => {
      console.error('Произошла ошибка при получении данных:', error);
    });
    
  }

  createAlbum(f: NgForm){
    f.value.id = this.counter;
    this.counter++;
    this.data.push(f.value)
    
    f.reset()
    
  }
  deleteAlbum(albumId: number){
    this.dataService.removeData(albumId).subscribe(() => {
      this.data = this.data.filter((el) => el.id != albumId)   
      
    })
  }
}
