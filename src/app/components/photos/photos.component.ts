import { Component, OnInit } from '@angular/core';

// Model
import { PhotoModel } from '../../models/photo.model';

// Service
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photos: PhotoModel[];

  constructor(private photosService: PhotosService) {
    this.getPosts();
  }

  getPosts() {
    this.photosService.getPhotos().subscribe((posts) => {
      console.log(posts);
      this.photos = posts;
    });
  }

  ngOnInit() {}
}
