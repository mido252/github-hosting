import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'Home' },
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'gallery', component: GalleryComponent, title: 'Gallery' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' },
  { path: '**', component: NotfoundComponent, title: 'Not Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
