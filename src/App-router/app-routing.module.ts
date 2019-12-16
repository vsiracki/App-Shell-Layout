import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';





const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' } ,



  /* WildCard*/
  { path:'**',
    loadChildren: () => import('../core/app-not-found/not-found.module').then(m => m.NotFoundModule), }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
     ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
