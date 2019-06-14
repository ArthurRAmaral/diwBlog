var dbpat = {
    dados: [
        {
            id: 1,
            dia: '05',
            mes: '05',
            ano: '2019',
            titulo: 'Cuide de sua pele',
            texto: 'Dicas para cuidar da sua pele do jeito que ela merece: <br> 1 - Hidrate; <br> 2 - Seque; <br> 3 - Tome banho;',
            img: "img/2017-10-31.png",
            curtidas: 1053,
            comentarios: [
                {
                    nome: "Fulano",
                    texto: "Muito ruim."
                },
                {
                    nome: "Beltrano",
                    texto: "Nada não"
                }
            ]
        },
        {
            id: 2,
            dia: '10',
            mes: '06',
            ano: '2019',
            titulo: 'Novo site de notícias',
            texto: 'Está aberto para acesso site de notícia TBG News',
            img: "img/2017-10-31.png",
            curtidas: 21973,
            comentarios: [
                {
                    nome: "Arthur Rocha Amaral",
                    texto: "Muito bacana o site, recomendo!!!"
                },
                {
                    nome: "Fulano",
                    texto: "Muito ruim."
                },
                {
                    nome: "Beltrano",
                    texto: "Nada não"
                }
            ]
        },
        {
            id: 3,
            dia: '30',
            mes: '07',
            ano: '2018',
            titulo: 'Como se projetor do frio sem gastar',
            texto: 'Dicas de como se proteger do frio para o inverno de 2019 q chegara matando!',
            img: "img/2017-10-31.png",
            curtidas: 55,
            comentarios: [
                {
                    nome: "Beltrano",
                    texto: "Nada não"
                }
            ]
        },
        {
            id: 4,
            dia: '15',
            mes: '12',
            ano: '2018',
            titulo: 'Como mudar o plano de fundo do whats web.',
            texto: 'Só ir nao configuração.',
            img: "img/2017-10-31.png",
            curtidas: 298,
            comentarios: [
                {
                    nome: "Arthur Rocha Amaral",
                    texto: "Muito bacana o site, recomendo!!!"
                },
                {
                    nome: "Fulano",
                    texto: "Muito ruim."
                }
            ]
        },
        {
            id: 5,
            dia: '10',
            mes: '06',
            ano: '2019',
            titulo: 'Como se ter uma aposentadoria privada.',
            texto: 'Tem varias empresas que ja oferecem isso só procurar',
            img: "img/2017-10-31.png",
            curtidas: 5,
            comentarios: [
                {
                    nome: "Fulano",
                    texto: "Muito ruim."
                }
            ]
        },
    ]
}

var db = JSON.parse(localStorage.getItem('dbpat'));
if (!db) {
    db = dbpat;
}

function displayMessage(msg) {
    $('#msg').html('<div class="msg">' + msg + '</div>');
}

function publicarPost(post) {
    let novoId = db.dados[db.dados.length - 1].id + 1;
    let novoPost = {
        id: novoId,
        dia: post.dia,
        mes: post.mes,
        ano: post.ano,
        titulo: post.titulo,
        texto: post.texto,
        img: post.img,
        curtidas: post.curtidas,
        comentarios: post.comentarios
    };

    db.dados.push(novoPost);
    displayMessage("Contato inserido com sucesso");

    localStorage.setItem('db', JSON.stringify(db));
}