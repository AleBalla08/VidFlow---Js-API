async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao}M visualizações`,
            url: url,
            imagem: imagem
        })
        
    })
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = { listaVideos, criaVideo, buscaVideo }