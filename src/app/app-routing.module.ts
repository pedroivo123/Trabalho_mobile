import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-livro',
    loadChildren: () => import('./livro/cadastro-livro/cadastro-livro.module').then( m => m.CadastroLivroPageModule)
  },
  {
    path: 'lista-livro',
    loadChildren: () => import('./livro/lista-livro/lista-livro.module').then( m => m.ListaLivroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
