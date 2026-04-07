/**
 * Nombre: ancho x alto
 * 8K 7680
 * Entrada: ancho (número), alto (número)
 * Salida: área del rectángulo (número)
 */
function nombreResolucion(ancho, alto) {
    if (ancho > 7680 && alto > 4320) {
        return "8K";
    } else if (ancho >= 3840 && alto >= 2160) {
        return "4K";
    } else if (ancho >= 2560 && alto >= 1440) {
        return "WQHD";
    } else if (ancho >= 1920 && alto >= 1080) {
        return "Full HD";
    } else if (ancho > 1280 && alto > 720) {
        return "HD";
    } 
}

let nombre = nombreResolucion(1366, 768);
console.log(nombre);
