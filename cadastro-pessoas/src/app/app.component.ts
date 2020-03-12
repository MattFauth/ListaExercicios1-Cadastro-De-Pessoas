import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nome = null;
  pessoas = [

  ];

  adicionar(){
    this.pessoas.push(this.nome);
    this.nome = null;
  }
}
