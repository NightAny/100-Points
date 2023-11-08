var space_game = document.querySelector('#space_game');
var GameStart = document.querySelector('.GameStart');
var score = document.getElementById('score');
var fim = document.getElementById("FimJogo");
var gamebackground = document.querySelector(".area");
var musica = document.querySelector("audio");
musica.volume = 0.1;
var sndMorte = document.getElementById("sndMorte");
sndMorte.volume = 0.1;
var sndMoeda = document.getElementById("sndMoeda");
sndMoeda.volume = 0.2;

var controle = document.querySelector(".controle");
var btnPower = document.querySelector(".Power");
var txtp = document.querySelector("p");
var tamanhoPlayer = 30;
var FimJogo = false;
var pontuacao = 0;
var x = 0,y = 0, max = 10, ix = 0, iy = 0;

const GerarPlayer = () =>{
    player = document.querySelector(".player");
    score.innerHTML = "Score " + pontuacao;
}

const GerarInimigo = () =>{
    inimigo = document.querySelector(".inimigo");
    inimigo.style.left = (ix * tamanhoPlayer) + "px";
    inimigo.style.top = (iy * tamanhoPlayer) + "px";
}

const GerarFruta = () =>{
    let frutaX = parseInt(Math.random() * max);
    let frutaY = parseInt(Math.random() * max);
    Fruta = document.querySelector(".fruta");
    Fruta.style.left = frutaX * tamanhoPlayer + "px";
    Fruta.style.top = frutaY * tamanhoPlayer + "px";
    sndMoeda.play();
}

const Verificavitoria = () =>{
     if (pontuacao > 99){
        FimJogo = true;
     } 
}

const BackgroundEscuro = () =>{
    const buttons = document.querySelectorAll(".controle button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.border = "solid white 2px";
        buttons[i].style.color = "white";
    }
    btnPower.style.border = "white white 2px";
    btnPower.style.color = "white";
}

const BackgroundClaro = () =>{
    const buttons = document.querySelectorAll(".controle button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.border = "solid Black 2px";
        buttons[i].style.color = "Black";
    }
    btnPower.style.border = "solid Black 2px";
    btnPower.style.color = "Black";
}

const habilidadeEspecial = () =>{
    if(ix / tamanhoPlayer > 3 && iy / tamanhoPlayer > 4){
        iy = 10 * tamanhoPlayer;
        ix = 9 * tamanhoPlayer;
        inimigo.style.top = (iy - tamanhoPlayer) + "px";
        inimigo.style.left = ix + "px";
    } else if(ix / tamanhoPlayer <= 4 && iy / tamanhoPlayer > 4){
        iy = 10 * tamanhoPlayer;
        ix = 0 * tamanhoPlayer;
        inimigo.style.top = (iy - tamanhoPlayer) + "px";
        inimigo.style.left = ix + "px";
    } else if(ix / tamanhoPlayer <= 4 && iy / tamanhoPlayer <= 4){
        iy = 1 * tamanhoPlayer;
        ix = 0 * tamanhoPlayer;
        inimigo.style.top = (iy - tamanhoPlayer) + "px";
        inimigo.style.left = ix + "px";
    } else if(ix / tamanhoPlayer > 3 && iy / tamanhoPlayer <= 4){
        iy = 1 * tamanhoPlayer;
        ix = 9 * tamanhoPlayer;
        inimigo.style.top = (iy - tamanhoPlayer) + "px";
        inimigo.style.left = ix + "px";
    }
}

