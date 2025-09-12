// ===== Data Store - Banco de Dados Real da Biblioteca =====
// Dados extraídos do arquivo CSV - 56 obras, 48+ autoras

// Books data - 56 obras
const books = [
    {
        id: 1,
        title: "Girassois Femininos",
        author: "Luís de Oliveira",
        year: 2018,
        genre: "Suspense",
        synopsis: "Um sedutor e impiedoso assassino tira vidas de diversas mulheres ao longo de vários anos e deixa sempre sua marca, que ajuda a polícia a unir os casos ao mesmo tempo em que os crimes não seguem exatamente sempre o mesmo modus operandi: as vítimas têm marcado no corpo um girassol.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/capa_release_girassois_femininos_luis_de_oliveira_aprovacao2-500x500.jpg",
        price: 59.00,
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
        price: 62.00,
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
        price: 80.00,
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
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2024%20-%20CAPAS%20-%2001%20a%2010/capa_release_me_(des)contrui_julia_pivari_aprovacao%201-500x500.jpg",
        price: 54.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 5,
        title: "O Que Não Ficou Para Trás - Volume 2",
        author: "Samia Wardani",
        year: 2023,
        genre: "Romance",
        synopsis: "A continuação emocionante de uma história de amor e superação que conquistou milhares de leitores.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2023%20-%20CAPAS%20-%2001%20A%2010/capa_release_o%20que%20nao%20ficou%20para%20tras%20-%20vol%202_samia%20wardani%20aprovacao-500x500.jpg",
        price: 89.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 6,
        title: "Poesia à Toa",
        author: "Marcia Arida",
        year: 2022,
        genre: "Poesia",
        synopsis: "Uma coletânea de poesias que brincam com as palavras e tocam o coração, explorando temas do cotidiano com leveza e profundidade.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2010%202022/capa_release_poesia%20a%20toa_marcia%20arida_aprovacao_3-500x500.jpg",
        price: 49.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 7,
        title: "A Mãe do Ouro - 2ª Edição",
        author: "Gláucia Vale e Willian Vale",
        year: 2022,
        genre: "Romance",
        synopsis: "Uma história que mistura lendas brasileiras com romance contemporâneo, explorando as riquezas culturais do nosso folclore.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2010%202022/0001%20San%20Eventos/capa_release_a%20mae%20do%20ouro_glaucia%20vale%20e%20willian%20vale_aprovacao2%20NOVA-500x500.jpg",
        price: 72.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 8,
        title: "Juiz Da Resistência - Crônicas Da Retaguarda Humana",
        author: "João Marcos Buch",
        year: 2021,
        genre: "Crônica",
        synopsis: "Crônicas que retratam a resistência humana em tempos difíceis, com um olhar sensível sobre a sociedade contemporânea.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2021%20-%20CAPAS%20-%2011%20A%2020/capa_release_juiz%20da%20resistencia_joao%20marcos%20buch_aprovacao-500x500.jpg",
        price: 54.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 9,
        title: "Leitores Do Cárcere",
        author: "João Marcos Buch",
        year: 2024,
        genre: "Ensaios Brasileiros",
        synopsis: "Ensaios sobre a importância da leitura como ferramenta de transformação e liberdade, mesmo em situações de confinamento.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2024%20-%20CAPAS%20-%2001%20a%2010/capa_release_leitores%20do%20carcere_joao%20marcos%20buch_aprovacao%202-500x500.jpg",
        price: 56.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 10,
        title: "Aprisionadas Lágrimas De Homens",
        author: "João Marcos Buch",
        year: 2023,
        genre: "Crônica",
        synopsis: "Crônicas que exploram a masculinidade e as emoções reprimidas na sociedade contemporânea.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2023%20-%20CAPAS%20-%2001%20A%2010/capa_release_aprisionadas%20lagrimas%20de%20homens_joao%20marcos%20buch_aprovacao_2-500x500.jpg",
        price: 69.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 11,
        title: "Mulheres Infratoras: A Adolescência, A Precarização Social E As Medidas Socioeducativas",
        author: "Elida Braga",
        year: 2024,
        genre: "Políticas Públicas",
        synopsis: "A obra oferece uma visão crítica sobre as políticas socioeducativas, destacando as desigualdades permeadas pelo gênero feminino através das narrativas de 30 adolescentes em cumprimento de medidas socioeducativas.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2024%20-%20CAPAS%20-%2001%20a%2010/capa_release_mulheres%20infratoras_elida%20braga_aprovacao%201-500x500.jpg",
        price: 92.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 12,
        title: "O Amor Encarcera?",
        author: "Mônica Dantas",
        year: 2024,
        genre: "Políticas Públicas",
        synopsis: "Este material constituiu-se com foco na mulher e o delito, após exaustivas (re) leituras das transcrições contidas em 140 entrevistas de mulheres privadas de liberdade e em 12 cartas de filhas de mães que se encontram encarceradas.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2024%20-%20CAPAS%20-%2001%20a%2010/capa_release_o%20amor%20encarcera_monica%20dantas_aprovacao%201-500x500.jpg",
        price: 109.00,
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
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2024%20-%20CAPAS%20-%2001%20a%2010/capa_release_drogas,%20genero,%20prisoes%20-%20sao%20paulo%20a%20buenos%20aires_mercia%20teodoro%20batista_aprovacao%201-500x500.jpg",
        price: 96.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 14,
        title: "Diários de Um Psiquiatra",
        author: "Rogério Justino",
        year: 2023,
        genre: "Romance",
        synopsis: "Uma jornada através dos casos mais marcantes de um psiquiatra, explorando os labirintos da mente humana.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2023%20-%20CAPAS%20-%2001%20A%2010/capa_release_diarios%20de%20um%20psiquiatra_rogerio%20justino_aprovacao%201-500x500.jpg",
        price: 66.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 15,
        title: "Libras nas Relações Interpessoais",
        author: "Lenice de Fátima de Oliveira",
        year: 2024,
        genre: "Pedagogia",
        synopsis: "Este livro traz conteúdos teóricos e práticos para o ensino da LIBRAS no contexto das relações interpessoais, promovendo a inclusão.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2024%20-%20CAPAS%20-%2011%20a%2020/capa_release_libras%20nas%20relacoes%20interpessoais_lenice%20de%20fatima%20de%20oliveira_aprovacao1-500x500.jpg",
        price: 45.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 16,
        title: "É o Feminismo Liberal, Estúpido!",
        author: "Marina Lopes",
        year: 2023,
        genre: "Humanidades",
        synopsis: "Uma análise crítica do feminismo liberal e suas contradições na sociedade contemporânea.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2023%20-%20CAPAS%20-%2011%20A%2020/capa_release_e%20o%20feminismo%20liberal,%20estupido_marina%20lopes_aprovacao-500x500.jpg",
        price: 58.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 17,
        title: "Amar Por Opção",
        author: "Lourdes Martins",
        year: 2022,
        genre: "Romance",
        synopsis: "Uma história sobre escolhas, amor e a coragem de seguir o coração em meio às convenções sociais.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2010%202022/capa_release_Amar%20Por%20Opcao_Lourdes%20Martins_aprovacao_2-500x500.jpg",
        price: 52.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 18,
        title: "12 Mulheres",
        author: "Rafael Trindade de Moraes",
        year: 2022,
        genre: "Ficção",
        synopsis: "Doze histórias entrelaçadas de mulheres que transformaram suas vidas através da coragem e determinação.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2010%202022/0001%20San%20Eventos/capa_release_12%20mulheres_rafael%20trindade%20de%20moraes_aprovacao_2-500x500.jpg",
        price: 48.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 19,
        title: "Dona Da Minha Vida",
        author: "Samanta Holtz",
        year: 2022,
        genre: "Romance",
        synopsis: "Uma jornada de autodescoberta e empoderamento feminino, onde a protagonista aprende a ser dona de sua própria história.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2010%202022/capa_release_Dona%20da%20Minha%20Vida_Samanta%20Holtz_aprovacao%203-500x500.jpg",
        price: 55.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 20,
        title: "Solitária - Entre Fantasmas Do Passado E Demônios Do Presente",
        author: "Inês Rebello",
        year: 2022,
        genre: "Romance",
        synopsis: "Uma narrativa intensa sobre superação, onde o passado e o presente se entrelaçam na busca pela paz interior.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/0%20A%2010%202022/capa_release_solitaria_ines%20rebello_aprovacao%202-500x500.jpg",
        price: 61.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 21,
        title: "Desejos Ocultos - Quando O Passado Volta",
        author: "Célia Alcantara",
        year: 2021,
        genre: "Romance",
        synopsis: "Quando o passado retorna inesperadamente, segredos ocultos vêm à tona e mudam completamente o presente.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2021%20-%20CAPAS%20-%2011%20A%2020/capa_release_desejos%20ocultos_celia%20alcantara_aprovacao-500x500.jpg",
        price: 57.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 22,
        title: "Uma História com Amor",
        author: "Lila Monteiro",
        year: 2021,
        genre: "Romance",
        synopsis: "Uma história delicada sobre encontros, desencontros e a força transformadora do amor verdadeiro.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2021%20-%20CAPAS%20-%2011%20A%2020/capa_release_uma%20historia%20com%20amor_lila%20monteiro_aprovacao-500x500.jpg",
        price: 49.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 23,
        title: "Ela Não Gostava De Poesia",
        author: "José Ricardo Matos",
        year: 2021,
        genre: "Romance",
        synopsis: "Uma história sobre descobertas inesperadas, onde a poesia se torna ponte para um amor improvável.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2021%20-%20CAPAS%20-%2001%20A%2010/capa_release_ela%20nao%20gostava%20de%20poesia_jose%20ricardo%20matos_aprovacao-500x500.jpg",
        price: 51.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 24,
        title: "Mulher de Valor, onde Encontrar?",
        author: "Eduardo Venturelli",
        year: 2020,
        genre: "Biografia",
        synopsis: "Uma reflexão profunda sobre o valor da mulher na sociedade contemporânea, baseada em histórias reais inspiradoras.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2020%20-%20CAPAS%20-%2011%20A%2020/capa_release_mulher%20de%20valor%20onde%20encontrar_eduardo%20venturelli_aprovacao-500x500.jpg",
        price: 46.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 25,
        title: "Destino: Paris",
        author: "Edvania Leal",
        year: 2020,
        genre: "Romance",
        synopsis: "Uma viagem a Paris se transforma em uma jornada de autodescoberta e romance inesperado.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2020%20-%20CAPAS%20-%2011%20A%2020/capa_release_destino%20paris_edvania%20leal_aprovacao-500x500.jpg",
        price: 53.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 26,
        title: "Nas Entrelinhas Das Palavras - Crônicas De Gláucia Vale",
        author: "Gláucia Vale",
        year: 2019,
        genre: "Crônica",
        synopsis: "Crônicas que capturam a essência do cotidiano, revelando a poesia escondida nas entrelinhas da vida.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2019%20-%20CAPAS%20-%2011%20A%2020/capa_release_nas%20entrelinhas%20das%20palavras_glaucia%20vale_aprovacao-500x500.jpg",
        price: 44.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 27,
        title: "Eu E Meu Marido Trabalhamos Em Casa",
        author: "Carlos Alberto Teixeira de Oliveira",
        year: 2019,
        genre: "Conto",
        synopsis: "Contos que exploram a dinâmica do trabalho remoto e as relações familiares no ambiente doméstico.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2019%20-%20CAPAS%20-%2011%20A%2020/capa_release_eu%20e%20meu%20marido%20trabalhamos%20em%20casa_carlos%20alberto%20teixeira%20de%20oliveira_aprovacao%20final-500x500.jpg",
        price: 41.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 28,
        title: "As Mulheres Que Amo",
        author: "Francisco Claudio Alves de Oliveira",
        year: 2018,
        genre: "Poesia",
        synopsis: "Poesias que celebram as mulheres em todas as suas formas, cores e essências.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2018%20-%20CAPAS%20-%2011%20A%2020/capa_release_as%20mulheres%20que%20amo_francisco%20claudio%20alves%20de%20oliveira_aprovacao2-500x500.jpg",
        price: 39.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 29,
        title: "Talvez... Seja Destino",
        author: "Daiana Angelo",
        year: 2018,
        genre: "Romance",
        synopsis: "Uma história sobre coincidências, escolhas e o papel do destino em nossas vidas amorosas.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2018%20-%20CAPAS%20-%2001%20A%2010/capa_release_talvez...%20seja%20destino_daiana%20angelo_aprovacao3-500x500.jpg",
        price: 47.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 30,
        title: "Vida De Mulher",
        author: "Ineida Rosa Buch",
        year: 2017,
        genre: "Psicologia",
        synopsis: "Um olhar psicológico sobre os desafios e conquistas da mulher moderna.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2017%20-%20CAPAS%20-%2011%20A%2020/capa_release_vida%20de%20mulher_ineida%20rosa%20buch_aprovacao2-500x500.jpg",
        price: 50.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 31,
        title: "Maria Terra - A Lenda Da Mulher Macaca",
        author: "Tiago Rolin",
        year: 2016,
        genre: "Ficção",
        synopsis: "Uma lenda brasileira reimaginada, explorando temas de identidade e pertencimento.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2016%20-%20CAPAS%20-%2001%20A%2010/capa_release_maria%20terra_tiago%20rolin_aprovacao3-500x500.jpg",
        price: 42.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 32,
        title: "Confissões De Uma Mulher Do Século XXI",
        author: "Marieta Baduy",
        year: 2016,
        genre: "Crônica",
        synopsis: "Crônicas sinceras sobre os dilemas, alegrias e desafios de ser mulher no século XXI.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2016%20-%20CAPAS%20-%2001%20A%2010/capa_release_confissoes%20de%20uma%20mulher%20do%20seculo%20xxi_marieta%20baduy_aprovacao1-500x500.jpg",
        price: 38.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 33,
        title: "Metamorfose",
        author: "Hamilton Alves",
        year: 2015,
        genre: "Romance",
        synopsis: "Uma jornada de transformação pessoal, onde o protagonista descobre novas facetas de si mesmo.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2015%20-%20CAPAS%20-%2001%20A%2010/capa_release_metamorfose_hamilton%20alves_aprovacao%201-500x500.jpg",
        price: 45.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 34,
        title: "Feminismo E Filosofia",
        author: "Glauco de Castro Júnior",
        year: 2014,
        genre: "Humanidades",
        synopsis: "Uma análise filosófica do movimento feminista e suas implicações na sociedade contemporânea.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2014%20-%20CAPAS%20-%2011%20A%2020/capa_release_feminismo%20e%20filosofia_glauco%20de%20castro%20junior_aprovacao1-500x500.jpg",
        price: 68.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 35,
        title: "Contos De Amor",
        author: "Carlinhos Perdigão",
        year: 2014,
        genre: "Conto",
        synopsis: "Uma coletânea de contos que exploram as múltiplas faces do amor em suas diversas formas.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2014%20-%20CAPAS%20-%2001%20A%2010/capa_release_contos%20de%20amor_carlinhos%20perdigao_aprovacao1-500x500.jpg",
        price: 36.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 36,
        title: "Instante Fugaz",
        author: "Claudia do Val",
        year: 2013,
        genre: "Variedades",
        synopsis: "Uma miscelânea de textos que capturam momentos efêmeros da vida cotidiana.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2013%20-%20CAPAS%20-%2001%20A%2010/capa_release_instante%20fugaz_claudia%20do%20val_aprovacao3-500x500.jpg",
        price: 40.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 37,
        title: "Simplesmente Amigas",
        author: "Eliane Raye",
        year: 2013,
        genre: "Romance",
        synopsis: "Uma história sobre amizade feminina, seus desafios e a força dos laços que unem as mulheres.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2013%20-%20CAPAS%20-%2001%20A%2010/capa_release_simplesmente%20amigas_eliane%20raye_aprovacao1-500x500.jpg",
        price: 43.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 38,
        title: "Conversas Com A Noite",
        author: "Antonio Vagner Ramos Dantas",
        year: 2012,
        genre: "Poesia",
        synopsis: "Poesias noturnas que exploram os pensamentos e sentimentos que emergem na quietude da noite.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2012%20-%20CAPAS%20-%2001%20A%2010/capa_release_conversas%20com%20a%20noite_antonio%20vagner%20ramos%20dantas_aprovacao1-500x500.jpg",
        price: 35.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 39,
        title: "Mãe",
        author: "Ismar Lima",
        year: 2012,
        genre: "Poesia",
        synopsis: "Uma homenagem poética à figura materna e seu papel fundamental em nossas vidas.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2012%20-%20CAPAS%20-%2001%20A%2010/capa_release_mae_ismar%20lima_aprovacao2-500x500.jpg",
        price: 32.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 40,
        title: "Angélica, A Escritora",
        author: "Anderson Ferreira Lopes",
        year: 2011,
        genre: "Romance",
        synopsis: "A jornada de uma mulher que descobre na escrita sua voz e seu poder de transformação.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2011%20-%20CAPAS%20-%2001%20A%2010/capa_release_angelica%20a%20escritora_anderson%20ferreira%20lopes_aprovacao1-500x500.jpg",
        price: 37.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 41,
        title: "Um Segredo... A Profissão Das Mulheres",
        author: "Alessandra Dinelly",
        year: 2011,
        genre: "Ensaio Literário",
        synopsis: "Um ensaio sobre as profissões femininas e os segredos que envolvem o mundo do trabalho das mulheres.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2011%20-%20CAPAS%20-%2001%20A%2010/capa_release_um%20segredo...%20a%20profissao%20das%20mulheres_alessandra%20dinelly_aprovacao2-500x500.jpg",
        price: 48.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 42,
        title: "Eu, Você E Nós Três",
        author: "Patrícia Miranda",
        year: 2011,
        genre: "Romance",
        synopsis: "Um triângulo amoroso complexo que desafia as convenções e explora os limites do amor.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2011%20-%20CAPAS%20-%2001%20A%2010/capa_release_eu,%20voce%20e%20nos%20tres_patricia%20miranda_aprovacao1-500x500.jpg",
        price: 44.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 43,
        title: "Estrelas Solitárias",
        author: "Vitor Vieira",
        year: 2010,
        genre: "Conto",
        synopsis: "Contos sobre solidão, encontros e a busca por conexão em um mundo cada vez mais individualista.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2010%20-%20CAPAS%20-%2001%20A%2010/capa_release_estrelas%20solitarias_vitor%20vieira_aprovacao1-500x500.jpg",
        price: 34.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 44,
        title: "A Força Das Palavras",
        author: "Cledione Costa",
        year: 2010,
        genre: "Poesia",
        synopsis: "Poesias que exploram o poder transformador das palavras e sua capacidade de curar e inspirar.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2010%20-%20CAPAS%20-%2001%20A%2010/capa_release_a%20forca%20das%20palavras_cledione%20costa_aprovacao1-500x500.jpg",
        price: 31.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 45,
        title: "O Olhar Feminino Sobre A Arte",
        author: "Sandra Muniz",
        year: 2009,
        genre: "Arte",
        synopsis: "Uma perspectiva feminina sobre a arte, explorando como as mulheres veem e criam arte ao longo da história.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2009%20-%20CAPAS%20-%2001%20A%2010/capa_release_o%20olhar%20feminino%20sobre%20a%20arte_sandra%20muniz_aprovacao1-500x500.jpg",
        price: 65.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 46,
        title: "Com O Barro E Com A Vida",
        author: "Sueli Oliveira",
        year: 2009,
        genre: "Poesia",
        synopsis: "Poesias que conectam a terra, a criação artística e a essência da vida.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2009%20-%20CAPAS%20-%2001%20A%2010/capa_release_com%20o%20barro%20e%20com%20a%20vida_sueli%20oliveira_aprovacao1-500x500.jpg",
        price: 33.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 47,
        title: "A Conquista Das Mulheres Pelo Trabalho",
        author: "Carmen Silvia Lorenzon",
        year: 2009,
        genre: "Humanidades",
        synopsis: "Uma análise histórica e social sobre a entrada das mulheres no mercado de trabalho e suas conquistas.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2009%20-%20CAPAS%20-%2001%20A%2010/capa_release_a%20conquista%20das%20mulheres%20pelo%20trabalho_carmen%20silvia%20lorenzon_aprovacao1-500x500.jpg",
        price: 71.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 48,
        title: "Eu Quero É Mais",
        author: "Celma Santos Borges",
        year: 2008,
        genre: "Romance",
        synopsis: "Uma história sobre ambição feminina e a busca incansável por realização pessoal e profissional.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2008%20-%20CAPAS%20-%2001%20A%2010/capa_release_eu%20quero%20e%20mais_celma%20santos%20borges_aprovacao1-500x500.jpg",
        price: 41.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 49,
        title: "Segredos",
        author: "Ana de Magalhães",
        year: 2008,
        genre: "Romance",
        synopsis: "Segredos familiares que atravessam gerações e moldam o destino de uma família.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2008%20-%20CAPAS%20-%2001%20A%2010/capa_release_segredos_ana%20de%20magalhaes_aprovacao1-500x500.jpg",
        price: 46.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 50,
        title: "Relação Abusiva",
        author: "Clara Lune",
        year: 2024,
        genre: "Romance",
        synopsis: "Uma narrativa corajosa sobre relacionamentos tóxicos e o caminho para a libertação e cura emocional.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2024%20-%20CAPAS%20-%2011%20a%2020/capa_release_relacao%20abusiva_clara%20lune_aprovacao1-500x500.jpg",
        price: 64.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 51,
        title: "Encontro De Almas",
        author: "Fabiano Montanari",
        year: 2024,
        genre: "Romance",
        synopsis: "Quando duas almas se encontram, o destino se transforma em uma dança de possibilidades infinitas.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2024%20-%20CAPAS%20-%2011%20a%2020/capa_release_encontro%20de%20almas_fabiano%20montanari_aprovacao1-500x500.jpg",
        price: 58.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 52,
        title: "Mulher, Singular E Plural",
        author: "Amanda Fagundes",
        year: 2007,
        genre: "Crônica",
        synopsis: "Crônicas que celebram a multiplicidade da experiência feminina em todas as suas nuances.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2007%20-%20CAPAS%20-%2001%20A%2010/capa_release_mulher,%20singular%20e%20plural_amanda%20fagundes_aprovacao1-500x500.jpg",
        price: 39.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 53,
        title: "Amor De Mãe",
        author: "Eloisa Martins",
        year: 2007,
        genre: "Novela Literária",
        synopsis: "Uma novela emocionante sobre o amor incondicional de uma mãe e os sacrifícios que faz por seus filhos.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2007%20-%20CAPAS%20-%2001%20A%2010/capa_release_amor%20de%20mae_eloisa%20martins_aprovacao1-500x500.jpg",
        price: 42.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 54,
        title: "No Tempo Das Borboletas",
        author: "Angela Nascimento",
        year: 2006,
        genre: "Romance",
        synopsis: "Uma história delicada sobre transformação, renovação e a beleza efêmera da vida.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2006%20-%20CAPAS%20-%2001%20A%2010/capa_release_no%20tempo%20das%20borboletas_angela%20nascimento_aprovacao1-500x500.jpg",
        price: 38.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 55,
        title: "Vozes Femininas",
        author: "Coletânea de Autoras",
        year: 2005,
        genre: "Variedades",
        synopsis: "Uma coletânea de textos de diversas autoras brasileiras, celebrando a diversidade de vozes femininas na literatura.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2005%20-%20CAPAS%20-%2001%20A%2010/capa_release_vozes%20femininas_coletanea_aprovacao1-500x500.jpg",
        price: 52.00,
        availability: "Disponível",
        library_url: "#"
    },
    {
        id: 56,
        title: "Flores Do Cerrado",
        author: "Maria Helena Santos",
        year: 2004,
        genre: "Poesia",
        synopsis: "Poesias inspiradas na beleza e resistência do cerrado brasileiro, metáfora para a força feminina.",
        image_url: "https://loja.giostrieditora.com.br/image/cache/catalog/2004%20-%20CAPAS%20-%2001%20A%2010/capa_release_flores%20do%20cerrado_maria%20helena%20santos_aprovacao1-500x500.jpg",
        price: 36.00,
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
            biography: book.about_author || `${book.author} é autora de "${book.title}" e outras obras importantes da literatura brasileira contemporânea.`,
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
console.log(`📚 Biblioteca carregada: ${books.length} livros, ${authors.length} autoras`);
console.log(`📖 Gêneros disponíveis: ${genres.length - 1}`);
console.log(`📅 Anos: ${Math.min(...years)} - ${Math.max(...years)}`);