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
        synopsis: "Um sedutor e impiedoso assassino tira vidas de diversas mulheres ao longo de vários anos e deixa sempre sua marca, que ajuda a polícia a unir os casos ao mesmo tempo em que os crimes não seguem exatamente sempre o mesmo modus operandi: as vítimas têm marcado no corpo um girassol. Mas quem é o criminoso? E o que o terá transformado neste monstro que comete as maiores atrocidades Brasil afora?",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/capa_release_girassois_femininos_luis_de_oliveira_aprovacao2-500x500.jpg",
        biography:"Luís de Oliveira é um escritor, poeta e professor brasileiro nascido em 20 de julho de 1995, na cidade de Pereira Barreto, interior de São Paulo. Formado em Licenciatura e Bacharelado em Educação Física, iniciou sua trajetória literária em 2009 e, desde então, tem se destacado no cenário literário nacional. Luís de Oliveira é também um ativo promotor da cultura e da literatura em sua região. É coordenador do projeto Letras ao Vento, que incentiva a leitura entre crianças e adolescentes em Pereira Barreto.",
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 2,
        title: "Sabrina e Leonora",
        author: "Danieli Rosa e Raquel Marques",
        year: 2022,
        genre: "Romance",
        synopsis: "Sabrina e Leonora têm personalidades bastante diferentes. Enquanto Sabrina é uma mulher decidida e focada, Leonora se deixa levar pelo destino, muitas vezes sem um objetivo definido. Por volta dos seus 30 anos, cada uma encara a seu modo os desafios da vida adulta. Ao mesmo tempo que a ingenuidade vai sendo substituída pelas decepções, novos sonhos são despertados e descobertos, dando novas cores a uma vida que parecia monótona. No meio de tudo isso, cada uma dá apoio à outra, de um jeito que só amigas verdadeiras são capazes de fazer. Duas mulheres extremamente distintas - unidas por um forte laço de amizade.brina e Leonora têm personalidades bastante diferentes. Enquanto Sabrina é uma mulher decidida e focada, Leonora se deixa levar pelo destino. Por volta dos seus 30 anos, cada uma encara a seu modo os desafios da vida adulta.",
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
        synopsis: "Numa época e região comandadas pelo poderio dos coronéis, duas mulheres empreendem uma luta pela sobrevivência — própria e daqueles que amam. Na zona rural, Dora, abusada sexualmente pelo coronel Bentes e tendo sua filha afastada de si, busca contornar a difícil situação em que vive. Já em Salvador, Maria é uma babá que precisa fugir com o filho do patrão, o dr. Gualberto, para evitar uma tragédia desencadeada pelo desejo de vingança do coronel Peixoto — graças a um acidente com sua filha, do qual o médico é, indiretamente, culpado. Uma narrativa que revela a violência dos coronéis para manterem seus poderes e desejos, mas também mostra a criação de laços afetivos, amizades e redes de apoio como forma de resistência e sobrevivência.uma época e região comandadas pelo poderio dos coronéis, duas mulheres empreendem uma luta pela sobrevivência. Na zona rural, Dora busca contornar a difícil situação em que vive.",
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
        synopsis: "Crescer é uma das tarefas mais dolorosas a qual o ser humano deve enfrentar. Este livro reflete o crescimento e a dor da adolescência até o início da fase adulta. Trata-se de um passeio pela desenvoltura da maturidade e entendimento de mundo, com poemas-reflexões em busca de sentido e identidade.",
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
        synopsis: "Neste segundo volume, após o encontro forçado entre Felipe e Maria Clara, o casal busca uma nova tentativa de resgatar o relacionamento. Consciente de que autopiedade não é a solução, Maria Clara resolve se reerguer e enfrentar seus traumas, dialogando com Felipe, que não enxerga outra alternativa que não seja a de revelar seus motivos para a tomada de uma decisão tão drástica, num momento de desespero. Com as conversas e concessões necessárias, o casal luta pela sobrevivência de seu relacionamento, agora sem a presença de segredos devastadores entre si.",
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
        synopsis: "Poesia à toa expressa uma trajetória de sentimentos, com os quais você poderá facilmente se identificar. São textos escritos por mais de vinte anos; são poemas que tratam do amor, da desilusão, da dificuldade inerente aos relacionamentos, das expectativas afetivas, da conquista da individualidade.",
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
        synopsis: "A opulência, o requinte, a crueldade e a exaustão da primeira e mais longa corrida do ouro da idade moderna, uma instigante e original saga épica sobre as raízes e ancestralidade, narrada por uma polifonia de vozes resgatadas das sombras do esquecimento.",
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
        synopsis: "Juiz da Resistência – crônicas da retaguarda humana chega como a um relato/manifesto de um juiz que, por acreditar, resiste! Nesta obra, assim como em sua série de crônicas, João Marcos relata seu dia a dia, contato, vivência com pessoas apenadas, em privação de liberdade, em um sistema prisional que vê apenas números, carente de humanização e olho no olho.",
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
        synopsis: "Trata-se de um livro que versa sobre o sistema prisional, sobre a evolução histórica da pena, sobre as desigualdades que incidem na subversão da ordem vigente, sobre o caráter contraditório da justiça, sobre poder e relações de classe. Sobretudo, versa sobre os homens e o pesado fardo de uma história de injustiças e desigualdade.",
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
        synopsis: "Em Aprisionadas Lágrimas de Homens, João Marcos Buch traz diversos relatos de seu âmago, os quais transitam entre planos de realidade e da ficção. Ao dar voz a seres silenciados, excluídos da sociedade pelas grades da prisão, o autor busca resgatar o sentido humanitário que há muito fora suprimido por meio de leis e de convenções que se estabelecem pelo rótulo da justiça.",
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
        synopsis: "A obra oferece uma visão crítica sobre as políticas socioeducativas, destacando as desigualdades persistentes e os desafios enfrentados por essas adolescentes. Em uma narrativa que entrelaça história, legislação e depoimentos, o livro expõe as nuances das relações de gênero no contexto das infrações, propondo uma reflexão profunda sobre a forma como a sociedade lida com jovens infratoras e as implicações de um sistema que ainda não se desvencilhou da lógica do encarceramento.",
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
        synopsis: "Este material constituiu-se com foco na mulher e o delito, após exaustivas (re) leituras das transcrições das entrevistadas. Há um questionamento e duas prerrogativas sobre os motivos que levaram as mulheres a cometer o delito, sendo uma na perspectiva das próprias entrevistadas: por influência daqueles que elas amavam? E a outra, fruto das análises das marcas representativas e diálogos com as teorias que fundamentaram este estudo: “por influência da representação social do amor e do afeto, é que a sociedade patriarcal ensinou e impôs, o papel social da mulher?",
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
        synopsis: "Esta obra visa entender as vivências das mulheres, com o desdobramento além do gênero feminino, compreender como raça e classe se conectam às mulheres, e como a lógica do trabalho é uma circunstância importante, até mesmo para desmistificar as prisões.",
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
        synopsis: "A cada oito minutos, uma mulher é estuprada no Brasil. O perfil das vítimas, o número de casos registrados e, principalmente, subnotificados, chocam. As leis, embora revisadas há pouco tempo, não são capazes de promover a prevenção adequada dos crimes sexuais. Terá sua dignidade afrontada e sua intimidade violada, de forma sorrateira ou violenta, é algo que causa danos de várias ordens à vítima. Depois do fugaz prazer do autor, restará, por muito tempo, a dor da vítima. Esta obra perfila vítimas e autores, retratando o fenômeno e possíveis soluções a serem implementadas pelas policiais e pela sociedade.",
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
        synopsis: "A obra fala de mulheres, mas envolve muitos assuntos. Preconceitos, sexo, gravidez, maternidade, como lidar com a maturidade, casamento, traição, bullying... O universo feminino é a base das ideias da autora, que as expõe de maneira a estabelecer com as leitoras – e os leitores, por que não? – uma relação de identificação, cumplicidade e parceria.",
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
        synopsis: "Após sofrer a intensa dor que a falta de propósito e o não pertencimento causa, Fabiana Dórea, largou tudo para trás; uma vida confortável, carreira, família, país, noivo e resolveu se buscar. Onze anos depois, após muitos aprendizados e algumas mudanças radicais, inclusive uma transição de carreira, ela sentiu o chamado da Terra Mater. Após cruzar a ponte e realizar a melhor jornada de sua vida; o retorno à casa, Fabi compartilha as suas experiências e traz exercícios práticos para quem deseja dar o primeiro passo em direção a si.",
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
        synopsis: "Este livro aborda a trajetória de Cleo de Verberena, reconhecida como a primeira cineasta brasileira. Nascida Jacyra Martins da Silveira em 1904, Cleo de Verberena fundou em São Paulo junto de seu marido, Cesar Melani, a EPICA-FILM, companhia através da qual dirigiu e protagonizou seu primeiro e único filme, o longa metragem silencioso O Mysterio do Dominó Preto (1931). Trata-se da primeira obra destinada à diretora pioneira, resultado de pesquisas em fontes primárias como revistas e jornais da época, buscas em acervos e conversas com familiares.",
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
        synopsis: "Bendita Sois Entre as Mulheres narra a história inspiradora de superação de uma mulher trans que, apesar das inúmeras adversidades enfrentadas, conseguiu alcançar a idade de 47 anos. Em um contexto em que o Brasil é tristemente conhecido por ser o país que mais registra casos de violência contra travestis e mulheres trans, onde a expectativa de vida dessas mulheres é de apenas 35 anos, este livro é um testemunho poderoso de resiliência e coragem.",
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
        synopsis: "Falar em Clarice Lispector é reter imagens subjetivas e entender o mundo mediante reflexos de interioridade. Há um desejo de transmitir múltiplas sensações na análise da própria vida. Nada é estático, tudo se aglutina na complexidade do humano, pleno de indagações e de permanentes dúvidas. Mergulhar na introspecção revela o começo do que se deseja transmitir. E a sensibilidade corresponde à única perspectiva possível.",
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
        synopsis: "Duncan transformou seu corpo em um palco, onde todos esses diálogos efervescerem e foram oferecidos em cena como uma experiência comunal. Nesse Corpo palco Duncan escreveu seu mais potente manifesto; propôs redimensionar o movimento humano como algo prodigioso e sempre belo. E o corpo, como um agente sensual e poetizador da interação entre o que é humano e as forças mais fundamentais da Natureza.",
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
        synopsis: "Tão vulnerável em sua saúde física e ao mesmo tempo tão forte, Luíza surpreendeu do primeiro ao último dia de vida. Superou todas as expectativas, desrespeitando a medicina, e nunca deu lugar aos medos. Era uma fortaleza capaz de acalmar os corações, renovar as energias e dar coragem para enfrentar o que mais se apresentasse. Na sua pureza de criança, Lulu mostrava que grande parte dos limites é cada um que se impõe. Nem os movimentos corporais restritos, nem a fisionomia fora do padrão, nem os incômodos procedimentos pelos quais passava abalavam seu ânimo e sua alegria.",
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
        synopsis: "Em Narrativas Femininas no Cárcere: minha história de vida, o leitor e a leitora mergulham fundo na mente e no coração de mulheres que foram levadas ao crime pelos mais diversos motivos e acontecimentos. São dezesseis relatos viscerais que perpassam inúmeros fragmentos do grande espectro do aprisionamento feminino no Brasil, no qual entendemos melhor as falhas desse sistema e, principalmente, conhecemos quem vive dentro dele. Sem vitimização e em uma busca constante para ressignificar os erros cometidos, essas mulheres escrevem seus pensamentos e entregam nas palavras uma potência de renovação, que finalmente as levará para liberdade.",
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
        synopsis: "Através do conhecimento que a literatura proporciona, nosso universo se expande e nos faz pensar sobre nossa frágil e singular humanidade. Isso nos liberta. E mais, quando a literatura é criada dentro do cárcere, por meio de poemas, lindos poemas feitos por lindas mulheres, que estão fisicamente presas, além de libertar ela nos toca e nos faz olhar para o cárcere com ética e alteridade.",
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
        synopsis: "Seis mulheres brasileiras que se conheceram através de encontros à distância durante a pandemia de COVID19, decidem viajar a Portugal em 2022 e fazer a pé o Caminho Português de Santiago pela Costa. O livro narra o encontro, o convívio diário e a jornada dessas peregrinas quase desconhecidas, de personalidades tão distintas. Inicialmente conta os passeios por Lisboa e arredores, os vinhos e o fado e, descreve com riqueza de detalhes a peregrinação desde o Porto até Santiago de Compostela, chamado campo de estrelas, passando pela intrigante Variante Espiritual e, depois, até Muxía e Finisterra, considerado o fim do mundo para os antigos. Tudo o que viveram juntas é descrito com muito humor, leveza, pitadas de misticismo e espiritualidade, de forma a marcar suas vidas de maneira irreversível.",
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
        synopsis: "A trama se desenrola num Brasil assolado por um terremoto, onde sua população sobrevivente tenta se reorganizar enquanto sociedade. Para isso, uma antiga receita, eleger um líder. Sem preverem as consequências, o que se instala é uma ditadura brasileira. Há quem conteste, e uma verdadeira guerra se estabelece. Do povo, surge uma heroína: A última brasileira viva.",
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
        synopsis: "A autora dentro da metafísica espírita, tenta provar que os problemas dos humanos não têm maioridade. No mundo dos sonhos, duas garotas de 11 anos debatem suas agruras, pois experimentam cedo as derrotas morais. A menina negra se depara com o assédio racista, a menina branca com o assédio moral pela imaginação fértil. Presenciam a animosidade de crianças e adultos. O desequilíbrio mascarado do que é certo e errado. A fuga para o mundo dos espíritos, se dá pela necessidade do entendimento de onde começa e acaba a verdade dos adultos. No plano espiritual, vivem a serenidade e igualdade sonhada, o verdadeiro encontro com o Divino.",
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
        synopsis: "A obra firma Dandara como orientadora, como cabeça da revolução que Zumbi vem protagonizar por causa dela. É ela quem o provoca, é ela quem o convoca. Suas ideias de conquistas, suas estratégias nas batalhas eram brilhantes e muito respeitadas. Dandara é um livro de aventura, de amor, de acolhimento, de coragem, de fundamentos da filosofia africana nos quais crianças são divinas, os velhos são uma biblioteca viva orientando o presente, a comida boa, de qualidade e para todos é o grande preceito, o segredo do coração de uma casa.",
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
        synopsis: "Âmago da Imago é um alinhavado de fragmentos que constrói o cerne da transmutação da adolescência para o começo da vida adulta. Fala sobre as histórias, amores, desamores e a busca pelo autoconhecimento de Alice, uma jovem que some misteriosamente. Por medo do esquecimento de sua essência, ela incumbe Muriel e Baruque, suas eternas sombras, a escreverem um livro sobre sua história, utilizando as memórias e recortes de seu diário e as anotações guardadas no porão.",
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
        synopsis: "Racismo tem cura? Instigado pela pergunta, Julio Lourenço desenvolveu o enredo de Melanina - um estranho caso de empatia. Embora muita gente ainda conteste que o racismo, além de crime hediondo, seja doença grave, através desta novela fictícia, o autor classifica o desvio entre as patologias mais nefastas da humanidade. Para examinar a abominável moléstia, o livro revela personagens criadas em ambiente racista, algumas aparentemente incuráveis, investigando a possibilidade de tratamento com leveza e humor, sem perder a profundidade que o assunto merece.",
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
        synopsis: "A narrativa acompanha a vida de Rita de Lourdes, esta jovem moradora de um morro carioca que representa tantas Ritas de Lourdes pelo Brasil afora, que mesmo com outros nomes de batismo carregam consigo o mesmo estigma – a cor, a origem pobre, os preconceitos de que são vítimas, as humilhações a que são submetidas, as dificuldades da luta pela sobrevivência, que parece ser mais árdua para aqueles que, como elas e suas famílias, não têm qualquer privilégio na corrida da vida e descambam para o crime, atividade tão fácil e sedutora quanto previsível. A prostituição é a armadilha da qual Rita de Lourdes não consegue se desvencilhar, atirada pelas circunstâncias às quais resiste até não mais poder. Sua esperança imensa e sempre mais forte de conquistar outra vida para si e para os irmãos é o que a move dia a dia para realizar este sonho, que é tão simples para alguns e tão complicado para os desfavorecidos",
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
        synopsis: "A autora nos narra a sua história de idas e vindas, finais e recomeços, mas acima de tudo, trata-se de uma história sobre amor e coragem. A coragem de admitir e se permitir se desencontrar, de largar tudo para trás, para se conhecer. Fabiana costura, como em uma colcha de retalhos, os encontros, desencontros e aventuras que a impulsionaram a desbravar não apenas o que se passa da pele para dentro, mas a Vida que a aguardava ansiosamente para ser vivida.",
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
        synopsis: "Aqui, as super-heroínas, além dos superpoderes do dia a dia de ultrapassar obstáculos em uma sociedade que as veem como frágeis e submissas, possuem também as super habilidades de, por exemplo, voar. A Mulher Periférica, nesta história, se une com outras super-heroínas para combaterem o mau, e salvar a sociedade de machistas, racistas, misóginos, homofóbicos...",
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
        synopsis: "A vida moderna nos leva às formas, às regras, aos manuais, como se o “correto” existisse. Não que não exista. Naturalmente, o tradicional tem a sua importância, mas no fim das contas e no universo das artes e da criação o que vale é a competência e aptidão de cada criador, de cada artista. Neste sentido, o que podemos pensar é que devem ser estudadas as formas, as regras, e também os manuais. No entanto, é na compreensão do todo, de todas as literaturas possíveis, é na vivência interna e externa de cada indivíduo que se estabelecerá a visão de mundo, consequentemente, dessa maneira de ver e viver a vida se dará o autor e tudo o que se quer contar. O melhor caminho para todo e qualquer autor é primeiramente adquirir a cultura de base, a informação, é ter um claro entendimento de que a sua matéria-prima é o humano e por isso o seu olhar deve ser o mais puro possível. Se o autor estiver plastificado em sua bolha julgadora e dona da verdade, o mesmo não poderá acessar o outro lado da história. E quem perderá por fim será o leitor, afinal não se lê apenas livros, pessoas podem ser lidas também.",
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
        synopsis: "Nascido de uma experiência com a finalidade de prolongar a vida de um ditador, Eliel acabou sendo vendido por criminosos para um destino ainda mais sombrio: ser usado como fonte de material genético para o aprimoramento de uma espécie que se preparava para atacar os mundos da Confederação. Ao assumir as rédeas sobre a sua vida, ele acaba crescendo em um mundo alienígena, onde aprende lições de sobrevivência, sobre a cultura e modo de vida do inimigo e sobre a natureza do poder. Lutando por sua liberdade, Eliel se torna o fator decisivo de uma guerra que se espalha pela Galáxia e ameaça a própria existência da humanidade.",
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
        synopsis: "O que pode haver em comum entre um poeta e um soldado? No caso dos gêmeos Giordano e Giuseppe, além do rosto, um segredo e uma grande dor. Arrabal (codinome de Giuseppe) é o cavaleiro dos versos, o poeta e ator saltimbanco, que viaja com sua trupe de atores pelas cidades, interpretando as máscaras da Commedia dell’Arte. Ele divide um passado complicado com o irmão Giordano, esse o herói da força, o alto oficial do exército napolitano, o guerreiro, movido pela honra e pelo desejo de vitória. Por serem espíritos tão diversos, evitam a convivência, mas circunstâncias os obrigam a, pela primeira vez em muitos anos, se encontrarem em sua Nápoles natal e o confronto, inevitável, logo se transforma em uma disputa à qual apenas um dos dois poderá sobreviver.",
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
        synopsis: "Imagine descobrir que sua vida está construída sobre uma mentira! A primeira de todas. A verdade sobre seu nascimento. Agora, entre em uma montanha russa de emoções para acompanhar as alegrias, decepções e transformações adolescentes de Patrícia após se descobrir filha adotiva. Com narrativa cativante, José Barreto Hotten levará você a sentir, de dentro da história, o poder transformador de relações fortes e verdadeiras entre pessoas que se amam.",
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
        synopsis: "Mutum apresenta vinte contos que buscam retratar aspectos do Brasil e do povo brasileiro, sobretudo pela perspectiva da sofrida classe trabalhadora. Na obra, personagens explorados, marginalizados ou em crise existencial compartilham o mesmo mundo injusto, desigual e corrosivo, enquanto lutam por uma existência mais digna e por uma realidade menos hostil. O pano de fundo das histórias é a própria Literatura Brasileira e seus principais autores, muitos dos quais citados direta ou indiretamente nos contos.",
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
        synopsis: "Um crime misterioso é o estopim para um caminho de descobertas sobre o passado mal resolvido de três amigos de infância. Os amigos, Irene, Racine e Levi, um “Bande à Part” tupiniquim, como Irene os define, acabam envolvidos na empreitada em busca de um assassino e, nesta missão, ressignificam o próprio passado alterando assim, a vida que lhes resta. Ao longo da trama nossa anti-heroína Irene Marín, guiada pelo brilhante Santiago Eugênio Torres, coloca em xeque suas certezas, conduzindo também você a fazer questionamentos sobre a natureza humana e sua fenomenologia.",
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
        synopsis: "A palavra surge na Odisseia de Homero, quando Helena de Troia oferta a Telêmaco a nepenthés, uma poção contra a tristeza e o sofrimento. Nepente, o livro, traz poemas que retratam em sua temática os sentimentos humanos, na imanência dos símbolos e transcendência da realidade concreta, para uma busca do mitológico e subjetivo. As imagens, os lugares e todas as cores com que a poeta celebra sua obra são um permanente convite a render-nos a essa poção que inebria e nos faz sonhar.",
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
        synopsis: "Os poemas de Graça Lopes estão repletos de olhos que veem. A palavra “olhos” aparece mais de 300 vezes. E somos convidados a ver os versos, a unir versos, a rever nossas próprias perplexidades. Dizem também que os olhos são nossa abertura para o pensamento filosófico. A admiração consiste em mirar de perto e ficar perplexo com o que se vê.",
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
        synopsis: "Ao visitar um antigo campo de concentração polonês, chamou-lhe a atenção as propriedades do chão que, diferentemente do restante do lugar, não havia sido reparado. Helena vislumbrou ali cartografias compostas pelos acontecimentos que sobrepuseram, conferindo ao chão singularidade e complexidade, formada por linhas, colorações, espaços.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/capas2023/capasjun/do-chao-para-o-chao-helenalopes-capa-500x500.jpg",
        availability: "Disponível",
        library_url: "#"
    }
];

