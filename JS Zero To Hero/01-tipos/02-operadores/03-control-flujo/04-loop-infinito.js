let i = 0;
while (i < 10) {
    console.log(i);
}   i++; // Esto hace que el bucle sea infinito, ya que i nunca se incrementa dentro del bloque del while

console.log('fuera del while'); // Esta línea nunca se ejecutará debido al bucle infinito