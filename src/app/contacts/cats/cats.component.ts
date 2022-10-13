import {Component, OnInit} from '@angular/core';

interface Cat {
  name: string;
  imgUrl: string;
}

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  public cats: Cat[] = [];
  public bigCatImg: Cat = {name: "", imgUrl: ""};

  choose(cat: Cat) {
    this.bigCatImg = cat;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.cats = [{
      name: "Black",
      imgUrl: "data:image/jpeg;base64,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"
    },
      {
        name: "White",
        imgUrl: "https://n1s2.hsmedia.ru/e3/ec/d6/e3ecd6991bcc3050b74ac8c6eb58ddef/728x622_1_8bd5931882cbe17f0f273edfa5cad128@4526x3865_0xac120003_16621087371657528398.jpeg"
      },
      {
        name: "Relaxing",
        imgUrl: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-07/220726-cat-theo-elise-ew-636p-6cd3b0.jpg"
      }
    ];
    this.bigCatImg = this.cats[0];


  }
}
