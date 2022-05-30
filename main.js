const telaOpcoes = document.querySelector("#tela-opcoes");
const telaAdiciona = document.querySelector("#tela-adicionar");
const telaJogo = document.querySelector("#tela-jogo");
const letras = document.getElementsByClassName("digitado")
const montandoTabuleiro = document.querySelector("#palavras");
const letrasErradas = document.querySelector("#palavras-incorretas");
const forca = document.getElementsByClassName("elementos-da-forca")

var palavrasRegistradas =   [{"palavra":"ABACAXI","dica":"FRUTA"},{"palavra":"BANANA","dica":"FRUTA"},{"palavra":"ABACATE","dica":"FRUTA"},
                             {"palavra":"BRASIL","dica":"PAÍS"},{"palavra":"INGLATERRA","dica":"PAÍS"},{"palavra":"FUTEBOL","dica":"ESPORTE"}];

var palavrasDescobertas = [];
var palavrasErradas = [];
var palavraEnigma;
var tentativas = 9;

function Tela(opcao) 
{
    //1 = Começar um jogo 2 = Adicionar uma palvra nova, 3 = Salvar e Começar a jogar, 4 = Cancelar , 5 = Novo jogo, 6 = Desistir
    if(opcao == 1)
    {
        //Começa um Jogo
        telaOpcoes.setAttribute('style','display:none');
        telaAdiciona.setAttribute('style','display:none');
        telaJogo.setAttribute('style','display:block');
        palavraEnigma = Sortear();
        CriandoTabuleiro();
        document.body.onkeypress = Tecla;
        console.log(palavraEnigma.palavra)
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

function Sortear() 
{
    var sortear = Math.floor(Math.random() * palavrasRegistradas.length);
    var palavraEnigmaSorteada = palavrasRegistradas[sortear];
    return palavraEnigmaSorteada;
}

function Tecla()
{
    if(event.keyCode>= 65 && event.keyCode <= 90) 
    {
        var letraDescoberta = String.fromCharCode(event.keyCode)
    
            if(palavraEnigma.palavra.match(letraDescoberta))
            {
                var validaEntradaArray = true;
                for (let i = 0; i < palavrasDescobertas.length; i++) 
                {
                    if(palavrasDescobertas[i] == letraDescoberta)
                    {
                        validaEntradaArray = false
                    }
                }
                if (validaEntradaArray == true)
                {
                    palavrasDescobertas.push(letraDescoberta);
                }
            }
            if(!palavraEnigma.palavra.match(letraDescoberta))
            {
                var validaEntradaArray = true;
                for (let i = 0; i < palavrasErradas.length; i++) 
                {
                    if(palavrasErradas[i] == letraDescoberta)
                    {
                        validaEntradaArray = false
                    }
                }
                if (validaEntradaArray == true)
                {
                    palavrasErradas.push(letraDescoberta);
                    tentativas--;
                    EscreverLetraErrada();
                }
            }
    }
    else
    {
        window.alert("Apenas letras maiusculas")
    }
    RevelarLetra();
}

function RevelarLetra()
{
    for(let i = 0; i < palavrasDescobertas.length; i++)
    {
        for(let n = 0; n < letras.length; n++)
        {
            if(palavrasDescobertas[i] == letras[n].textContent)
            {
                letras[n].setAttribute('style','display:block')
            }
        }
    }
}

function EscreverLetraErrada()
{
    letrasErradas.innerHTML = ""
    for (let i = 0; i < palavrasErradas.length; i++) 
    {
        if(letrasErradas.innerHTML == '')
        {
            letrasErradas.innerHTML += `<div class="container-letra">` + '\n' +
                                        `<span class="digitado-errado">Erros:</span>` + '\n' +
                                        `</div>`    
            letrasErradas.innerHTML += `<div class="container-letra">` + '\n' +
                                        `<span class="digitado-errado">${palavrasErradas[i]}</span>` + '\n' +
                                        `</div>`     
        }
        else
        {
            letrasErradas.innerHTML += `<div class="container-letra">` + '\n' +
                                        `<span class="digitado-errado">${palavrasErradas[i]}</span>` + '\n' +
                                        `</div>` 
        }
    }
    DesenharForca();
}

function DesenharForca()
{
    if(tentativas >= -1)
    {
        for(let i = 9; i > tentativas; i--)
        {
            for(let n = 9; n > tentativas; n--)
            {
                forca[n].setAttribute('style','display:block')
            }
        }
    }
}