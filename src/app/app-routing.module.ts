import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search-page.module').then(m => m.SearchPageModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
