import { conectaApi } from "./conectaApi.js";


const formulario = document.querySelector("[data-formulario]")

async function criarVideos(evento){
    evento.preventDefault();
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const descricao = Math.floor(Math.random() * 100).toString();

    await conectaApi.criaVideo(titulo, descricao, url, imagem);

    window.location.href = '../pages/envio-concluido.html'

}

formulario.addEventListener('submit', evento => criarVideos(evento))