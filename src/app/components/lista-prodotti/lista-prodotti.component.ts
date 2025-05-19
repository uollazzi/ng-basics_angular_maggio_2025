import { Component } from '@angular/core';
import { ProdottoCardComponent } from '../prodotto-card/prodotto-card.component';

@Component({
  selector: 'app-lista-prodotti',
  imports: [ProdottoCardComponent],
  templateUrl: './lista-prodotti.component.html',
  styleUrl: './lista-prodotti.component.css'
})
export class ListaProdottiComponent {

}
