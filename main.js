const telaOpcoes = document.querySelector("#tela-opcoes");
const telaAdiciona = document.querySelector("#tela-adicionar");
const telaJogo = document.querySelector("#tela-jogo");
const letras = document.getElementsByClassName("digitado")
const montandoTabuleiro = document.querySelector("#palavras");
var palavrasRegistradas =   [{"palavra":"ABACAXI","dica":"FRUTA"},{"palavra":"BANANA","dica":"FRUTA"},{"palavra":"ABACATE","dica":"FRUTA"},
                             {"palavra":"BRASIL","dica":"PAÍS"},{"palavra":"INGLATERRA","dica":"PAÍS"},{"palavra":"FUTEBOL","dica":"ESPORTE"}];
var palavrasDescobertas = []
var palavraEnigma = Sortear();
var acerto = 0;
console.log(palavraEnigma.palavra)
function RevelarLetra()
{
    console.log(letras.length)
    for(let i = 0; i < palavrasDescobertas.length; i++)
    {
        for(let n = 0; n < letras.length;n++)
        {
            if(palavrasDescobertas[i] == letras[n].textContent)
            {
                letras[n].setAttribute('style','display:block')
            }
        }
        
    }
}

function Sortear() 
{
    var sortear = Math.floor(Math.random() * palavrasRegistradas.length);
    var palavraEnigmaSorteada = palavrasRegistradas[sortear];
    return palavraEnigmaSorteada;
}

function CriandoTabuleiro()
{
    montandoTabuleiro.innerHTML = "";
    for (let i = 0; i < palavraEnigma.palavra.length; i++) 
    {
        var letra = palavraEnigma.palavra[i];

        montandoTabuleiro.innerHTML +=  `<div class="container-letra">` + '\n' +
                                        `<span class="digitado">${letra.toUpperCase()}</span>` + '\n' +
                                         `<img src="imagens/forca/Palavra.png" alt="sublinhado para a palavra" class="campo-da-letra">` + '\n' +
                                         `</div>`                               
    }
}

function tecla()
{
    if(event.keyCode>= 65 && event.keyCode <= 90) 
    {
        window.alert(String.fromCharCode(event.keyCode));
        var letraDescoberta = String.fromCharCode(event.keyCode)
        
        for(let i = 0;i < palavraEnigma.palavra.length; i++)
        {
            if(palavraEnigma.palavra[i] == letraDescoberta)
            {
               palavrasDescobertas.push(palavraEnigma.palavra[i]);
            }
        }
        console.log(palavrasDescobertas)
    }
    else
    {
        window.alert("Apenas letras maiusculas")
    }
    RevelarLetra();
}

function DescobrirPalavra ()
{
    
}

function Tela(opcao) 
{
    //1 = Começar um jogo 2 = Adicionar uma palvra nova, 3 = Salvar e Começar a jogar, 4 = Cancelar , 5 = Novo jogo, 6 = Desistir
    if(opcao == 1)
    {
        //Começa um Jogo
        telaOpcoes.setAttribute('style','display:none');
        telaAdiciona.setAttribute('style','display:none');
        telaJogo.setAttribute('style','display:block');
        CriandoTabuleiro();
        document.body.onkeypress = tecla

    }
    else if (opcao == 2)
    {
        //Adicionar palavra , falta a implementacao de criar nova palavra
        telaOpcoes.setAttribute('style','display:none');
        telaAdiciona.setAttribute('style','display:block');
        telaJogo.setAttribute('style','display:none');
    }
    else if (opcao == 3)
    {
        //Salvar e Começar
        telaOpcoes.setAttribute('style','display:none');
        telaAdiciona.setAttribute('style','display:none');
        telaJogo.setAttribute('style','display:block');
    }
    else if (opcao == 4)
    {
        //Cancela
        telaOpcoes.setAttribute('style', 'display:grid');
        telaAdiciona.setAttribute('style','display:none');
        telaJogo.setAttribute('style','display:none');
    }
    else if (opcao == 5)
    {
        //Novo jogo , sortear nova palavra.
        telaOpcoes.setAttribute('style','display:none');
        telaAdiciona.setAttribute('style','display:none');
        telaJogo.setAttribute('style','display:block');
        CriandoTabuleiro();
    }
    else if (opcao == 6)
    {
        //Desistir
        telaOpcoes.setAttribute('style', 'display:grid');
        telaAdiciona.setAttribute('style','display:none');
        telaJogo.setAttribute('style','display:none');
        montandoTabuleiro.innerHTML = "";
    }
}




