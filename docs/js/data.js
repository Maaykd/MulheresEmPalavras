// ===== Data Store - Banco de Dados Real da Biblioteca =====
// Dados extraídos do arquivo CSV - 55 obras

// Books data - 55 obras
const books = [
    {
        id: 1,
        title: "Girassois Femininos",
        author: "Luís de Oliveira",
        year: 2018,
        genre: "Suspense",
        synopsis: "Um sedutor e impiedoso assassino tira vidas de diversas mulheres ao longo de vários anos e deixa sempre sua marca, que ajuda a polícia a unir os casos ao mesmo tempo em que os crimes não seguem exatamente sempre o mesmo modus operandi: as vítimas têm marcado no corpo um girassol.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/capa_release_girassois_femininos_luis_de_oliveira_aprovacao2-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 2,
        title: "Sabrina e Leonora",
        author: "Danieli Rosa e Raquel Marques",
        year: 2022,
        genre: "Romance",
        synopsis: "Sabrina e Leonora têm personalidades bastante diferentes. Enquanto Sabrina é uma mulher decidida e focada, Leonora se deixa levar pelo destino. Por volta dos seus 30 anos, cada uma encara a seu modo os desafios da vida adulta.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2010%202022/0001%20San%20Eventos/capa_release_sabrina%20e%20leonora_Danieli%20Rosa%20e%20Raquel%20Marques_aprovacao_3%20nova-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 3,
        title: "Duas Marias",
        author: "Guilherme Tibau Figueiredo",
        year: 2022,
        genre: "Romance",
        synopsis: "Numa época e região comandadas pelo poderio dos coronéis, duas mulheres empreendem uma luta pela sobrevivência. Na zona rural, Dora busca contornar a difícil situação em que vive.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/CAPAS/Capas%20DEZ%202021/capa_release_Duas%20Marias_Guilherme%20Tibau%20Figueiredo_aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 4,
        title: "Me (Des)Construí",
        author: "Julia Pivari",
        year: 2024,
        genre: "Poesia",
        synopsis: "Crescer é uma das tarefas mais dolorosas a qual o ser humano deve enfrentar. Este livro reflete o crescimento pessoal através de poesias que tocam a alma.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleasemedesconstruijuliapivari14x21aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 5,
        title: "O Que Não Ficou Para Trás - Volume 2",
        author: "Samia Wardani",
        year: 2023,
        genre: "Romance",
        synopsis: "Neste segundo volume, após o encontro forçado entre Felipe e Maria Clara, a continuação emocionante de uma história de amor e superação que conquistou milhares de leitores.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capasoquenaoficouparatrassamiawardaniprancheta1copia-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 6,
        title: "Poesia à Toa",
        author: "Marcia Arida",
        year: 2022,
        genre: "Poesia",
        synopsis: "Poesia à toa expressa uma trajetória de sentimentos, com os quais você pode se identificar. Uma coletânea de poesias que brincam com as palavras e tocam o coração.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2011%20setembro/0%20JANEIRO%202021/Poesia%20a%20Toa%20-%20Marcia%20Arida-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 7,
        title: "A Mãe do Ouro - 2ª Edição",
        author: "Gláucia Vale e Willian Vale",
        year: 2022,
        genre: "Romance",
        synopsis: "A opulência, o requinte, a crueldade e a exaustão da primeira e mais longa monarquia do Brasil. Uma história que mistura lendas brasileiras com romance contemporâneo.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2010%202022/capa_release_a%20ma%CC%83e%20do%20ouro_2ed__glaucia%20maria%20e%20willian_aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 8,
        title: "Juiz Da Resistência - Crônicas Da Retaguarda Humana",
        author: "João Marcos Buch",
        year: 2021,
        genre: "Crônica",
        synopsis: "Juiz da Resistência – crônicas da retaguarda humana chega como a um relato sensível sobre a resistência humana em tempos difíceis.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20CAPAS/Cadastramento/capa%20release_juiz%20da%20resistencia_jmb_aprovacao1-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 9,
        title: "Leitores Do Cárcere",
        author: "João Marcos Buch",
        year: 2024,
        genre: "Ensaios Brasileiros",
        synopsis: "Trata-se de um livro que versa sobre o sistema prisional, sobre a evolução da leitura como ferramenta de transformação e liberdade.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleaseleitoresdocarcerejmbaprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 10,
        title: "Aprisionadas Lágrimas De Homens",
        author: "João Marcos Buch",
        year: 2023,
        genre: "Crônica",
        synopsis: "Em Aprisionadas Lágrimas de Homens, João Marcos Buch traz diversos relatos que exploram a masculinidade e as emoções reprimidas na sociedade contemporânea.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/CAPAS/capa%20release_aprisionadas%20lagrimas%20de%20homens_JMB_aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 11,
        title: "Mulheres Infratoras: A Adolescência, A Precarização Social E As Medidas Socioeducativas",
        author: "Elida Braga",
        year: 2024,
        genre: "Políticas Públicas",
        synopsis: "A obra oferece uma visão crítica sobre as políticas socioeducativas, destacando as desigualdades permeadas pelo gênero feminino através das narrativas de adolescentes em cumprimento de medidas socioeducativas.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/imagemdowhatsappde2024-11-15as10.25.08df700e00-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 12,
        title: "O Amor Encarcera?",
        author: "Mônica Dantas",
        year: 2024,
        genre: "Políticas Públicas",
        synopsis: "Este material constituiu-se com foco na mulher e o delito, após exaustivas (re) leituras das transcrições contidas em entrevistas de mulheres privadas de liberdade e em cartas de filhas de mães que se encontram encarceradas.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleaseoamorencarceramonicadantas16x23aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 13,
        title: "Drogas, Gênero, Prisões: São Paulo a Buenos Aires",
        author: "Mércia Teodoro Batista",
        year: 2024,
        genre: "Políticas Públicas",
        synopsis: "Esta obra visa entender as vivências das mulheres, com o desdobramento além do gênero feminino, compreende especificidades da população preta, pobre e com baixa escolaridade.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/imagemdowhatsappde2024-11-15as10.25.0852e51178-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 14,
        title: "Crimes Contra a Dignidade Sexual: Da Prevenção Primária à Responsabilidade Social",
        author: "Eunice Rosa Godinho",
        year: 2024,
        genre: "Políticas Públicas",
        synopsis: "A cada oito minutos, uma mulher é estuprada no Brasil. O perfil das vítimas revela vulnerabilidades sociais que demandam atenção das políticas públicas.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleasecrimescontraadignidadesexualeunicerosagodinho16x23aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 15,
        title: "Mulher Luz Em Ascensão",
        author: "Lusana Barrozo",
        year: 2019,
        genre: "Humanidades",
        synopsis: "A obra fala de mulheres, mas envolve muitos assuntos. Preconceitos, sexo, religião, relacionamentos, trabalho e muito mais numa perspectiva de empoderamento feminino.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/capa_release_mulher_luz_Lusana_Barrozo_aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 16,
        title: "Case-se Com Você",
        author: "Fabiana Dórea",
        year: 2021,
        genre: "Humanidades",
        synopsis: "Após sofrer a intensa dor que a falta de propósito e o não pertencimento causam, a autora compartilha sua jornada de autodescoberta e amor-próprio.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleasecase-secomvocefabianadorea14x21aprovacaofinal-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 17,
        title: "Cléo de Verberena e o Mystério do Dominó Preto",
        author: "Marcela Grecco",
        year: 2021,
        genre: "Biografia",
        synopsis: "Este livro aborda a trajetória de Cleo de Verberena, reconhecida como a primeira detetive do Brasil, explorando seus mistérios e investigações.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/CAPAS/Capas%20novembro%202021/capa_release_cleo%20de%20verberena_marcella%20grecco_aprovacao_nova-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 18,
        title: "Bendita Sois Entre As Mulheres",
        author: "Renata Peron",
        year: 2021,
        genre: "Biografia",
        synopsis: "Bendita Sois Entre as Mulheres narra a história inspiradora de superação de mulheres que marcaram a história com sua força e determinação.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleasebenditasoisentreasmulheresrenataperonaprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 19,
        title: "Clarice Lispector: Introspecção e Simbolismo - 100 Anos",
        author: "Fátima Quintas",
        year: 2020,
        genre: "Biografia",
        synopsis: "Falar em Clarice Lispector é reter imagens subjetivas e entender o mundo através de uma perspectiva única, explorando sua obra e legado literário.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20a%2031%20DEZEMBRO%2020/capa_release_Clarice%20Lispector_100%20anos_Fa%CC%81tima%20Quintas_aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 20,
        title: "Depois de Isadora Duncan Nunca Houve Tanto Mar",
        author: "Almir Ribeiro",
        year: 2020,
        genre: "Pedagogia",
        synopsis: "Duncan transformou seu corpo em um palco, onde todos esses diálogos efervesceram. Uma obra sobre arte, movimento e transformação.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/Capas%202019/capa_release_depois%20de%20Isadora%20Duncan_Almir%20Ribeiro_aprova%C3%A7%C3%A3o_FINAL-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 21,
        title: "Luiza",
        author: "Patrícia Cotrim Valério e Luiz Augusto Valério",
        year: 2021,
        genre: "Biografia",
        synopsis: "Tão vulnerável em sua saúde física e ao mesmo tempo tão forte, Luíza surpreende pela capacidade de superação e resistência diante das adversidades.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleaseluizapatriciacotrim14x21aprovacao2-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 22,
        title: "Narrativas Femininas no Cárcere - Minha História De Vida",
        author: "Alex Giostri",
        year: 2021,
        genre: "Biografia",
        synopsis: "Em Narrativas Femininas no Cárcere: minha história de vida, o leitor encontra relatos poderosos sobre a experiência feminina no sistema prisional.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2011%20setembro/0%20JANEIRO%202021/capa_release_minha%20histo%CC%81ria%20de%20vida%20narrativas%20no%20ca%CC%81rcere_alex%20giostri%20org_aprovada%20(1)-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 23,
        title: "Mulheres Poéticas: A Poesia no Cárcere",
        author: "Alex Giostri",
        year: 2022,
        genre: "Poesia",
        synopsis: "Através do conhecimento que a literatura proporciona, nosso universo se expande. A poesia como forma de resistência e expressão no cárcere.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/CAPAS/mulherespoeticas-500x500-500x500.png",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 24,
        title: "Seis Mulheres No Campo De Estrelas",
        author: "Eclesia Oliveira",
        year: 2022,
        genre: "Romance",
        synopsis: "Seis mulheres brasileiras que se conheceram através de encontros à distância e compartilham suas histórias de vida, sonhos e desafios.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleaseseismulheresnocampodeestrelaseclesiam.oliveira14x21aprovacaofinal-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 25,
        title: "A Última Brasileira Viva",
        author: "Marchezoni Oliveira",
        year: 2023,
        genre: "Romance",
        synopsis: "A trama se desenrola num Brasil assolado por um terremoto, onde sua população luta pela sobrevivência em meio ao caos e à esperança.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20CAPAS/capa_a%20ultima%20brasileira%20viva_marchezoni%20de%20oliveira_aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 26,
        title: "Aruanda",
        author: "Neuza Maria Vidolin",
        year: 2022,
        genre: "Romance",
        synopsis: "A autora dentro da metafísica espírita, tenta provar que os problemas dos seres humanos têm origem espiritual e podem ser resolvidos através do conhecimento.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleasearuandaneuzavidolin16x23aprovacao2-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 27,
        title: "Dandara",
        author: "Tiago Santiago",
        year: 2021,
        genre: "Romance",
        synopsis: "A obra firma Dandara como orientadora, como cabeça da revolução que transformou Palmares numa sociedade mais justa e igualitária.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/capas2023/capasjun/dandara-tiago-santiago-capa-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 28,
        title: "Âmago da Imago - Um Epílogo Sobre Alice",
        author: "Ness Fontes",
        year: 2023,
        genre: "Novela Literária",
        synopsis: "Âmago da Imago é um alinhavado de fragmentos que constrói o cerne da narrativa sobre Alice, explorando psicologia e identidade.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2020/Nova%20Pasta%202020/capa_release_Amago%20da%20Imago_Ness%20Fontes_aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 29,
        title: "Melanina - Um Estranho Caso De Empatia",
        author: "Julio Lourenço",
        year: 2022,
        genre: "Novela Literária",
        synopsis: "Racismo tem cura? Instigado pela pergunta, Julio Lourenço desenvolveu esta obra que explora questões raciais e sociais através da ficção.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/Melanina%20-%20um%20estranho%20caso%20de%20empatia-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 30,
        title: "Rita de Lourdes",
        author: "Gabrielle Siqueira",
        year: 2023,
        genre: "Novela Literária",
        synopsis: "A narrativa acompanha a vida de Rita de Lourdes, esta jovem moradora da periferia que enfrenta os desafios da vida urbana com determinação.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/CAPAS/Capa%20aberta_Rita%20de%20Lourdes_Gabrielle%20Siqueira_Gr%C3%A1fica-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 31,
        title: "Vida Pós 30",
        author: "Fabiana Dórea",
        year: 2022,
        genre: "Crônica",
        synopsis: "A autora nos narra a sua história de idas e vindas, finais e recomeços, explorando as transformações que acontecem após os 30 anos.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleasevidapos30fabianadorea14x21aprovacao2-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 32,
        title: "Mulher Periférica - Super-Heroína Das Periferias",
        author: "Johnny da Silva Carvalho",
        year: 2023,
        genre: "Novela Literária",
        synopsis: "Aqui, as super-heroínas, além dos superpoderes do dia a dia de ultrapassar barreiras sociais, mostram a força da mulher periférica.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2031%20OUTUBRO%2020/Capa%20release_Mulher-01-01-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 33,
        title: "Desculpa, Atrasei!",
        author: "Stella Wilderom",
        year: 2022,
        genre: "Humanidades",
        synopsis: "A obra busca ajudar a informar mulheres mais jovens sobre os impactos de suas escolhas e, as chamadas, mães geriátricas, como fazer essa difícil jornada com mais leveza. Ao resolver ter filhos aos 36 anos, Stella Wilderom descobriu os impactos de nunca ter sido orientada sobre todas as questões que envolvem maternidade tardia e, por isso, nesta obra, relata de forma transparente e honesta os desafios da gravidez “tardia”.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/MAR%C3%87O%202023_/capareleasedesculpaatraseistellawilderom14x21aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 34,
        title: "Crônicas de Um Juiz que Solta",
        author: "João Marcos Buch",
        year: 2022,
        genre: "Crônica",
        synopsis: "Em Crônicas de Um Juiz que Solta, João Marcos Buch traz ao leitor o mais profundo de todos, uma vez que os textos aqui apresentados exalam um experiente e sensato olhar sobre a vida dentro e fora das prisões. As crônicas são tratadas de vida, são aulas de Direito, são ponderações e reflexões acerca de um sistema prisional doente e prestes a ruir cada vez mais.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/Artes/capa_release_cr%C3%B4nicas%20de%20um%20juiz%20que%20solta_jo%C3%A3o%20marcos%20buch_aprova%C3%A7%C3%A3o_nova-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 35,
        title: "Do Pensamento Para o Papel - 3ª Edição",
        author: "Alex Giostri",
        year: 2017,
        genre: "Pedagogia",
        synopsis: "Uma possibilidade de organizar as ideias é o silêncio, a ausência de som, o mergulho profundo no mundo do nada, do vazio. É quando cada criador volta-se a si mesmo, ao seu universo, às suas sensações, percepções, reflexões sobre o todo da vida e das coisas da vida. O ócio, o esvaziamento, isso tudo é a base senão o alicerce maior para a criação e, fundamentalmente, para a organização das ideias e das histórias. E não só isso, mas a capacidade de compreensão de cada um, a maturidade de viver a vida e as situações terríveis que a vida nos impõe, a paciência em compreender que o mundo das palavras é praticamente um poço sem fundo e que cada mergulho dará margem a mais um novo mergulho, muitas vezes sem volta e de modo solitário.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/Artes/2019/Julho!/capa_release_do%20pensamento%20para%20o%20papel_%20alex%20giostri_novo2019-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 36,
        title: "Seis Ferramentas Para o Desenvolvimento de Um Texto",
        author: "Alex Giostri",
        year: 2023,
        genre: "Pedagogia",
        synopsis: "A vida moderna nos leva às formas, às regras, aos manuais, como se o 'como fazer' fosse mais importante que o próprio fazer.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/front/978-85-60157-75-4-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 37,
        title: "Jimmy: O Contrato",
        author: "Cláudio Narciso",
        year: 2013,
        genre: "Ficção",
        synopsis: "Nesta divertida e intensa história investigativa, Cláudio Narciso intriga o leitor e a leitora sobre um caso atualíssimo de corrupção e arrepia com a sensualidade nas linhas que passam. Voltado para o público adulto, o texto não se limita a descrições quentes, mas vai além, dando vida e colorido a personagens que interagem, desenvolvendo as suas relações e revelando suas intimidades. É um passeio por lugares deslumbrantes numa trama de ação e paixão constantes",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/00%20a%2030%20NOVEMBRO%2020/capa_release_jimmy_o%20contrato_claudio%20narciso_aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 38,
        title: "Megafauna",
        author: "Rogério Justino",
        year: 2013,
        genre: "Romance",
        synopsis: "Nascido de uma experiência com a finalidade de prolongar a vida de um dinossauro, uma narrativa de ficção científica fascinante.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleasemegafaunarogeriojustino16x23aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 39,
        title: "Caminhando à Beira do Abismo",
        author: "Elcio Matos",
        year: 2022,
        genre: "Ficção",
        synopsis: "Caminhando à beira do abismo conta a história de Douglas, um jovem sonhador que abandona o magistério para tornar-se um aprendiz da revolução. Durante os conflitos na ditadura militar, Douglas se vê constantemente atormentado por sonhos que, por vezes, condizem com sua realidade. O destino parece gostar de pregar-lhe algumas peças, então se vê diante do amor e do ódio que, na mesma intensidade, moldam sua vida, fazendo-o sempre caminhar à beira do abismo.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2010%202022/0001%20San%20Eventos/capa_release_caminhando%20a%20beira%20do%20abismo_elcio%20matos_aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 40,
        title: "Arrabal",
        author: "Marisa Ferrari Monteiro",
        year: 2022,
        genre: "Romance",
        synopsis: "O que pode haver em comum entre um poeta e um soldado? No caso dos protagonistas, uma paixão avassaladora.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleasearrabalmarisaferrarimonteiro16x23aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 41,
        title: "Espelho Invertido",
        author: "Josè Barreto Hotten",
        year: 2022,
        genre: "Romance",
        synopsis: "Imagine descobrir que sua vida está construída sobre uma mentira! A primeira impressão nem sempre é a que fica.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleaseespelhoinvertidojosebarreto16x23aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 42,
        title: "Perfume das Flores que Plantei",
        author: "Zilda Costa",
        year: 2022,
        genre: "Ficção",
        synopsis: "Nesta obra você encontrará diversas possibilidades de vivência familiar, que o levarão a refletir que a educação recebida no lar, quando é falha, pode levar à consequência desastrosa. Será que é possível comprar uma família? Somente aqueles que possuem alto poder aquisitivo, poderão constituir uma família feliz? Qual a diferença de ter uma casa ou um lar? Todas essas perguntas serão respondidas por Maria que aplica o amor exigente, o único tipo de amor capaz de educar para a vida.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleaseoperfumedasfloresqueplanteizildacosta16x23-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 43,
        title: "Sedentos",
        author: "Marcelo Rocha",
        year: 2022,
        genre: "Romance",
        synopsis: "Em Sedentos, o autor Marcelo Rocha apresenta uma história regada de crimes, amor, ódio, vingança, dinheiro, bebida, sexo e rock'n'roll. Personagens extremamente diferentes que têm suas vidas cruzadas pela violência. Raul, Layla e Marinho são as três vozes que dão corpo à trama. Intercalando-se na composição da narrativa, convidam o leitor e a leitora a atravessarem suas duras carcaças, produzidas no decorrer de suas vidas, e mergulharem em suas fragilidades e esperanças.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2010%202022/capa_release_sedentos_marcelo%20rocha_aprovacao1_v2-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 44,
        title: "Vou te Contar",
        author: "Marco Antunes",
        year: 2022,
        genre: "Conto",
        synopsis: "A obra de Marco Antunes é dividida em três partes bem distintas, sendo: Histórias Descontadas do Tempo, que é uma coletânea de 50 personagens masculinas, com nomes de 5 letras, todos retratados, com uma linguagem poética e uma observação cheia de carinho e curiosidade. Personagens do mundo inteiro, alguns reais e outros fictícios. Retratos Cruéis, que o nome diz exatamente o que se pretende: retratar de modo impiedoso, sarcástico ou amargo a vida de 50 pessoas reais ou fictícias, em contos mínimos, onde menos é mais. Com velocidade poética ou anedótica, vai-se direto ao ponto, ao coração pulsante da personagem. Vou Te Contar, uma coletânea de prosa mais tradicional. São contos que exemplificam todas as possibilidades estilísticas e temáticas do autor.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2010%202022/0001%20San%20Eventos/capa_release_vou%20te%20contar_marco%20antunes_aprovacao1-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 45,
        title: "O Fim do Ego",
        author: "Marcos Cazuza",
        year: 2022,
        genre: "Psicologia",
        synopsis: "A obra traz o entendimento de que o cérebro humano é um depósito de informações fragmentadas, as quais acabam por se tornarem motivos de tantos equívocos e desequilíbrios neuro emocionais. Como solução, Marcos Cazuza propõe ao leitor/a uma libertação em relação aos maus efeitos interpretativos, também denominado ego, o senhor dos sofrimentos. O autor, para isso, evidencia o que sempre esteve diante dos nossos olhos, mas que não foi observado atentamente. Trata-se, por fim, de uma obra que possibilita uma reflexão sobre o todo que nos rodeia, sobretudo a si mesmo",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2010%202022/0001%20San%20Eventos/capa_release_o%20fim%20do%20ego_marcos%20roberto%20de%20souza_aprovacao%20final-500x500.jpg",
        library_url: "#"
    },
    {
        id: 46,
        title: "Manual Dos Pensamentos Livres",
        author: "Urbano Pelico",
        year: 2022,
        genre: "Variedades",
        synopsis: "A obra traz ao leitor e à leitora aforismos e textos escritos em diferentes fases da vida do autor que, estimulado pela curiosidade em saber até que ponto as asas das palavras levam os pensamentos, mergulhou em um método intuitivo para conjecturar, discutir, aprender, reverenciar, ou irreverenciar o comportamento humano diante do mundo.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/MAR%C3%87O%202023_/capareleasemanualdospensamentoslivresurbanopelicoaprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 47,
        title: "Mutum - 2ª Edição",
        author: "Thiago Costa Franco",
        year: 2022,
        genre: "Conto",
        synopsis: "Mutum apresenta vinte contos que buscam retratar aspectos do Brasil e da condição humana em suas múltiplas facetas.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleasemutum2edthiagocosta14x21-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 48,
        title: "Egressos e Perdidos",
        author: "Débora Campello",
        year: 2022,
        genre: "Romance",
        synopsis: "Um crime misterioso é o estopim para um caminho de descobertas sobre identidade, pertencimento e superação.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleaseegressoseperdidosdeboracampello16x23aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 49,
        title: "Pessoas Comuns",
        author: "Joâo Almeida",
        year: 2022,
        genre: "Ficção",
        synopsis: "Pessoas Comuns é uma obra sobre autoconhecimento e uma ode ao que há de mais fantástico no cotidiano. O livro acompanha a jornada de Salvador, um jovem que cresceu acostumado a se refugiar em meio às suas próprias fantasias e que, através de suas experiências, se vê descobrindo elementos mundanos que têm muito em comum com a realidade em que sempre quis viver. Ora imerso em suas próprias abstrações, ora bestificado com o trivial, Salvador caminha com curiosidade insaciável enquanto decide se se entrega de vez às suas ambições fantásticas ou à beleza de uma vida comum.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2010%202022/0001%20San%20Eventos/capa_release_pessoas%20comuns_joao%20almeida_aprovada%20(1)-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 50,
        title: "Que Pós-Utopia é Esta?",
        author: "Júlio Mendonça",
        year: 2018,
        genre: "Ensaio Literário",
        synopsis: "A edição do ano de 2015 do Simpósio Haroldo de Campos, realizado na Casa das Rosas, teve como tema o ensaio de Haroldo Poesia e modernidade: da morte do verso à constelação. O poema pós-utópico, considerado como um texto de grande importância para a reflexão sobre os rumos da poesia contemporânea.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/Artes/2019/29-08%20Que%20p%C3%B3s-utopia%20%C3%A9%20esta-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 51,
        title: "Nepente",
        author: "Mariana Basílio",
        year: 2015,
        genre: "Poesia",
        synopsis: "A palavra surge na Odisseia de Homero, quando Helena de Troia oferta a Telêmaco uma droga que alivia a dor e traz esquecimento.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/front/978-85-8108-658-3-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 52,
        title: "Perplexografias Mínimas",
        author: "Graça Lopes",
        year: 2023,
        genre: "Poesia",
        synopsis: "Os poemas de Graça Lopes estão repletos de olhos que veem. A palavra 'olhos' aparece diversas vezes em seus versos.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/agosto/capareleaseperplexografiasminimasgracalopes16x23aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 53,
        title: "Psique em Versos - Poesia de Analista",
        author: "Sonia Pires",
        year: 2022,
        genre: "Poesia",
        synopsis: "Compreender os processos psíquicos não é tarefa fácil. Como diz Freud: educar, governar e analisar são tarefas impossíveis. Não há análise sem analisando com demanda de mudança. O psicanalista se oferece como suposto saber, se ausentando de si mesmo para dar espaço e ferramentas, para que o sujeito encontre a sua verdade e decida sobre ela. Aqui o mundo psíquico ganha contornos poéticos, uma maneira de aliviar a aridez desse ofício, colocando perfume e leveza na bela experiência vivida através de túneis infindáveis da vida afetiva.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/CAPAS%20NOV-DEZ19/capa_release_psique%20em%20versos_sonia%20pires_aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 54,
        title: "Os Poemas Que Você Não Merecia",
        author: "Stéfano Avelino",
        year: 2020,
        genre: "Poesia",
        synopsis: "Amores, como é bem sabido de todos nós, se vão, voltam, ressurgem, exalam. E nesta obra, Os poemas que você não merecia, Stéfano Avelino homenageia os que se foram, os amores evaporados. Segundo o próprio autor, ele poderia ter transformado em contos, em narrativas em prosa, em histórias, mas a poesia,a lírica, a poética, o levou aos poemas e às sentimentalidades descritas em versos.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20CAPAS/0%20Lives/capa_os%20poemas%20que%20voce%20nao%20merecia_stefano%20avelino_aprovada-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 55,
        title: "Do Chão para o Chão",
        author: "Helena Lopes",
        year: 2021,
        genre: "Arte",
        synopsis: "Ao visitar um antigo campo de concentração polonês, chamou-lhe a atenção a terra que pisava, gerando reflexões sobre arte e memória.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/capas2023/capasjun/do-chao-para-o-chao-helenalopes-capa-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    }
];

// Authors data - extraída automaticamente dos livros
const authorsMap = new Map();

books.forEach(book => {
    if (book.author && !authorsMap.has(book.author)) {
        authorsMap.set(book.author, {
            name: book.author,
            biography: `${book.author} é autor(a) de "${book.title}" e outras obras importantes da literatura brasileira contemporânea.`,
            specialty: book.genre,
            booksCount: books.filter(b => b.author === book.author).length
        });
    }
});

const authors = Array.from(authorsMap.values());

// Genre list for filters
const genres = [
    "Todos",
    ...new Set(books.map(book => book.genre).filter(g => g))
].sort();

// Years for filters
const years = [...new Set(books.map(book => book.year))].sort((a, b) => b - a);

// Log summary
console.log(`📚 Biblioteca carregada: ${books.length} livros, ${authors.length} autores/as`);
console.log(`📖 Gêneros disponíveis: ${genres.length - 1}`);
console.log(`📅 Anos: ${Math.min(...years)} - ${Math.max(...years)}`);