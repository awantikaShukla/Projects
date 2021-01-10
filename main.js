var cont = document.getElementById("div_bars");
let divs = []
cont.style = "flex-direction:row";
function createArray() {
    for (var i = 0; i < 3; i++) {
        // div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " margin:0% " + margin_size + "%; background-color:blue; width:" + 50 + "%; height:";
    }

}
