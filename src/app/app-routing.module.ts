import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { MenuComponent } from './menu/menu.component'
import { AboutUsComponent  } from './about-us/about-us.component'
import { GalleryComponent } from './gallery/gallery.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'menu',
    pathMatch: 'full',
    component: MenuComponent,
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutUsComponent,
  },
  {
    path: 'gallery',
    pathMatch: 'full',
    component: GalleryComponent,
  },
  { path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