const FinalCompleto = () =>{
    GameStart.classList.add('sumirAnimate');
    gamebackground.classList.add('animateTudobranco');
    musica.pause();
    setTimeout(() => {
        GameStart.style.display = "none";
        gamebackground.style.display = "none";
        document.getElementById("sndFinal").play();
        document.querySelector(".btn-SairJogo").style.display = "none";
        document.querySelector(".AnimacaofimdeJogo").style.display = "flex";
        document.querySelector(".quadradofim").classList.add('animatefimanimation');
        setTimeout(() => {
            document.querySelector(".quadradofim").classList.remove('animatefimanimation');
            document.querySelector(".balao").style.display = "block";
            document.querySelector(".balao").innerHTML = "Finalmente";
            setTimeout(() => {
                document.querySelector(".balao").innerHTML = "voce conseguiu";
                setTimeout(() => {
                    document.querySelector(".balao").innerHTML = "Entendeu o motivo de sua Existencia";
                    setTimeout(() => {
                        document.querySelector(".balao").innerHTML = "Chegou o momento";
                        setTimeout(() => {
                            document.querySelector(".balao").innerHTML = "Sua vida vai mudar";
                            gamebackground.classList.remove('animateTudobranco');
                            gamebackground.classList.add('animateopacity');
                            gamebackground.style.display = "block";
                            setTimeout(() => {
                                document.querySelector(".balao").style.display = "none";
                                setTimeout(() => {
                                    gamebackground.classList.remove('animateopacity');
                                    gamebackground.classList.add('animateescurecertudofinal');
                                    setTimeout(() => {
                                        gamebackground.style.display = "none";
                                        GameStart.style.display = "none";
                                        document.querySelector(".AnimacaofimdeJogo").style.backgroundColor = "black";
                                        setTimeout(() => {
                                            document.querySelector(".quadradofim").style.display = "none";
                                            document.querySelector(".balao").style.position = "static";
                                            document.querySelector(".balao").style.top = "0";
                                            document.querySelector(".balao").style.color = "white";
                                            setTimeout(() => {
                                                document.querySelector(".balao").style.display = "block";
                                                document.querySelector(".balao").innerHTML = "O mundo não foi feito a partir de objetivos";
                                                setTimeout(() => {
                                                    document.querySelector(".balao").innerHTML = "Os objetivos foram feitos a partir daqueles que estavam neste mundo";
                                                    setTimeout(() => {
                                                        document.querySelector(".balao").innerHTML = "Então foque naquilo que fez sentir Grato por existir";
                                                        setTimeout(() => {
                                                            document.querySelector(".balao").innerHTML = "Obrigado por ter Jogado";
                                                            document.querySelector(".btn-SairJogo").style.display = "block";
                                                        }, 10000)
                                                    }, 6000)
                                                }, 6000)
                                            }, 2000)
                                        }, 1000)
                                    }, 10000)
                                }, 5000)
                            }, 5000)
                        }, 5000)
                    }, 5000)
                }, 5000)
            }, 5000)
        }, 10000)
    }, 5000)
}

