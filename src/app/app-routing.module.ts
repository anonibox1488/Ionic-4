import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pelis', pathMatch: 'full' },
  { path: 'pelis', loadChildren: './page/pelis/pelis.module#PelisPageModule' },
  { path: 'peli/:id', loadChildren: './page/peli-details/peli-details.module#PeliDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
