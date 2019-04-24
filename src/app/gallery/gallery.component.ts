import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  
  imageUrlArray = ["../../assets/calzone.jpg","../../assets/sausage-pizza.jpg","../../assets/mushroom.jpg","../../assets/veggie-monster-pizza.jpg"]

  ngOnInit() {
  }

}