const AtualizaTexto = () =>{
    //Level 1
    if(pontuacao > 0 && pontuacao <=10){
        pontuacao === 1 ? txtp.innerHTML = "Continue assim" : "";
        pontuacao === 2 ? txtp.innerHTML = "Todas as vezes que você pegar uma fruta sua pontuação aumenta" : "";
        pontuacao === 3 ? txtp.innerHTML = "Esse de vermelho é seu inimigo" : "";
        pontuacao === 4 ? txtp.innerHTML = "Fuja dele o máximo possível" : "";
        pontuacao === 5 ? txtp.innerHTML = "Você não vai querer saber o que vai acontecer" : "";
        pontuacao === 6 ? txtp.innerHTML = "Nesta realidade você é um ser abstrato" : "";
        pontuacao === 7 ? txtp.innerHTML = "Que vive em prol da sua existência" : "";
        pontuacao === 8 ? txtp.innerHTML = "Sem ter um objetivo real" : "";
        pontuacao === 10 ? txtp.innerHTML = "O que está acontecendo?" : "";
        pontuacao === 10 ? gamebackground.style.backgroundColor = "black" : "";
        pontuacao === 10 ? BackgroundEscuro() : "";
    } else if(pontuacao > 10 && pontuacao <=20){
        pontuacao === 11 ? txtp.innerHTML = "Está tudo escuro." : "";
        pontuacao === 12 ? txtp.innerHTML = "Deveria ser assim?" : "";
        pontuacao === 13 ? txtp.innerHTML = "Temo dizer que você terá que esperar um pouco." : "";
        pontuacao === 14 ? txtp.innerHTML = "Até que a iluminação volte." : "";
        pontuacao === 15 ? txtp.innerHTML = "Enquanto isso, vou lhe perguntar..." : "";
        pontuacao === 16 ? txtp.innerHTML = "Coisas como o que te trouxe até aqui." : "";
        pontuacao === 17 ? txtp.innerHTML = "Ou quem sabe, apenas seja..." : "";
        pontuacao === 18 ? txtp.innerHTML = "Um sentimento mal preenchido." : "";
        pontuacao === 19 ? txtp.innerHTML = "Uma boa justificativa seria..." : "";
        pontuacao === 20 ? txtp.innerHTML = "Quem é voçe ou onde estás" : "";
        pontuacao === 20 ? gamebackground.style.backgroundColor = "purple" : "";
        pontuacao === 20 ? BackgroundClaro() : "";
    } else if(pontuacao > 20 && pontuacao <=30){
        pontuacao === 20 ? txtp.innerHTML = "Pronto" : "";
        pontuacao === 21 ? txtp.innerHTML = "Não esta tão escuro" : "";
        pontuacao === 22 ? txtp.innerHTML = "Tinha medo" : "";
        pontuacao === 23 ? txtp.innerHTML = "de até onde isso ia dar" : "";
        pontuacao === 24 ? txtp.innerHTML = "Ja ia esquecendo..." : "";
        pontuacao === 25 ? txtp.innerHTML = "Existe este botão" : "";
        pontuacao === 25 ? btnPower.style.display = "block" : "";
        pontuacao === 26 ? txtp.innerHTML = "Aperte ele para ver o que faz" : "";
        pontuacao === 27 ? txtp.innerHTML = "Ela direciona o inimigo pra quina mais proxima" : "";
        pontuacao === 28 ? txtp.innerHTML = "Recomendo guarda-la" : "";
        pontuacao === 29 ? txtp.innerHTML = "use-a apenas quando estiver no centro" : "";
        pontuacao === 30 ? gamebackground.style.backgroundColor = "brown" : "";
        pontuacao === 30 ? gamebackground.style.boxShadow = "inset 0px 0px 64px 10px rgba(0,0,0,1)" : "";
        pontuacao === 30 ? txtp.innerHTML = "Estamos em novas áreas" : "";
        pontuacao === 30 ? BackgroundEscuro() : "";
    } else if(pontuacao > 30 && pontuacao <=40){
        pontuacao === 31 ? txtp.innerHTML = "indo cada vez" : "";
        pontuacao === 32 ? txtp.innerHTML = "Cada Vez mais Fundo..." : "";
        pontuacao === 33 ? txtp.innerHTML = "Se continuar assim vamos chegar lá" : "";
        pontuacao === 35 ? txtp.innerHTML = "Parece que tudo esta melhor agora" : "";
        pontuacao === 35 ? inimigo.style.visibility = "hidden" : "";
        pontuacao === 35 ? habilidadeEspecial() : "";
        pontuacao === 35 ? gamebackground.style.backgroundColor = "rgb(76, 76, 151)" : "";
        pontuacao === 36 ? txtp.innerHTML = "As vezes procuramos" : "";
        pontuacao === 37 ? txtp.innerHTML = "Procuramos aquilo que não" : "";
        pontuacao === 38 ? txtp.innerHTML = "Nos fará melhores,<br>mas nos sentiremos bem" : "";
        pontuacao === 39 ? txtp.innerHTML = "Por apenas ter Conquistado" : "";
        pontuacao === 40 ? txtp.innerHTML = "Em breve vc vai saber" : "";
        pontuacao === 40 ? gamebackground.style.backgroundColor = "rgb(71, 87, 56)" : "";
    } else if(pontuacao > 40 && pontuacao <=50){
        pontuacao === 41 ? txtp.innerHTML = "De onde voçe veio" : "";
        pontuacao === 42 ? txtp.innerHTML = "E para onde irá" : "";
        pontuacao === 43 ? txtp.innerHTML = "Todas as perguntas" : "";
        pontuacao === 44 ? txtp.innerHTML = "So fazem sentido quando temos uma sugestão" : "";
        pontuacao === 45 ? txtp.innerHTML = "De resposta a se pensar" : "";
        pontuacao === 46 ? txtp.innerHTML = "Perguntas inimaginaveis requerem" : "";
        pontuacao === 47 ? txtp.innerHTML = "Respostas inimaginaveis" : "";
        pontuacao === 48 ? txtp.innerHTML = "talvez voçe so esteja sem rumo" : "";
        pontuacao === 49 ? txtp.innerHTML = "Porem não é o unico" : "";
        pontuacao === 50 ? gamebackground.classList.add('backgroundColorido') : "";
        pontuacao === 50 ? gamebackground.style.boxShadow = "none" : "";
        pontuacao === 50 ? inimigo.style.visibility = "visible" : "";
        pontuacao === 50 ? habilidadeEspecial() : "";
    } else if(pontuacao > 50 && pontuacao <=60){
        pontuacao === 51 ? txtp.innerHTML = "De onde voçe veio" : "";
        pontuacao === 52 ? txtp.innerHTML = "Existem inumeros de Ti" : "";
        pontuacao === 53 ? txtp.innerHTML = "De diferentes Epocas" : "";
        pontuacao === 54 ? txtp.innerHTML = "Lugares" : "";
        pontuacao === 55 ? txtp.innerHTML = "e Maneiras" : "";
        pontuacao === 56 ? txtp.innerHTML = "Não necessariamente" : "";
        pontuacao === 57 ? txtp.innerHTML = "Precisa saber o que" : "";
        pontuacao === 58 ? txtp.innerHTML = "Voçe é" : "";
        pontuacao === 59 ? txtp.innerHTML = "Apenas o que voçe quer ser" : "";
        pontuacao === 60 ? txtp.innerHTML = "Apenas suas decições importam" : "";
        pontuacao === 60 ? gamebackground.classList.remove('backgroundColorido') : "";
        pontuacao === 60 ? gamebackground.style.backgroundColor = "rgb(180, 123, 150)" : "";
    } else if(pontuacao > 60 && pontuacao <=70){
        pontuacao === 62 ? txtp.innerHTML = "Tudo esta do jeito que deveria estar" : "";
        pontuacao === 63 ? txtp.innerHTML = "Apenas continue" : "";
        pontuacao === 64 ? txtp.innerHTML = "continue..." : "";
        pontuacao === 65 ? gamebackground.style.backgroundColor = "rgb(0, 2, 109)" : "";
        pontuacao === 65 ? BackgroundEscuro() : "";
        pontuacao === 66 ? txtp.innerHTML = "Que naturalmente" : "";
        pontuacao === 67 ? txtp.innerHTML = "Tudo vai acontecer" : "";
        pontuacao === 68 ? txtp.innerHTML = "Como previsto" : "";
        pontuacao === 69 ? txtp.innerHTML = "Como tem que acontecer" : "";
        pontuacao === 69 ? txtp.innerHTML = "Há varios anos atras" : "";
        pontuacao === 70 ? gamebackground.style.backgroundColor = "rgb(107, 107, 107)" : "";
        pontuacao === 70 ? gamebackground.style.boxShadow = "inset 0px 0px 64px 10px rgba(0,0,0,1)" : "";
    } else if(pontuacao > 70 && pontuacao <=80){
        pontuacao === 71 ? txtp.innerHTML = "Houveram mudanças externas" : "";
        pontuacao === 72 ? txtp.innerHTML = "Com o intuito" : "";
        pontuacao === 73 ? txtp.innerHTML = "De mudar a essencia da vida" : "";
        pontuacao === 74 ? txtp.innerHTML = "Para algo diferente de qualquer" : "";
        pontuacao === 75 ? txtp.innerHTML = "Outra coisa" : "";
        pontuacao === 76 ? txtp.innerHTML = "Disseram eles" : "";
        pontuacao === 77 ? txtp.innerHTML = "Que isso era para um mundo melhor" : "";
        pontuacao === 78 ? txtp.innerHTML = "Sem tristeza e perdas" : "";
        pontuacao === 79 ? txtp.innerHTML = "Mas logo apos" : "";
        pontuacao === 80 ? txtp.innerHTML = "Se arrependeram" : "";
        pontuacao === 70 ? gamebackground.style.boxShadow = "inset 0px 0px 64px 10px rgba(0,0,0,1)" : "";
        pontuacao === 80 ? gamebackground.style.backgroundColor = "rgb(77, 77, 77)" : "";
        pontuacao === 80 ? inimigo.style.visibility = "hidden" : "";
        pontuacao === 80 ? BackgroundEscuro() : "";
    } else if(pontuacao > 80 && pontuacao <=90){
        pontuacao === 81 ? txtp.innerHTML = "Pois viram que isso estava" : "";
        pontuacao === 82 ? txtp.innerHTML = "Alem da compreenção deles" : "";
        pontuacao === 83 ? txtp.innerHTML = "Forçaram um ser como voçe" : "";
        pontuacao === 84 ? txtp.innerHTML = "A mudar sua maneira de existir" : "";
        pontuacao === 85 ? txtp.innerHTML = "Para beneficio proprio" : "";
        pontuacao === 86 ? txtp.innerHTML = "Com isso" : "";
        pontuacao === 87 ? txtp.innerHTML = "Eles se dividiram" : "";
        pontuacao === 88 ? txtp.innerHTML = "Um lado querendo aceitar" : "";
        pontuacao === 89 ? txtp.innerHTML = "A realidade" : "";
        pontuacao === 90 ? txtp.innerHTML = "Outro mudando" : "";
        pontuacao === 90 ? gamebackground.style.backgroundColor = "#8f94fb" : "";
        pontuacao === 90 ? gamebackground.style.boxShadow = "none" : "";
        pontuacao === 90 ? gamebackground.classList.remove('GameSpinAnimate') : "";
        pontuacao === 90 ? gamebackground.style.backgroundColor = "rgb(32, 32, 32)" : "";
    } else if(pontuacao > 90 && pontuacao <=100){
        pontuacao === 91 ? txtp.innerHTML = "A essencia da Vida" : "";
        pontuacao === 91 ? gamebackground.style.backgroundColor = "rgb(28, 28, 28)" : "";
        pontuacao === 92 ? txtp.innerHTML = "Por isso" : "";
        pontuacao === 92 ? gamebackground.style.backgroundColor = "rgb(24, 24, 24)" : "";
        pontuacao === 93 ? txtp.innerHTML = "Não importa" : "";
        pontuacao === 93 ? gamebackground.style.backgroundColor = "rgb(20, 20, 20)" : "";
        pontuacao === 94 ? txtp.innerHTML = "O que realmente queiram" : "";
        pontuacao === 94 ? gamebackground.style.backgroundColor = "rgb(16, 16, 16)" : "";
        pontuacao === 95 ? txtp.innerHTML = "O importe é que" : "";
        pontuacao === 95 ? gamebackground.style.backgroundColor = "rgb(10, 10, 10)" : "";
        pontuacao === 96 ? txtp.innerHTML = "Querem que seja assim" : "";
        pontuacao === 96 ? gamebackground.style.backgroundColor = "rgb(8, 8, 8)" : "";
        pontuacao === 97 ? txtp.innerHTML = "Desde que aceite<br>O que voçe é" : "";
        pontuacao === 97 ? gamebackground.style.backgroundColor = "rgb(4, 4, 4)" : "";
        pontuacao === 98 ? txtp.innerHTML = "Não sofrerá tanto" : "";
        pontuacao === 98 ? gamebackground.style.backgroundColor = "rgb(2, 2, 2)" : "";
        pontuacao === 99 ? txtp.innerHTML = "Ja descobriu?" : "";
        pontuacao === 100 ? controle.style.display = "none" : "";
        pontuacao === 100 && FinalCompleto();
    }
}

