var telaOpcoes = document.querySelector("#tela-opcoes")
var telaAdiciona = document.querySelector("#tela-adicionar")
var telaJogo =document.querySelector("#tela-jogo")


function Tela(opcao) 
{
    //1 = Começar um jogo 2 = Adicionar uma palvra nova, 3 = Salvar e Começar a jogar, 4 = Cancelar , 5 = Novo jogo, 6 = Desistir
    if(opcao == 1)
    {
        //Começa um Jogo
        telaOpcoes.setAttribute('style','display:none')
        telaAdiciona.setAttribute('style','display:none')
        telaJogo.setAttribute('style','display:block')
    }
    else if (opcao == 2)
    {
        //Adicionar palavra , falta a implementacao de criar nova palavra
        telaOpcoes.setAttribute('style','display:none')
        telaAdiciona.setAttribute('style','display:block')
        telaJogo.setAttribute('style','display:none')
    }
    else if (opcao == 3)
    {
        //Salvar e Começar
        telaOpcoes.setAttribute('style','display:none')
        telaAdiciona.setAttribute('style','display:none')
        telaJogo.setAttribute('style','display:block')
    }
    else if (opcao == 4)
    {
        //Cancela
        telaOpcoes.setAttribute('style', 'display:grid')
        telaAdiciona.setAttribute('style','display:none')
        telaJogo.setAttribute('style','display:none')
    }
    else if (opcao == 5)
    {
        //Novo jogo , sortear nova palavra.
        telaOpcoes.setAttribute('style','display:none')
        telaAdiciona.setAttribute('style','display:none')
        telaJogo.setAttribute('style','display:block')
    }
    else if (opcao == 6)
    {
        //Desistir
        telaOpcoes.setAttribute('style', 'display:grid')
        telaAdiciona.setAttribute('style','display:none')
        telaJogo.setAttribute('style','display:none')
    }
}