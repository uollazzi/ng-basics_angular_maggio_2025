import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { Animale } from "../../models/Animale";
import { Prodotto } from '../../models/Prodotto';


@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nome: string = "Brad Pitt"; // <= type inference
  anno: number = 78;

  animale: Animale = { nome: "Fiocco", razza: "gatto" };

  prodotto?: Prodotto;

  bici?: Prodotto = {
    id: 1,
    nome: "Bicicletta",
    prezzo: 120,
    inOfferta: false
  };

  esempio() {
    this.prodotto = {
      id: 1,
      nome: "Bicicletta",
      prezzo: 120,
      inOfferta: false
    };

    let eta = 16;
    let patentato = false;

    if (eta >= 18) {
      patentato = true;
    } else {
      patentato = false;
    }

    patentato = eta >= 18 ? true : false; // operatore ternario
  }

}


