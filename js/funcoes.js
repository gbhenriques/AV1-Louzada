var vetor = new Array(3);
        var i = 0;

        vetor[0] = "img/lol1.jpg";
        vetor[1] = "img/lol2.jpg";
        vetor[2] = "img/lol3.jpg";
        

        function trocar() {
            i++;
            document.getElementById('imagem').src = vetor[i];

            if (i == vetor.length - 1)
                i = -1;
        }
        window.setInterval("trocar()", 3000); {

}

var vetor1 = new Array(3);
        var x = 0;

        vetor1[0] = "img/lor1.jpg";
        vetor1[1] = "img/lor2.jpg";
        vetor1[2] = "img/lor3.jpg";
        

        function trocar1() {
            x++;
            document.getElementById('imagem1').src = vetor1[x];

            if (x == vetor1.length - 1)
                x = -1;
        }
        window.setInterval("trocar1()", 3000); {

}

var vetor2 = new Array(3);
        var y = 0;

        vetor2[0] = "img/valorant1.jpg";
        vetor2[1] = "img/valorant2.jpg";
        vetor2[2] = "img/valorant3.jpg";
        

        function trocar2() {
            y++;
            document.getElementById('imagem2').src = vetor2[y];

            if (y == vetor2.length - 1)
                y = -1;
        }
        window.setInterval("trocar2()", 3000); {

}

function contato() {
    window.alert("Esta página ainda não está pronta, desculpe.")
}
