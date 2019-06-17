var dbpat = {
    dados: [
        {
            id: 1,
            dia: 05,
            mes: 05,
            ano: 2015,
            titulo: 'Cuide de sua pele',
            texto: 'Dicas para cuidar da sua pele do jeito que ela merece: <br> 1 - Hidrate; <br> 2 - Seque; <br> 3 - Tome banho;',
            img: "http://lespeaux.com.br/blog/wp-content/uploads/2015/09/24-SET-LIMPEZA-DE-PELE.jpg",
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
            dia: 01,
            mes: 06,
            ano: 2019,
            titulo: 'Novo site de notícias',
            texto: 'Está aberto para acesso site de notícia <a href="">TBG News</a>',
            img: "img/TBGOFICIAL.png",
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
            dia: 30,
            mes: 07,
            ano: 2018,
            titulo: 'Como se proteger do frio sem gastar',
            texto: '<a href="https://www.youtube.com/watch?v=nd_3GVsZmMw">Link para o video do manual do mundo</a>',
            img: "data:image/jpeg;base64,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",
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
            dia: 15,
            mes: 12,
            ano: 2018,
            titulo: 'Como mudar o plano de fundo do whats web.',
            texto: 'Só ir nao configuração.',
            img: "data:image/jpeg;base64,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",
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
            dia: 10,
            mes: 06,
            ano: 2019,
            titulo: 'Como se ter uma aposentadoria privada.',
            texto: 'Tem varias empresas que ja oferecem isso só procurar.<br> Ex: <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiAxe2-0fHiAhWUg5EKHUFkCugYABABGgJjZQ&ohost=www.google.com&cid=CAESEeD2iGIIIw-I6aU811W3QGBu&sig=AOD64_0kT6fgfzYp1cDUZHA6UjgLrjvjHA&q=&ved=2ahUKEwiPgOe-0fHiAhVYGbkGHYlIDjMQ0Qx6BAgWEAE&adurl=">Previdência Privada Vale a Pena?</a> Veja as Vantagens e Como Funciona',
            img: "https://blog.rico.com.vc/hs-fs/hubfs/previdencia-privada-vantagens.jpg?width=1000&name=previdencia-privada-vantagens.jpg",
            curtidas: 5,
            comentarios: [
                {
                    nome: "Fulano",
                    texto: "Muito ruim."
                }
            ]
        },
    ],
    curtiu: [],
    imgAtual: ''
}

var db = JSON.parse(localStorage.getItem('dbArthurAmaral'));
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

    localStorage.setItem('dbArthurAmaral', JSON.stringify(db));
}

function curtir(id) {

    let index = db.dados.map(obj => obj.id).indexOf(id);
    let curtiu = db.curtiu;
    let icurtiu = curtiu.map(obj => obj).indexOf(id);

    if (icurtiu >= 0) {
        db.dados[index].curtidas -= 1;
        $('#curtir-id-' + id).removeClass('curtido');
        curtiu[icurtiu] = 0;
        localStorage.setItem('dbArthurAmaral', JSON.stringify(db));
        carregarPosts();
        return
    }
    else {
        db.dados[index].curtidas += 1;
        $('#curtir-id-' + id).addClass('curtido');
        curtiu.push(id);
        localStorage.setItem('dbArthurAmaral', JSON.stringify(db));
        carregarPosts();
    }
}

function comentar(id) {
    $('#comentar-id-' + id).addClass('curtido');
    let index = db.dados.map(obj => obj.id).indexOf(id);
    let post = db.dados[index];
    $('#comentario-block').html(`
    <div class="bk">
        <div class="form-comentario">
            <form action="" id="form-comentario">
                <h1>Comentário para "${post.titulo}"</h1>
                <input id="nome-comentario-${post.id}" type="text" value="" placeholder="Nome" required>
                <textarea id="texto-comentario-${post.id}" placeholder="Comentário" required></textarea>
                <div class="butscoment">
                    <button onclick="enviarComentario(${post.id}, ${index})" class="enviar-comentario">Enviar</button>
                    <button onclick="cancelarComentario(${post.id})" class="cancelar-comentario">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
    `);
}

function cancelarComentario(id) {
    $('#comentario-block').html('')
    $('#comentar-id-' + id).removeClass('curtido');
    $('#form-comentario')[0].reset();
}

function enviarComentario(id, index) {

    if (!$('#form-comentario')[0].checkValidity()) {
        displayMessage("Preencha os campos corretamente.");
        return;
    }
    let nome = $('#nome-comentario-' + id).val();
    let texto = $('#texto-comentario-' + id).val();
    let comentario = { nome: nome, texto: texto };

    db.dados[index].comentarios.push(comentario);
    displayMessage("Comentario publicado");

    localStorage.setItem('dbArthurAmaral', JSON.stringify(db));
    carregarPosts();
    $('#comentario-block').html('')
    $('#comentar-id-' + id).removeClass('curtido');
    $('#form-comentario')[0].reset();
}