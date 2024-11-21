import { Evento } from '../events'


// jstyqpawajo-jnqxen3lvcm-5kzzfkalij9
// 0u1tghsgnvh-5qaaxy1py4i-ygxih0y8h38
// 3rjtw70hxl7-kpupj5ap6-fx789alrzb6
// y6ry2o9glih-0sbmb0vqzaio-fqekulp4jtr
// gcgfl4zjjcq-uz98yicsklr-wam4vyukdl
// 10g7j27561q-p6p3t4hoojt-zzsb5ajd6ce
// 9e948u7vaya-n3w2th0kbx-hx3kha26leb
// fm7qjo081el-o5l71rrj86-wacvvle9u2
// ppfu4w9jks-sezdn4wojq-yhj4aehyfmg
// 7trqvn4gs6n-q4bdzedrou-n04rjg0rwka
// s01juw15ew-8l2z9jfxcis-4n1cc148clw


const eventos: Evento[] = [
    {
        id: "j3ruhrbqwg-0m50h57wingr-dt9dmwhunr5",
        alias: 'evento-fullstack',
        senha: 'senha123',
        nome: 'Evento de Desenvolvimento Fullstack',
        data: new Date('2024-12-01T10:00:00Z'),
        local: 'São Paulo, SP',
        descricao:
            'Um evento completo para aprender desenvolvimento fullstack do zero.',
        imagem: 'https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk',
        imagemBackground:
            'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
        publicoEsperado: 200,
        convidados: [
            {
                id: "x6dx5pecywb-c53atjikmud-zegzl42dclj",
                nome: 'Alice Silva',
                email: 'alice@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: "mnd983mqkw-ba0ln9wordi-2fecj0qa65c",
                nome: 'Carlos Pereira',
                email: 'carlos@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: "5pckrzwcdwo-h31x6zanwgd-8hz8jkg97vc",
                nome: 'Beatriz Lima',
                email: 'beatriz@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 2,
            },
        ],
    },
    {
        id: "f0vg988qaig-nzcbektn5y-kkvnfezlnm",
        alias: 'evento-js-avancado',
        senha: 'js2024',
        nome: 'Workshop Avançado de JavaScript',
        data: new Date('2024-11-20T15:00:00Z'),
        local: 'Rio de Janeiro, RJ',
        descricao: 'Um workshop avançado para programadores JavaScript.',
        imagem: 'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
        imagemBackground:
            'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
        publicoEsperado: 100,
        convidados: [
            {
                id: "n6uk69gunc-qa1sldv27ms-x0s5gu6709a",
                nome: 'Eduardo Santos',
                email: 'eduardo@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: "plwcsci5m8-cltedeibldt-qwq1o9bv4eq",
                nome: 'Fernanda Costa',
                email: 'fernanda@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
        ],
    },
    {
        id: "odyqvxcuzai-o0e6h4f372l-7a5lua6yo3y",
        alias: 'evento-dev-frontend',
        senha: 'front123',
        nome: 'Bootcamp de Desenvolvimento Frontend',
        data: new Date('2024-11-15T09:00:00Z'),
        local: 'Belo Horizonte, MG',
        descricao: 'Aprenda a criar interfaces incríveis e responsivas.',
        imagem: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
        imagemBackground:
            'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
        publicoEsperado: 150,
        convidados: [
            {
                id: "vm2zxwz2w58-stbbtbvyjfl-to62rs7o2f9",
                nome: 'Gabriela Rocha',
                email: 'gabriela@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: "tu361vsum7-avliosu3ok9-q43tlsppxpd",
                nome: 'Hugo Nogueira',
                email: 'hugo@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: "wxcbw0kv65-1nj68dlpf2ui-zk9wu5dejr",
                nome: 'Isabela Martins',
                email: 'isabela@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: "4fleh5cjjix-7t7jgu9q04d-xicmpmzvwrh",
        alias: 'casamento-alberto-marina',
        senha: 'casamento2024',
        nome: 'Casamento do Alberto e Marina',
        data: new Date('2024-11-25T16:00:00Z'),
        local: 'Florianópolis, SC',
        descricao:
            'Celebração do casamento de Alberto e Marina com amigos e familiares.',
        imagem: 'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
        imagemBackground:
            'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
        publicoEsperado: 150,
        convidados: [
            {
                id: "tjyu6n0gop8-u1e4hglsqs-8hwslsqez6o",
                nome: 'Bruno Cardoso',
                email: 'bruno@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: "nfixwdetsy-zje8flypfdg-xg48hie1yx",
                nome: 'Carla Mendes',
                email: 'carla@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: "zms9v5arp-0cj0gxl2dy7r-ts8p5sr9zdb",
        alias: 'aniversario-joao',
        senha: 'joao2024',
        nome: 'Aniversário do João - 30 Anos',
        data: new Date('2024-12-05T18:00:00Z'),
        local: 'Curitiba, PR',
        descricao:
            'Comemoração dos 30 anos de João com amigos próximos e familiares.',
        imagem: 'https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg',
        imagemBackground:
            'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
        publicoEsperado: 80,
        convidados: [
            {
                id: "szim92axvp-swhd8ucu54-ap18oerhh3g",
                nome: 'Maria Souza',
                email: 'maria@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 2,
            },
            {
                id: "vmdxami8te-x549zsw68w-phrk2lxwd5a",
                nome: 'José Almeida',
                email: 'jose@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: "lnaatna9g5-e8od4n5vba-xp34m9ny8s8",
        alias: 'inauguracao-loja-estrela',
        senha: 'estrela2024',
        nome: 'Inauguração da Loja Estrela',
        data: new Date('2024-12-10T09:00:00Z'),
        local: 'Porto Alegre, RS',
        descricao:
            'Evento de inauguração da nova loja Estrela com brindes e promoções.',
        imagem: 'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
        imagemBackground:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
        publicoEsperado: 300,
        convidados: [
            {
                id: "576iw9r2a89-bemrsbyrvne-bd5dozzxumv",
                nome: 'Cláudia Lima',
                email: 'claudia@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 3,
            },
            {
                id: "48c95ub0d3t-w86vewlr1rq-owvgn6m6v2h",
                nome: 'Ricardo Barbosa',
                email: 'ricardo@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: "zo0chkihqz-65ec1dpz9xl-d457gf3m2cq",
        alias: 'reuniao-familia-oliveira',
        senha: 'familia2024',
        nome: 'Reunião da Família Oliveira',
        data: new Date('2024-12-15T12:00:00Z'),
        local: 'Salvador, BA',
        descricao: 'Reunião de fim de ano da família Oliveira.',
        imagem: 'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
        imagemBackground:
            'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
        publicoEsperado: 50,
        convidados: [
            {
                id: "ps6v3s4z1td-gdm11msycah-89ady7bme3b",
                nome: 'Thiago Oliveira',
                email: 'thiago@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 4,
            },
            {
                id: "7a9qnz54ybm-61w8j43pv6s-rmmounwtjd",
                nome: 'Letícia Oliveira',
                email: 'leticia@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
]

export default eventos
