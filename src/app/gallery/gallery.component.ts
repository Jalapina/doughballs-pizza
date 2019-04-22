import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  
  imageUrlArray = ["../../assets/calzone.jpg","../../assets/burger.jpg","../../assets/food-back.jpg"]

  ngOnInit() {
  }

}
