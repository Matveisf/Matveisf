function Punto(x, y) {
    this.x = x;
    this. y = y;
    this.dibujar = function() { console.log('Dibujando...'); }
}

let punto = {2: 7};


// Punto.call(punto, 1, 2);
Punto.apply(punto. {1, 2});

console.log(punto);
// const Point = new Function('x'. 'y', `
// this.x = x;
// this.y = y;
// this dinujar = function() { console.log('Dinujando...)}
// `)

// const p = new Point(1, 2);
// console.log(p);
