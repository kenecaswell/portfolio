import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  public bgTop = 0;
  public bgLeft = 0;
  public textureWidth = 500;
  public textureHeight = 500;
  public imageWidth = 500;
  public imageHeight = 500;

  constructor() { }

  ngOnInit() {
    this.onResize(null);
  }

  onResize(event) {
    const sw = event ? event.target.innerWidth : window.innerWidth;
    const sh = event ? event.target.innerHeight : window.innerHeight;

    const w = 1600;
    const h = 900;

    const xRatio = sw / w;
    const yRatio = sh / h;
    let scaleRatio;

    // set scale ratio to BIGGER size
    if (xRatio >= yRatio) {
      scaleRatio = xRatio; // + .5;	// to allow parallax, add .5 to ratio
    } else {
      scaleRatio = yRatio; // + .5; // to allow parallax, add .5 to ratio
    }

    const bgImgW = scaleRatio * w;
    const bgImgH = scaleRatio * h;

    this.bgTop = (bgImgH - sh) * -0.5;
    this.bgLeft = (bgImgW - sw) * -0.5;
    this.textureWidth = bgImgW;
    this.textureHeight = bgImgH;
    this.imageWidth = bgImgW;
    this.imageHeight = bgImgH;
  }

}
