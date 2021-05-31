import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent implements OnInit {
  _album:any = [];
  
  constructor(private _lightbox: Lightbox) {
    for (let i = 50; i <= 100; i++) {
      const src = `https://picsum.photos/id/${i}/1000/750.jpg`;
      const caption = 'Image ' + i + ' caption here';
      const thumb = `https://picsum.photos/id/${i}/250/250.jpg`;
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._album.push(album);
    }
  }

  ngOnInit() {
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
