import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent {
  public historias = [
    {
      titulo: "Meu sonho de ser mães e as tentativas pela maternidade",
      conteudo: "Desde sempre sonhava em ser mãe, mas as tentativas frustadas me deixam bastante triste. A cada tentativa que dá errado é um aperto em meu coração e a incerteza de que meu sonho..."
    },
    {
      titulo: "Encontrando e retomando a esperança",
      conteudo: "Enfrentei uma das provações mais difíceis da minha vida, quando perdi o meu filho recém-nascido. Estou extremamente abalada e impotente, sem forças para nada. No entanto, com o apoio de grupos..."
    },
    {
      titulo: "Um novo começo após a perda do meu filho querido",
      conteudo: "Após perdermos nossos gêmeos prematuros, enfrentamos um período de profunda tristeza e desespero. No entanto, através de terapia individual e familiar, encontramos um caminho de cura... "
    }
  ]
}
