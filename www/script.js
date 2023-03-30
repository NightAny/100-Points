var space_game = document.querySelector('#space_game');
var GameStart = document.querySelector('.GameStart');
var score = document.querySelector('#score');
var fim = document.querySelector("#FimJogo");
var musica = document.querySelector("audio");
var gamebackground = document.querySelector(".area");
var sndMorte = document.querySelector("#sndMorte");
var sndMoeda = document.querySelector("#sndMoeda");
var controle = document.querySelector(".controle");
var btnPower = document.querySelector(".Power");
var txtp = document.querySelector("p");
var FimJogo = false;
var pontuacao = 0;
var x = 0,y = 0, max = 10, ix = 0, iy = 0;

const GerarPlayer = () =>{
    player = document.createElement("div");  // variavel global 
    player.setAttribute("class", "player");
    space_game.appendChild(player);
    score.innerHTML = "Score " + pontuacao;
}

const GerarInimigo = () =>{
    inimigo = document.createElement("div");  // variavel global 
    inimigo.setAttribute("class", "inimigo");
    inimigo.style.left = (ix * 30) + "px";
    inimigo.style.top = (iy * 30) + "px";
    space_game.appendChild(inimigo);
}

const GerarFruta = () =>{
    let frutaX = parseInt(Math.random() * max);
    let frutaY = parseInt(Math.random() * max);
    frutaY === 8 ? frutaY = -1 : console.log();
    frutaY === 9 ? frutaY = -2 : console.log();
    Fruta = document.createElement("div"); // variavel global 
    Fruta.setAttribute("class", "fruta");
    Fruta.style.left = frutaX * 30 + "px";
    Fruta.style.top = frutaY * 30 + "px";
    space_game.appendChild(Fruta);
    Fruta.classList.add('nascer');
    setTimeout(() => {
        Fruta.classList.remove('nascer');
    }, 100)
    sndMoeda.play();
}

const Verificavitoria = () =>{
     if (pontuacao > 99){
        //fim.innerHTML = `Parabens Voçẽ Conseguiu`;
        //fim.style.display = "block";
        FimJogo = true;
        //txtp.style.visibility = "hidden";
     } 
}

const BackgroundEscuro = () =>{
    let button1 = document.querySelector(".button1");
    let button2 = document.querySelector(".button2");
    let button3 = document.querySelector(".button3");
    let button4 = document.querySelector(".button4");

    button1.style.border = "solid white 2px";
    button2.style.border = "solid white 2px";
    button3.style.border = "solid white 2px";
    button4.style.border = "solid white 2px";
    btnPower.style.border = "solid white 2px";
    button1.style.color = "white";
    button2.style.color = "white";
    button3.style.color = "white";
    button4.style.color = "white";
    btnPower.style.color = "white";
}

const BackgroundClaro = () =>{
    let button1 = document.querySelector(".button1");
    let button2 = document.querySelector(".button2");
    let button3 = document.querySelector(".button3");
    let button4 = document.querySelector(".button4");

    button1.style.border = "solid Black 2px";
    button2.style.border = "solid Black 2px";
    button3.style.border = "solid Black 2px";
    button4.style.border = "solid Black 2px";
    btnPower.style.border = "solid Black 2px";
    button1.style.color = "Black";
    button2.style.color = "Black";
    button3.style.color = "Black";
    button4.style.color = "Black";
    btnPower.style.color = "Black";
}

