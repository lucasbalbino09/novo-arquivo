import { Component } from '@angular/core';
import { Filmes } from '../app/filmes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  nomedoFilme: string = "";  

  terror: Filmes[] = [
    {
      nome: "A morte do Demonio",
      imagem: "https://play-lh.googleusercontent.com/c-wvkd1DUUm8PdRfDqqRI5k6FCSkBBY8kSyfU6k_Avfl4aO0av6-oiJbzmVo5jDfd5Yy=w240-h480-rw",
      descricao: "Uma cabana isolada. Uma maldição antiga. Um mal implacável. Os produtores originais se reúnem para apresentar uma releitura genuinamente aterrorizante de sua obra-prima original de terror."
    },
    {
      nome: "O exorcista",
      imagem: "https://play-lh.googleusercontent.com/xEkHY9m0dWRwtWbMOVJrglUOUbsAoyuTU44EH5YM0BRkHerwxDNEwe2W_EMHgbDitvU86U_Wo75taaDGTQ",
      descricao: "William Friedkin dirige um dos filmes mais aterrorizantes já feitos. Quando uma encantadora garotinha de 12 anos de idade assume a voz e personalidade de outras pessoas, os médicos dizem que não há o que fazer. Conforme as pessoas começam a morrer, a mãe da garota perceve que sua filha está possuída por um demônio"
    },
    {
      nome: "Arraste me para o Inferno ",
      imagem: "https://play-lh.googleusercontent.com/vNbwmC7k3QxjSMqcyqFWSrFx_IXGSmVWhT2b1wMR7pwrKBo9_6n6fBWnprjhu1bAZTzr1g=w240-h480-rw",
      descricao: "O diretor Sam Raimi retorna às raízes do cinema de terror com a história original de uma jovem amaldiçoada por uma cigana idosa que deve se livrar de um botão amaldiçoado antes de ser literalmente arrastada para o Inferno por um espírito maligno"
    }

  ];
  acao: Filmes[] = [
    {
      nome: "Mandando bala",
      imagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/08/52/20128604.jpg",
      descricao: "Em um beco escuro, o misterioso Smith (Clive Owen) tenta salvar uma mulher que acaba de dar à luz. Smith não consegue salvá-la, que morre em meio ao tiroteio ocorrido, mas consegue resgatar o bebê."
    },
    {
      nome: "O atirador",
      imagem: "https://musicart.xboxlive.com/7/6b3f1200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      descricao: "O atirador Marksman Bob Lee Swagger deixa o exército e desaparece sem deixar rastros. Ele volta para impedir o assassinato do Presidente dos Estados Unidos, mas é enganado e passa a ser perseguido como criminoso."
    },
    {
      nome: "Os Mercenarios",
      imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBqTkE1t6UOi3_NboIpsRuZlU2mCRApy0Qpu2wJrgt4LQLXuNg",
      descricao: "Um grupo de mercenários, liderado por Barney Ross e composto de seus homens de confiança, aceita uma missão que parece ser rotineira: uma operação secreta, a mando da Igreja, para invadir o país sul-americano de Vilena e derrubar seu ditador."
    }

  ];
  aventura: Filmes[] = [
    {
      nome: "O livro de eli",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgj3C_zJc1WCLJeBLjllwTslh56YyARtlguPjnEkHNev6iumWE",
      descricao: "Em um futuro não muito distante, 30 anos após o término da última guerra. Eli (Denzel Washington) é um homem solitário, que percorre a América do Norte devastada. Ele apenas deseja paz, mas ao ser desafiado não foge à luta."
    },
    {
      nome: "viagem ao Centro da Terra",
      imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQeXa16Io8bMtYGD4o3XEr-u1DYQ1LUWjD3Uvvd-za3VQXr2W_L",
      descricao: "Em Viagem ao Centro da Terra - O Filme, Trevor Anderson (Brendan Fraser) é um cientista cujas teorias não são bem aceitas pela comunidade científica. Decidido a descobrir o que aconteceu com seu irmão Max, que simplesmente desapareceu, ele parte para a Islândia juntamente com seu sobrinho Sean (Josh Hutcherson) e a guia Hannah."
    },
    {
      nome: "A busula de ouro",
      imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTVK5bDIRu-eWTvAZYAYrg0eJvTnjlIs_XdFP4N2UcPKuX_4qlw",
      descricao: "Em A Bússola de Ouro, Lyra Belacqua (Dakota Blue Richards) é uma órfã que foi criada na Universidade Oxford. No mundo em que vive todas as pessoas têm um daemon, ou seja, uma manifestação de sua própria alma em forma animal. Lyra leva uma vida tranqüila até ela e seu daemon, Pantalaimon, descobrirem a existência de uma substância misteriosa chamada Pó."
    }

  ];

}

