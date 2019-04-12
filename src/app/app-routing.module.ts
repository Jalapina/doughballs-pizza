import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { MenuComponent } from './menu/menu.component'
import { AboutUsComponent  } from './about-us/about-us.component'
import { GallaryComponent } from './gallary/gallary.component'

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
    path: 'gallary',
    pathMatch: 'full',
    component: GallaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
