$('#toggleDarkMode').bootstrapToggle({
    on: '<i class="fas fa-sun light-mode-toggle"></i>',
    off: '<i class="fas fa-moon dark-mode-toggle"></i>'
});
$(document).ready(function(){
    if($('#toggleDarkMode').is(":checked")){
        $("html").toggleClass("light-mode");
    } else {
        $("html").toggleClass("dark-mode");
    }
    
    setInterval(() => {
        mudaCorJs();
    }, 200);
    setInterval(() => {
        opacidade();
    }, 3100);
    setInterval(() => {
        crescendoDiminuindo();
    }, 2000);
    setInterval(() => {
        espacamentoTexto();
    }, 2000);
    
});

$('#toggleDarkMode').on("change", function(){
    
    if($('#toggleDarkMode').is(":checked")){
        $("html").removeClass("dark-mode");
        $("html").toggleClass("light-mode");
        
    } else {
        $("html").removeClass("light-mode");
        $("html").toggleClass("dark-mode");
    }
});

$('.yourBtnClass').on('click', function (){ 
    
    rocketcss(this,'.target','rocketPulse'); 
    $('.target').addClass('targetPulse');
    
    rocketcss(this,'.target2','rocketRotate'); 
    $('.target2').addClass('targetPulse'); 

});

$('.yourBtnClass2').on('click', function (){ 
    
    rocketcss(this,'.target3','rocketGost'); 
    $('.target3').addClass('targetPulse');

    rocketcss(this,'.target4','rocketFlip'); 
    $('.target4').addClass('targetPulse'); 
    
});


function mudaCorJs(){
    let aleatorio = 0;
    let cores = ["#55efc4", "#00b894", "#a29bfe", "#ff7675", "#f0932b", "#686de0", "#badc58", "#d63031"]
        aleatorio = Math.floor(Math.random() * (9 - 0)) + 0
        document.getElementById("mudaCorJs").style.color = ""+cores[aleatorio];
    
}

function moverEsquerdaDireitaJs(direcao){
    if(direcao=="l"){
        $("#animado").animate({marginLeft: -200}, 1500);
        $("#moverEsq").attr("disabled", true);
        $("#moverDir").attr("disabled", false);
    } else if(direcao=="r"){
        $("#animado").animate({marginLeft: 200}, 1500);
        $("#moverEsq").attr("disabled", false);
        $("#moverDir").attr("disabled", true);
    }
    
}
function opacidade(){
        $("#animado2").animate({opacity: 0.2}, 1500, function() {
            $(this).animate({opacity: 1.0}, 1500);
        });
}

function crescendoDiminuindo(){
    $("#animado3").animate({fontSize: 40}, 950, function() {
        $(this).animate({fontSize: 20}, 950);
    });
}

function espacamentoTexto(){
    $("#animado4").animate({letterSpacing: "4pt"}, 950, function() {
        $(this).animate({letterSpacing: "1pt"}, 950);
    });
}