const destruirFruta = () =>{
    pontuacao++;
    score.innerHTML = "Score " + pontuacao;
    score.innerHTML > 10 && moverInimigo();
    GerarFruta();
    Verificavitoria();
    AtualizaTexto();
}

const movercima = () =>{
    if(!FimJogo){
        y > 0 ? y-=1 : "";
        updatePosicao();
    }
}

const moverbaixo = () =>{
    if(!FimJogo){
        y < 9 ? y+=1 : "";
        updatePosicao();
    } 
}

const moveresquerda = () =>{
    if(!FimJogo){
        x > 0 ? x-=1 : "";
        updatePosicao();
    }
}

const moverdireita = () =>{
    if(!FimJogo){
        x < 9 ? x+=1 : "";
        updatePosicao();
    }
}

const ReiniciarGame = () =>{
    if(!FimJogo){
        return;
    }

    FimJogo = false;
    pontuacao = 0;
    controle.style.display = "block";
    gamebackground.style.display = "block";
    gamebackground.classList.remove('animateescurecertudofinal');
    fim.style.display = "none";
    inimigo.style.visibility = "hidden";
    score.innerHTML = "Score " + pontuacao;
    document.querySelector(".Reiniciar").style.display = "none";
    txtp.style.visibility = "visible";
    txtp.innerHTML = "Vá Até os quadrados Verdes";
    BackgroundClaro();
    musica.play();
    gamebackground.style.boxShadow = "none";
    gamebackground.style.backgroundColor = "#8f94fb";
    gamebackground.classList.remove('backgroundColorido');
    document.querySelector(".AnimacaofimdeJogo").style.display = "none";
    document.getElementById("sndFinal").pause();
    btnPower.style.display = "none";
    GameStart.classList.remove('sumirAnimate');
}

