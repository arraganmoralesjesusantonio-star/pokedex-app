import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-pokemon',
    pathMatch: 'full',
  },
  {
    path: 'list-pokemon',
    loadComponent: () => import('./page/list-pokemon/list-pokemon.page').then( m => m.ListPokemonPage)
  },
  {
    path: 'detail-pokemon',
    loadComponent: () => import('./page/detail-pokemon/detail-pokemon.page').then( m => m.DetailPokemonPage)
  },
];