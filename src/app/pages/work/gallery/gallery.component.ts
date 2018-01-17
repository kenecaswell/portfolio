import { Component, OnInit } from '@angular/core';

import { GalleryThumb} from './gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  item1: GalleryThumb = new GalleryThumb(
    'CrashShop Reel',
    '../../assets/images/portfolio/video/cs-reel.jpg',
    'video');
  item2: GalleryThumb = new GalleryThumb(
    'Surya Quality',
    '../../assets/images/portfolio/video/surya-quality.jpg',
    'video');
  item3: GalleryThumb = new GalleryThumb(
    'Surya Catalog',
    '../../assets/images/portfolio/video/surya-catalog.jpg',
    'video');

  thumbs: GalleryThumb[] = [this.item1, this.item2, this.item3];

  constructor() { }

  ngOnInit() {
  }

}