const verificarMorte = () =>{
    if (y === (iy / tamanhoPlayer) && x === ix / tamanhoPlayer && inimigo.style.visibility === "visible"){
        fim.innerHTML = `Fim de Jogo<br>Score ${pontuacao}`;
        fim.style.display = "block";
        FimJogo = true;
        document.querySelector(".Reiniciar").style.display = "block";
        document.querySelector(".btn-SairJogo").style.display = "block";
        txtp.style.visibility = "hidden";
        sndMorte.play();
    }
}

const moverInimigo = () =>{
    pontuacao === 3 ? inimigo.style.visibility = "visible" : "";
    if(pontuacao > 3){
        ix = parseInt( inimigo.style.left.replace(/"px"/g, ""));
        iy = parseInt( inimigo.style.top.replace(/"px"/g, ""));
        let valorRandom = parseInt(Math.random() * 6);
        if(valorRandom === 0){
            x > ix / tamanhoPlayer ? inimigo.style.left = ( ix + tamanhoPlayer) + "px" : "";
            x < ix / tamanhoPlayer ? inimigo.style.left = ( ix - tamanhoPlayer) + "px" : "";
            y < (iy / tamanhoPlayer) + 1 ? inimigo.style.top = ( iy - tamanhoPlayer) + "px" : "";
            y > (iy / tamanhoPlayer) ? inimigo.style.top = ( iy + tamanhoPlayer) + "px" : "";
            ix = parseInt( inimigo.style.left.replace(/"px"/g, ""));
            iy = parseInt( inimigo.style.top.replace(/"px"/g, ""));
            verificarMorte();
        }
    }
}

