import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ListaProdottiComponent } from "./components/lista-prodotti/lista-prodotti.component";
import { TitleComponent } from "./components/title/title.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // HeaderComponent,
    FooterComponent,
    ListaProdottiComponent,
    TitleComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-basics';
}