const habilidadeEspecial = () =>{
    if(ix / 30 > 3 && iy / 30 > 4){
        iy = 9 * 30;
        ix = 9 * 30;
        inimigo.style.top = (iy - 30) + "px";
        inimigo.style.left = ix + "px";
    }
    if(ix / 30 <= 4 && iy / 30 > 4){
        iy = 9 * 30;
        ix = 0 * 30;
        inimigo.style.top = (iy - 30) + "px";
        inimigo.style.left = ix + "px";
    }
    if(ix / 30 <= 4 && iy / 30 <= 4){
        iy = 0 * 30;
        ix = 0 * 30;
        inimigo.style.top = (iy - 30) + "px";
        inimigo.style.left = ix + "px";
    }
    if(ix / 30 > 3 && iy / 30 <= 4){
        iy = 0 * 30;
        ix = 9 * 30;
        inimigo.style.top = (iy - 30) + "px";
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
        pontuacao === 1 ? txtp.innerHTML = "Continue Assim" : console.log();
        pontuacao === 2 ? txtp.innerHTML = "Todas as vezes que vc pegar uma fruta sua pontuação aumenta" : console.log();
        pontuacao === 3 ? txtp.innerHTML = "Esse de vermelho é o seu inimigo" : console.log();
        pontuacao === 4 ? txtp.innerHTML = "Fuja dele o maximo possivel" : console.log();
        pontuacao === 5 ? txtp.innerHTML = "você não irá querer saber o que vai acontecer" : console.log();
        pontuacao === 6 ? txtp.innerHTML = "Nesta realidade voçe é um ser abstrato" : console.log();
        pontuacao === 7 ? txtp.innerHTML = "Que vive em prol da sua existẽncia" : console.log();
        pontuacao === 8 ? txtp.innerHTML = "Sem Ter um real objetivo" : console.log();
        pontuacao === 10 ? txtp.innerHTML = "O que esta acontecendo?" : console.log();
        pontuacao === 10 ? gamebackground.style.backgroundColor = "black" : console.log();
        pontuacao === 10 ? BackgroundEscuro() : console.log();
    }
    if(pontuacao > 10 && pontuacao <=20){
        pontuacao === 11 ? txtp.innerHTML = "Tudo esta escuro" : console.log();
        pontuacao === 12 ? txtp.innerHTML = "Teria que estar assim?" : console.log();
        pontuacao === 13 ? txtp.innerHTML = "Temo dizer que voçe terá<br>de esperar um pouco" : console.log();
        pontuacao === 14 ? txtp.innerHTML = "Até que a iluminação volte" : console.log();
        pontuacao === 15 ? txtp.innerHTML = "Enquanto isso Vou lhe perguntar" : console.log();
        pontuacao === 16 ? txtp.innerHTML = "Coisas como o que<br>te trouxe<br>até aqui" : console.log();
        pontuacao === 16 ? txtp.innerHTML = "Talvez a curiosidade?" : console.log();
        pontuacao === 17 ? txtp.innerHTML = "Ou quem sabe apenas seja" : console.log();
        pontuacao === 18 ? txtp.innerHTML = "Um sentimento mal preenchido" : console.log();
        pontuacao === 19 ? txtp.innerHTML = "Boa justificativa Seria" : console.log();
        pontuacao === 20 ? txtp.innerHTML = "Quem é voçe ou onde estás" : console.log();
        pontuacao === 20 ? gamebackground.style.backgroundColor = "purple" : console.log();
        pontuacao === 20 ? BackgroundClaro() : console.log();
    }
    if(pontuacao > 20 && pontuacao <=30){
        pontuacao === 20 ? txtp.innerHTML = "Pronto" : console.log();
        pontuacao === 21 ? txtp.innerHTML = "Não esta tão escuro" : console.log();
        pontuacao === 22 ? txtp.innerHTML = "Tinha medo" : console.log();
        pontuacao === 23 ? txtp.innerHTML = "de até onde isso ia dar" : console.log();
        pontuacao === 24 ? txtp.innerHTML = "Ja ia esquecendo..." : console.log();
        pontuacao === 25 ? txtp.innerHTML = "Existe este botão" : console.log();
        pontuacao === 25 ? btnPower.style.display = "block" : console.log();
        pontuacao === 26 ? txtp.innerHTML = "Aperte ele para ver o que faz" : console.log();
        pontuacao === 27 ? txtp.innerHTML = "Ela direciona o inimigo pra quina mais proxima" : console.log();
        pontuacao === 28 ? txtp.innerHTML = "Recomendo guarda-la" : console.log();
        pontuacao === 29 ? txtp.innerHTML = "use-a apenas quando estiver no centro" : console.log();
        pontuacao === 30 ? gamebackground.style.backgroundColor = "brown" : console.log();
        pontuacao === 30 ? gamebackground.style.boxShadow = "inset 0px 0px 64px 10px rgba(0,0,0,1)" : console.log();
        pontuacao === 30 ? txtp.innerHTML = "Estamos em novas áreas" : console.log();
        pontuacao === 30 ? BackgroundEscuro() : console.log();
    }
    if(pontuacao > 30 && pontuacao <=40){
        pontuacao === 31 ? txtp.innerHTML = "indo cada vez" : console.log();
        pontuacao === 32 ? txtp.innerHTML = "Cada Vez mais Fundo..." : console.log();
        pontuacao === 33 ? txtp.innerHTML = "Se continuar assim vamos chegar lá" : console.log();
        pontuacao === 35 ? txtp.innerHTML = "Parece que tudo esta melhor agora" : console.log();
        pontuacao === 35 ? inimigo.style.visibility = "hidden" : console.log();
        pontuacao === 35 ? habilidadeEspecial() : console.log();
        pontuacao === 35 ? gamebackground.style.backgroundColor = "rgb(76, 76, 151)" : console.log();
        pontuacao === 36 ? txtp.innerHTML = "As vezes procuramos" : console.log();
        pontuacao === 37 ? txtp.innerHTML = "Procuramos aquilo que não" : console.log();
        pontuacao === 38 ? txtp.innerHTML = "Nos fará melhores,<br>mas nos sentiremos bem" : console.log();
        pontuacao === 39 ? txtp.innerHTML = "Por apenas ter Conquistado" : console.log();
        pontuacao === 40 ? txtp.innerHTML = "Em breve vc vai saber" : console.log();
        pontuacao === 40 ? gamebackground.style.backgroundColor = "rgb(71, 87, 56)" : console.log();
    }
    if(pontuacao > 40 && pontuacao <=50){
        pontuacao === 41 ? txtp.innerHTML = "De onde voçe veio" : console.log();
        pontuacao === 42 ? txtp.innerHTML = "E para onde irá" : console.log();
        pontuacao === 43 ? txtp.innerHTML = "Todas as perguntas" : console.log();
        pontuacao === 44 ? txtp.innerHTML = "So fazem sentido quando temos uma sugestão" : console.log();
        pontuacao === 45 ? txtp.innerHTML = "De resposta a se pensar" : console.log();
        pontuacao === 46 ? txtp.innerHTML = "Perguntas inimaginaveis requerem" : console.log();
        pontuacao === 47 ? txtp.innerHTML = "Respostas inimaginaveis" : console.log();
        pontuacao === 48 ? txtp.innerHTML = "talvez voçe so esteja sem rumo" : console.log();
        pontuacao === 49 ? txtp.innerHTML = "Porem não é o unico" : console.log();
        pontuacao === 50 ? gamebackground.classList.add('backgroundColorido') : console.log();
        pontuacao === 50 ? gamebackground.style.boxShadow = "none" : console.log();
        pontuacao === 50 ? inimigo.style.visibility = "visible" : console.log();
        pontuacao === 50 ? habilidadeEspecial() : console.log();
    }
    if(pontuacao > 50 && pontuacao <=60){
        pontuacao === 51 ? txtp.innerHTML = "De onde voçe veio" : console.log();
        pontuacao === 52 ? txtp.innerHTML = "Existem inumeros de Ti" : console.log();
        pontuacao === 53 ? txtp.innerHTML = "De diferentes Epocas" : console.log();
        pontuacao === 54 ? txtp.innerHTML = "Lugares" : console.log();
        pontuacao === 55 ? txtp.innerHTML = "e Maneiras" : console.log();
        pontuacao === 56 ? txtp.innerHTML = "Não necessariamente" : console.log();
        pontuacao === 57 ? txtp.innerHTML = "Precisa saber o que" : console.log();
        pontuacao === 58 ? txtp.innerHTML = "Voçe é" : console.log();
        pontuacao === 59 ? txtp.innerHTML = "Apenas o que voçe quer ser" : console.log();
        pontuacao === 60 ? txtp.innerHTML = "Apenas suas decições importam" : console.log();
        pontuacao === 60 ? gamebackground.classList.remove('backgroundColorido') : console.log();
        pontuacao === 60 ? gamebackground.style.backgroundColor = "rgb(180, 123, 150)" : console.log();
    }
    if(pontuacao > 60 && pontuacao <=70){
        pontuacao === 62 ? txtp.innerHTML = "Tudo esta do jeito que deveria estar" : console.log();
        pontuacao === 63 ? txtp.innerHTML = "Apenas continue" : console.log();
        pontuacao === 64 ? txtp.innerHTML = "continue..." : console.log();
        pontuacao === 65 ? gamebackground.style.backgroundColor = "rgb(0, 2, 109)" : console.log();
        pontuacao === 65 ? BackgroundEscuro() : console.log();
        pontuacao === 66 ? txtp.innerHTML = "Que naturalmente" : console.log();
        pontuacao === 67 ? txtp.innerHTML = "Tudo vai acontecer" : console.log();
        pontuacao === 68 ? txtp.innerHTML = "Como previsto" : console.log();
        pontuacao === 69 ? txtp.innerHTML = "Como tem que acontecer" : console.log();
        pontuacao === 69 ? txtp.innerHTML = "Há varios anos atras" : console.log();
        pontuacao === 70 ? gamebackground.style.backgroundColor = "rgb(107, 107, 107)" : console.log();
        pontuacao === 70 ? gamebackground.style.boxShadow = "inset 0px 0px 64px 10px rgba(0,0,0,1)" : console.log();
    }
    if(pontuacao > 70 && pontuacao <=80){
        pontuacao === 71 ? txtp.innerHTML = "Houveram mudanças externas" : console.log();
        pontuacao === 72 ? txtp.innerHTML = "Com o intuito" : console.log();
        pontuacao === 73 ? txtp.innerHTML = "De mudar a essencia da vida" : console.log();
        pontuacao === 74 ? txtp.innerHTML = "Para algo diferente de qualquer" : console.log();
        pontuacao === 75 ? txtp.innerHTML = "Outra coisa" : console.log();
        pontuacao === 76 ? txtp.innerHTML = "Disseram eles" : console.log();
        pontuacao === 77 ? txtp.innerHTML = "Que isso era para um mundo melhor" : console.log();
        pontuacao === 78 ? txtp.innerHTML = "Sem tristeza e perdas" : console.log();
        pontuacao === 79 ? txtp.innerHTML = "Mas logo apos" : console.log();
        pontuacao === 80 ? txtp.innerHTML = "Se arrependeram" : console.log();
        pontuacao === 70 ? gamebackground.style.boxShadow = "inset 0px 0px 64px 10px rgba(0,0,0,1)" : console.log();
        pontuacao === 80 ? gamebackground.style.backgroundColor = "rgb(77, 77, 77)" : console.log();
        pontuacao === 80 ? inimigo.style.visibility = "hidden" : console.log();
        pontuacao === 80 ? BackgroundEscuro() : console.log();
    }
    if(pontuacao > 80 && pontuacao <=90){
        pontuacao === 81 ? txtp.innerHTML = "Pois viram que isso estava" : console.log();
        pontuacao === 82 ? txtp.innerHTML = "Alem da compreenção deles" : console.log();
        pontuacao === 83 ? txtp.innerHTML = "Forçaram um ser como voçe" : console.log();
        pontuacao === 84 ? txtp.innerHTML = "A mudar sua maneira de existir" : console.log();
        pontuacao === 85 ? txtp.innerHTML = "Para beneficio proprio" : console.log();
        pontuacao === 86 ? txtp.innerHTML = "Com isso" : console.log();
        pontuacao === 87 ? txtp.innerHTML = "Eles se dividiram" : console.log();
        pontuacao === 88 ? txtp.innerHTML = "Um lado querendo aceitar" : console.log();
        pontuacao === 89 ? txtp.innerHTML = "A realidade" : console.log();
        pontuacao === 90 ? txtp.innerHTML = "Outro mudando" : console.log();
        pontuacao === 90 ? gamebackground.style.backgroundColor = "#8f94fb" : console.log();
        pontuacao === 90 ? gamebackground.style.boxShadow = "none" : console.log();
        pontuacao === 90 ? gamebackground.classList.remove('GameSpinAnimate') : console.log();
        pontuacao === 90 ? gamebackground.style.backgroundColor = "rgb(32, 32, 32)" : console.log();
    }
    if(pontuacao > 90 && pontuacao <=100){
        pontuacao === 91 ? txtp.innerHTML = "A essencia da Vida" : console.log();
        pontuacao === 91 ? gamebackground.style.backgroundColor = "rgb(28, 28, 28)" : console.log();
        pontuacao === 92 ? txtp.innerHTML = "Por isso" : console.log();
        pontuacao === 92 ? gamebackground.style.backgroundColor = "rgb(24, 24, 24)" : console.log();
        pontuacao === 93 ? txtp.innerHTML = "Não importa" : console.log();
        pontuacao === 93 ? gamebackground.style.backgroundColor = "rgb(20, 20, 20)" : console.log();
        pontuacao === 94 ? txtp.innerHTML = "O que realmente queiram" : console.log();
        pontuacao === 94 ? gamebackground.style.backgroundColor = "rgb(16, 16, 16)" : console.log();
        pontuacao === 95 ? txtp.innerHTML = "O importe é que" : console.log();
        pontuacao === 95 ? gamebackground.style.backgroundColor = "rgb(10, 10, 10)" : console.log();
        pontuacao === 96 ? txtp.innerHTML = "Querem que seja assim" : console.log();
        pontuacao === 96 ? gamebackground.style.backgroundColor = "rgb(8, 8, 8)" : console.log();
        pontuacao === 97 ? txtp.innerHTML = "Desde que aceite<br>O que voçe é" : console.log();
        pontuacao === 97 ? gamebackground.style.backgroundColor = "rgb(4, 4, 4)" : console.log();
        pontuacao === 98 ? txtp.innerHTML = "Não sofrerá tanto" : console.log();
        pontuacao === 98 ? gamebackground.style.backgroundColor = "rgb(2, 2, 2)" : console.log();
        pontuacao === 99 ? txtp.innerHTML = "Ja descobriu?" : console.log();
        pontuacao === 100 ? controle.style.display = "none" : console.log();
        pontuacao === 100 ? FinalCompleto() : console.log();
    }
}

