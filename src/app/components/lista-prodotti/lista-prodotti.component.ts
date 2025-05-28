import { Component, Input } from '@angular/core';
import { ProdottoCardComponent } from '../prodotto-card/prodotto-card.component';
import { Prodotto } from '../../models/Prodotto';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-lista-prodotti',
  imports: [ProdottoCardComponent, JsonPipe],
  templateUrl: './lista-prodotti.component.html',
  styleUrl: './lista-prodotti.component.css'
})
export class ListaProdottiComponent {
  @Input()
  prodotti: Prodotto[] = [];

  @Input()
  titolo: string = "";

  selezionaProdotto(p: Prodotto) {
    console.log("Prodotto selezionato", p.nome);
  }
}
