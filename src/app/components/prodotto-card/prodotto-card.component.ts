import { Component, Input, output } from '@angular/core';
import { Prodotto } from '../../models/Prodotto';
import { CurrencyPipe, NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-prodotto-card',
  imports: [UpperCasePipe, CurrencyPipe, NgClass],
  templateUrl: './prodotto-card.component.html',
  styleUrl: './prodotto-card.component.css'
})
export class ProdottoCardComponent {
  @Input()
  prodotto?: Prodotto;

  prodottoSelezionato = output<Prodotto>();

  scatenaEvento() {
    this.prodottoSelezionato.emit(this.prodotto!);
  }

  saluta() {



    alert("Ciao");
  }
}