const destruirFruta = () =>{
    Fruta.remove();
    pontuacao++;
    score.innerHTML = "Score " + pontuacao;
    score.innerHTML > 10 ? moverInimigo() : console.log();
    GerarFruta();
    Verificavitoria();
    AtualizaTexto();
}

const movercima = () =>{
    if(FimJogo !== true){
        y > 0 ? y-=1 : console.log();
        player.classList.add('subir');
        setTimeout(() => {
            player.classList.remove('subir');
        }, 50)
        updatePosicao();
    }
}

const moverbaixo = () =>{
    if(FimJogo !== true){
        y < 9 ? y+=1 : console.log();
        player.classList.add('descer');
        setTimeout(() => {
            player.classList.remove('descer');
        }, 50)
        updatePosicao();
    } 
}

const moveresquerda = () =>{
    if(FimJogo !== true){
        x > 0 ? x-=1 : console.log();
        player.classList.add('esquerda');
        setTimeout(() => {
            player.classList.remove('esquerda');
        }, 50)
        updatePosicao();
    }
}

const moverdireita = () =>{
    if(FimJogo !== true){
        x < 9 ? x+=1 : console.log();
        player.classList.add('direita');
        setTimeout(() => {
            player.classList.remove('direita');
        }, 50)
        updatePosicao();
    }
}

