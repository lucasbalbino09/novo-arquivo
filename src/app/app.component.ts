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
    },
    {
      nome: "Aterrorizante 2 ",
      imagem: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTbi-pyCAj_OcVlU9TrC4edM-yufIwoOvhs_JPE888hLfKfyqqP",
      descricao: "Terrifier 2 se passa um ano depois do primeiro filme. Acordando no necrotério após seu massacre na noite de Halloween do ano passado, Art the Clown (David Howard Thornton) está de volta no tempo para o Dia da Reforma! Desta vez, ele está de olho na jovem Sienna (Lauren LaVera) e seu irmão mais novo, Jonathan (Elliott Fullam)."
    },
    {
      nome: "Arraste me para o Inferno ",
      imagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSXCY7HFTGa8DY30ur2Evn-n75SuMKSJskFecEtBGaqslrWv9sk",
      descricao: "De férias no México, duas irmãs estão prestes a passar pelos momentos de maior tensão em sua vida: presas em uma gaiola de tubarões a 47 metros de profundidade no oceano, eles terão que lutar contra o tempo para permanecerem vivas."
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
      nome: "o Protetor",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Q_2O2RMd_DvQ_Ka4H6wyx5whCvprxwMx2LNChGnKCOAI49F5",
      descricao: "O Protetor: Capítulo Final é o terceiro - e último - filme da franquia O Protetor, iniciada em 2014 e inspirada pela série homônima estrelada por Edward Woodward nos anos 80. No terceiro capítulo da saga, desde que desistiu de sua vida como assassino do governo, Robert McCall (Denzel Washington) não consegue descansar o suficiente."
    },
    {
      nome: "Os Mercenarios",
      imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBqTkE1t6UOi3_NboIpsRuZlU2mCRApy0Qpu2wJrgt4LQLXuNg",
      descricao: "Um grupo de mercenários, liderado por Barney Ross e composto de seus homens de confiança, aceita uma missão que parece ser rotineira: uma operação secreta, a mando da Igreja, para invadir o país sul-americano de Vilena e derrubar seu ditador."
    },
    {
      nome: "Sete Homens e um Destino",
      imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRy3eLIUj1GhW6hLeu46v4GrOgyAzaVggWKvXiuFAr0zqIUo0np",
      descricao: "Os habitantes de um pequeno vilarejo sofrem com os constantes ataques de um bando de pistoleiros. Revoltada com os saques, Emma Cullen (Haley Bennett) deseja justiça e pede auxílio ao pistoleiro Sam Chisolm (Denzel Washington), que reúne um grupo especialistas para contra-atacar os bandidos."
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
    },
    {
      nome: "Dungeons & Dragons: Honra Entre Rebeldes",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjksKrlzRyNJIXX3d1dKK0Yu39kZZNTJY6-n6qvlqeFppubxPy",
      descricao: "Em Dungeons & Dragons: Honra Entre Rebeldes, em um mundo repleto de dragões, elfos, anões, orcs e outras criaturas fantásticas"
    },
    {
      nome: "A busula de ouro",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqktsvtgaPVUUo7hnaik6vmSnnNYRtRb0-hiR2jbbKjYzGPr4",
      descricao: "Megatubarão 2 é a sequência do filme lançado em 2018. No primeiro longa, na fossa mais profunda do Oceano Pacífico, a tripulação de um submarino fica presa após ser atacada por uma criatura pré-histórica que se achava estar extinta"
    },

  ];

}