const updatePosicao = () =>{
    player.style.top = (y * tamanhoPlayer) + "px";
    player.style.left = (x * tamanhoPlayer) + "px";
    moverInimigo();
    verificarFruta();
    verificarMorte();
}

const verificarFruta = () =>{
    let px = player.getBoundingClientRect().x;
    let py = player.getBoundingClientRect().y;
    let fx = Fruta.getBoundingClientRect().x;
    let fy = Fruta.getBoundingClientRect().y;
    px == fx && py == fy && destruirFruta();
}

const ComecarJogo = () =>{
    document.querySelector(".TelaInicial").style.display = "none";
    document.querySelector(".GameStart").style.display = "block";
    musica.play();
}

const Creditos = () =>{
    document.querySelector(".TelaInicial").style.display = "none";
    document.querySelector(".TelaCreditos").style.display = "flex";
}

const VoltarTelas = () =>{
    document.querySelector(".TelaInicial").style.display = "flex";
    document.querySelector(".TelaCreditos").style.display = "none";
    document.querySelector(".GameStart").style.display = "none";
    document.querySelector(".TelaConfig").style.display = "none";
    document.querySelector(".AnimacaofimdeJogo").style.display = "none";
    document.querySelector(".area").style.backgroundColor = "#8f94fb";
    ReiniciarGame();
}

const Config = () =>{
    document.querySelector(".TelaInicial").style.display = "none";
    document.querySelector(".TelaConfig").style.display = "flex";
}

const Sair = () =>{
    window.close();
}

document.addEventListener("load",GerarPlayer(),GerarInimigo(),GerarFruta());
document.addEventListener("keydown", (e)=>{
    switch(e.key){
        case "a":
            moveresquerda();
            break;

        case "ArrowLeft":
            moveresquerda();
            break;
        
        case "d":
            moverdireita();
            break;

        case "ArrowRight":
            moverdireita();
            break;

        case "w":
            movercima();
            break;

        case "ArrowUp":
            movercima();
            break;

        case "s":
            moverbaixo();
            break;

        case "ArrowDown":
            moverbaixo();
            break;

        case "r":
            ReiniciarGame();
    }
});