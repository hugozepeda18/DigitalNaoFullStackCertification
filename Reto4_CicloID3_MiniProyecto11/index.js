let miCanvas = document.querySelector('#pizarra');
let lineas = [];
let correccionX = 0;
let correccionY = 0;
let pintarLinea = false;
let nuevaPosicionX = 0;
let nuevaPosicionY = 0;

let posicion = miCanvas.getBoundingClientRect()
correccionX = posicion.x;
correccionY = posicion.y;

miCanvas.width = 1000;
miCanvas.height = 700;

function empezarDibujo () {
    pintarLinea = true;
    lineas.push([]);
};

function guardarLinea() {
    lineas[lineas.length - 1].push({
        x: nuevaPosicionX,
        y: nuevaPosicionY
    });
}

function dibujarLinea (event) {
    event.preventDefault();
    if (pintarLinea) {
        let ctx = miCanvas.getContext('2d')
        ctx.lineJoin = ctx.lineCap = 'round';
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#fff';
        if (event.changedTouches == undefined) {
            nuevaPosicionX = event.layerX;
            nuevaPosicionY = event.layerY;
        } else {
            nuevaPosicionX = event.changedTouches[0].pageX - correccionX;
            nuevaPosicionY = event.changedTouches[0].pageY - correccionY;
        }
        guardarLinea();
        ctx.beginPath();
        lineas.forEach(function (segmento) {
            ctx.moveTo(segmento[0].x, segmento[0].y);
            segmento.forEach(function (punto, index) {
                ctx.lineTo(punto.x, punto.y);
            });
        });
        ctx.stroke();
    }
}

function pararDibujar () {
    pintarLinea = false;
    guardarLinea();
}

miCanvas.addEventListener('mousedown', empezarDibujo, false);
miCanvas.addEventListener('mousemove', dibujarLinea, false);
miCanvas.addEventListener('mouseup', pararDibujar, false);
miCanvas.addEventListener('touchstart', empezarDibujo, false);
miCanvas.addEventListener('touchmove', dibujarLinea, false);

