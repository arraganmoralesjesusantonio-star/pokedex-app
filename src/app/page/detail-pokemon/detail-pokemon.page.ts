import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonContent,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonProgressBar,
  IonFab,
  IonFabButton,
  IonIcon,
  LoadingController,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { Pokemon } from '../../services/pokemon';
import { IPokemon } from '../../models/pokemon.model';
import { GetStatPipe } from '../../pipes/get-stat-pipe';
import { POKEMON_STATS } from '../../resources/pokemon-stats';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.page.html',
  styleUrls: ['./detail-pokemon.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonProgressBar,
    IonFab,
    IonFabButton,
    IonIcon,
    GetStatPipe,
  ],
})
export class DetailPokemonPage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private loadingCtrl = inject(LoadingController);
  private pokemonService = inject(Pokemon);

  public pokemon = signal<IPokemon | undefined>(undefined);
  pokemonStats = POKEMON_STATS;

  constructor() {
    addIcons({ arrowBackOutline });
  }

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const loading = await this.loadingCtrl.create({
        message: 'Cargando Pokémon...',
      });
      await loading.present();

      try {
        const data = await this.pokemonService.getPokemon(id);
        this.pokemon.set(data);
      } catch (error) {
        console.error('Error al cargar el Pokémon:', error);
      } finally {
        await loading.dismiss();
      }
    }
  }

  goBack() {
    this.router.navigateByUrl('list-pokemon');
  }
}