// Authors data - extraída automaticamente dos livros
// Biografias específicas de cada autor/autora
const authorBiographies = {
    "Luís de Oliveira": "Luís de Oliveira é um escritor, poeta e professor brasileiro nascido em 20 de julho de 1995, na cidade de Pereira Barreto, interior de São Paulo. Formado em Licenciatura e Bacharelado em Educação Física, iniciou sua trajetória literária em 2009 e, desde então, tem se destacado no cenário literário nacional. É coordenador do projeto Letras ao Vento, que incentiva a leitura entre crianças e adolescentes.",
    
    "Danieli Rosa e Raquel Marques": "Danieli Rosa e Raquel Marques são escritoras brasileiras que se uniram para criar histórias sobre amizade, amadurecimento e as complexidades da vida adulta feminina. Suas obras exploram com sensibilidade os desafios enfrentados por mulheres contemporâneas.",
    
    "Guilherme Tibau Figueiredo": "Guilherme Tibau Figueiredo é escritor e pesquisador brasileiro que se dedica a retratar períodos históricos do Brasil, com especial atenção às relações de poder e às histórias de resistência de mulheres em contextos de opressão.",
    
    "Julia Pivari": "Julia Pivari é poeta e escritora brasileira que explora em seus textos as transformações da adolescência até a vida adulta. Sua obra reflete sobre identidade, autoconhecimento e os desafios do crescimento pessoal.",
    
    "Samia Wardani": "Samia Wardani é escritora brasileira especializada em romances que abordam relacionamentos complexos, superação de traumas e a busca pela reconstrução emocional. Suas narrativas exploram com profundidade a psicologia dos relacionamentos.",
    
    "Marcia Arida": "Marcia Arida é poeta brasileira que há mais de vinte anos escreve sobre amor, desilusão, relacionamentos e a jornada em busca da individualidade. Sua poesia expressa sentimentos universais com delicadeza e honestidade.",
    
    "Gláucia Vale e Willian Vale": "Gláucia Vale e Willian Vale são escritores brasileiros que se dedicam a resgatar narrativas históricas através de sagas épicas. Juntos, exploram temas de ancestralidade, memória e as raízes da formação cultural brasileira.",
    
    "João Marcos Buch": "João Marcos Buch é juiz de Direito e escritor brasileiro, conhecido por suas crônicas que humanizam o sistema prisional. Através de suas obras, dá voz aos silenciados e questiona o sistema de justiça, defendendo a dignidade humana acima das grades.",
    
    "Elida Braga": "Elida Braga é pesquisadora e escritora brasileira especializada em políticas públicas e questões de gênero no contexto socioeducativo. Sua obra oferece uma análise crítica sobre adolescentes infratoras e os desafios do sistema socioeducativo no Brasil.",
    
    "Mônica Dantas": "Mônica Dantas é pesquisadora brasileira que investiga as intersecções entre gênero, criminalidade e representações sociais do amor. Seu trabalho questiona os papéis sociais impostos às mulheres e como estes influenciam suas escolhas e destinos.",
    
    "Mércia Teodoro Batista": "Mércia Teodoro Batista é pesquisadora especializada em estudos sobre mulheres, sistema prisional e questões relacionadas a gênero, raça e classe. Sua obra busca desmistificar as prisões e entender as vivências femininas no contexto do encarceramento.",
    
    "Eunice Rosa Godinho": "Eunice Rosa Godinho é pesquisadora e escritora brasileira especializada em crimes contra a dignidade sexual. Seu trabalho busca promover a prevenção primária desses crimes e desenvolver estratégias de responsabilidade social no combate à violência sexual.",
    
    "Lusana Barrozo": "Lusana Barrozo é escritora brasileira que aborda em suas obras temas relacionados ao universo feminino, incluindo preconceitos, sexualidade, maternidade, maturidade e relacionamentos. Suas narrativas buscam estabelecer identificação e parceria com suas leitoras.",
    
    "Fabiana Dórea": "Fabiana Dórea é escritora, terapeuta e mentora brasileira especializada em autoconhecimento e transformação pessoal. Após uma jornada de autodescoberta que a levou a mudar radicalmente de vida, dedica-se a ajudar outras pessoas em seus processos de busca interna.",
    
    "Marcela Grecco": "Marcela Grecco é pesquisadora e escritora brasileira especializada em cinema e história das mulheres na arte. Sua obra resgata trajetórias de mulheres pioneiras esquecidas pela história oficial, destacando suas contribuições fundamentais.",
    
    "Renata Peron": "Renata Peron é escritora e ativista brasileira que compartilha sua história de superação como mulher trans. Sua obra é um testemunho de resiliência e coragem, contribuindo para a visibilidade e direitos da população trans no Brasil.",
    
    "Fátima Quintas": "Fátima Quintas é ensaísta e crítica literária brasileira especializada em literatura brasileira contemporânea. Seu trabalho analisa com profundidade a obra de grandes autoras, destacando aspectos subjetivos e simbólicos da literatura.",
    
    "Almir Ribeiro": "Almir Ribeiro é pesquisador e escritor brasileiro especializado em dança e performance. Sua obra explora as contribuições de Isadora Duncan e outros artistas que revolucionaram a percepção do corpo e do movimento na arte.",
    
    "Patrícia Cotrim Valério e Luiz Augusto Valério": "Patrícia Cotrim Valério e Luiz Augusto Valério são escritores brasileiros que compartilharam a inspiradora história de sua filha Luíza, celebrando a força, coragem e alegria que ela trouxe às suas vidas apesar dos desafios de saúde.",
    
    "Alex Giostri": "Alex Giostri é escritor, editor e educador brasileiro, fundador da Giostri Editora. Dedica-se a dar voz a narrativas marginalizadas, especialmente de mulheres em situação de cárcere, e a promover a literatura como ferramenta de libertação e transformação social.",
    
    "Eclesia Oliveira": "Eclesia Oliveira é escritora brasileira que explora em suas obras temas de espiritualidade, amizade e jornadas de autodescoberta. Sua narrativa combina elementos místicos com experiências cotidianas, criando histórias que tocam o coração.",
    
    "Marchezoni Oliveira": "Marchezoni Oliveira é escritor brasileiro de ficção especulativa que cria narrativas distópicas ambientadas no Brasil. Suas obras exploram questões políticas e sociais através de cenários futuristas e provocativos.",
    
    "Neuza Maria Vidolin": "Neuza Maria Vidolin é escritora brasileira que trabalha com elementos da metafísica espírita em suas narrativas. Suas obras abordam questões morais, racismo e assédio, buscando respostas no plano espiritual para os problemas humanos.",
    
    "Tiago Santiago": "Tiago Santiago é escritor brasileiro especializado em resgatar e reinterpretar histórias da cultura afro-brasileira. Sua obra celebra figuras históricas negras, destacando suas contribuições e humanidade.",
    
    "Ness Fontes": "Ness Fontes é escritora brasileira que explora em suas obras os processos de transformação da adolescência para a vida adulta. Suas narrativas fragmentadas constroem mosaicos de memórias, amores e autoconhecimento.",
    
    "Julio Lourenço": "Julio Lourenço é escritor brasileiro que utiliza a ficção para abordar questões sociais urgentes como o racismo. Sua obra combina leveza, humor e profundidade para examinar preconceitos e possibilidades de transformação social.",
    
    "Gabrielle Siqueira": "Gabrielle Siqueira é escritora brasileira que retrata com sensibilidade as vidas de pessoas marginalizadas pela sociedade. Suas narrativas dão voz a personagens que enfrentam preconceitos e lutam pela sobrevivência e dignidade.",
    
    "Johnny da Silva Carvalho": "Johnny da Silva Carvalho é escritor brasileiro especializado em ficção de super-heróis com foco em representatividade e questões sociais. Sua obra cria heroínas periféricas que combatem opressões reais como machismo, racismo e homofobia.",
    
    "Stella Wilderom": "Stella Wilderom é escritora e ativista brasileira que aborda em suas obras questões relacionadas à maternidade tardia. Sua missão é informar e apoiar mulheres sobre os desafios e escolhas relacionados à gestação após os 35 anos.",
    
    "Marco Antunes": "Marco Antunes é escritor brasileiro conhecido pela diversidade estilística e temática de seus contos. Suas obras transitam entre o poético e o cruel, o real e o fictício, criando retratos complexos da humanidade.",
    
    "Marcos Cazuza": "Marcos Cazuza é escritor e pensador brasileiro especializado em psicologia e desenvolvimento pessoal. Sua obra propõe reflexões profundas sobre o ego, a mente humana e caminhos para a libertação dos sofrimentos mentais.",
    
    "Urbano Pelico": "Urbano Pelico é escritor e aforista brasileiro que explora o comportamento humano através de textos curtos e reflexivos. Sua obra convida à reflexão sobre verdades, mentiras e contradições da sociedade.",
    
    "Thiago Costa Franco": "Thiago Costa Franco é escritor brasileiro especializado em contos que retratam o Brasil e a classe trabalhadora. Sua obra dialoga com a literatura brasileira clássica enquanto explora questões sociais contemporâneas.",
    
    "Débora Campello": "Débora Campello é escritora brasileira que cria tramas investigativas complexas entrelaçadas com questões existenciais. Suas narrativas exploram memórias, passado não resolvido e a natureza humana.",
    
    "Joâo Almeida": "Joâo Almeida é escritor brasileiro que celebra o cotidiano e o autoconhecimento em suas obras. Suas narrativas acompanham personagens em jornadas de descoberta da beleza escondida nas coisas simples da vida.",
    
    "Júlio Mendonça": "Júlio Mendonça é crítico literário e ensaísta brasileiro especializado em poesia contemporânea. Sua obra reflete sobre os rumos da poesia moderna e as transformações dos movimentos poéticos.",
    
    "Mariana Basílio": "Mariana Basílio é poeta brasileira que trabalha com imagens mitológicas e simbólicas em seus versos. Sua poesia celebra os sentimentos humanos através de uma linguagem que transcende o concreto para alcançar o universal.",
    
    "Graça Lopes": "Graça Lopes é poeta e filósofa brasileira cujos versos exploram a percepção, o olhar e as perplexidades da existência. Sua poesia convida o leitor a ver o mundo com admiração e filosofar sobre o que observa.",
    
    "Sonia Pires": "Sonia Pires é psicanalista e poeta brasileira que une sua prática clínica à expressão poética. Sua obra traduz os complexos processos psíquicos em versos, oferecendo leveza e beleza à experiência analítica.",
    
    "Stéfano Avelino": "Stéfano Avelino é poeta brasileiro que escreve sobre amores perdidos e sentimentos evaporados. Sua poesia lírica homenageia relações que se foram, transformando dor e saudade em versos delicados.",
    
    "Helena Lopes": "Helena Lopes é artista e pesquisadora brasileira que explora memória, espacialidade e história através da arte. Seu trabalho investiga como lugares e superfícies carregam marcas dos acontecimentos que os atravessaram.",
    
    "Cláudio Narciso": "Cláudio Narciso é escritor brasileiro especializado em thrillers investigativos. Suas obras combinam suspense, sensualidade e ação, criando narrativas envolventes sobre corrupção e mistérios contemporâneos.",
    
    "Rogério Justino": "Rogério Justino é escritor brasileiro de ficção científica que cria universos complexos e narrativas épicas. Suas obras exploram temas de poder, liberdade e a luta pela sobrevivência em contextos galácticos.",
    
    "Elcio Matos": "Elcio Matos é escritor brasileiro que ambienta suas obras em períodos históricos conturbados, como a ditadura militar. Suas narrativas exploram sonhos, amor, ódio e as escolhas que moldam os destinos humanos.",
    
    "Marisa Ferrari Monteiro": "Marisa Ferrari Monteiro é escritora brasileira especializada em romances históricos ambientados na Europa. Suas obras exploram dilemas humanos universais através de personagens complexos em contextos históricos ricos.",
    
    "Josè Barreto Hotten": "José Barreto Hotten é escritor brasileiro que aborda temas familiares e de identidade em suas obras. Suas narrativas exploram transformações, descobertas e o poder dos laços afetivos verdadeiros.",
    
    "Zilda Costa": "Zilda Costa é escritora brasileira que explora em suas obras a importância da educação familiar e do amor na formação do caráter. Suas narrativas refletem sobre diferentes modelos de família e suas consequências.",
    
    "Marcelo Rocha": "Marcelo Rocha é escritor brasileiro que cria narrativas urbanas intensas sobre violência, relacionamentos e fragilidades humanas. Suas obras exploram personagens complexos unidos pela brutalidade da vida contemporânea."
};

// Authors data - usando biografias específicas
const authorsMap = new Map();

books.forEach(book => {
    if (book.author && !authorsMap.has(book.author)) {
        authorsMap.set(book.author, {
            name: book.author,
            biography: authorBiographies[book.author] || `${book.author} é autor(a) de "${book.title}" e outras obras importantes da literatura brasileira contemporânea.`,
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