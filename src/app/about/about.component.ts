import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  data = {
    name: 'Doughballs Pizzas',
    bio: 'Best Pizza in town',
    image: './assets/favicon-32x32.png'
  };

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/about-us' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image }
    ]);
  }

}