const ReiniciarGame = () =>{
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
    if (y === (iy / 30) + 1 && x === ix / 30 && inimigo.style.visibility === "visible"){
        fim.innerHTML = `Fim de Jogo<br>Score ${pontuacao}`;
        fim.style.display = "block";
        FimJogo = true;
        document.querySelector(".Reiniciar").style.display = "block";
        txtp.style.visibility = "hidden";
        sndMorte.play();
    }
}

const moverInimigo = () =>{
    pontuacao === 3 ? inimigo.style.visibility = "visible" : console.log();
    if(pontuacao > 3){
        ix = parseInt( inimigo.style.left.replace(/"px"/g, ""));
        iy = parseInt( inimigo.style.top.replace(/"px"/g, ""));
        let valorRandom = parseInt(Math.random() * 4);
        if( valorRandom === 0){
            x > ix / 30 ? inimigo.style.left = ( ix + 30) + "px" : console.log();
            x < ix / 30 ? inimigo.style.left = ( ix - 30) + "px" : console.log();
            y < (iy / 30) + 1 ? inimigo.style.top = ( iy - 30) + "px" : console.log();
            y > (iy / 30) + 1 ? inimigo.style.top = ( iy + 30) + "px" : console.log();
            ix = parseInt( inimigo.style.left.replace(/"px"/g, ""));
            iy = parseInt( inimigo.style.top.replace(/"px"/g, ""));
            verificarMorte();
        }
    }
}

const updatePosicao = () =>{
    player.style.top = (y * 30) + "px";
    player.style.left = (x * 30) + "px";
    moverInimigo();
    verificarFruta();
    verificarMorte();
}

const verificarFruta = () =>{
    let px = player.getBoundingClientRect().x;
    let py = player.getBoundingClientRect().y;
    let fx = Fruta.getBoundingClientRect().x;
    let fy = Fruta.getBoundingClientRect().y;
    px == fx && py == fy ? destruirFruta() : console.log();
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