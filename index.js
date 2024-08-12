const juegos = [
    { nombre: "The Legend of Zelda", precio: 59.99 },
    { nombre: "Super Mario Odyssey", precio: 49.99 },
    { nombre: "God of War", precio: 39.99 },
    { nombre: "The Witcher 3", precio: 29.99 },
    { nombre: "Red Dead Redemption 2", precio: 69.99 }
];


class Juego {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class TiendaDeJuegos {
    constructor(juegos) {
        this.juegos = juegos.map(juego => new Juego(juego.nombre, juego.precio));
    }
    buscarJuego = (nombreJuego) => {
        return this.juegos.find(juego => juego.nombre.toLowerCase() === nombreJuego.toLowerCase());
    }
    mostrarJuegosDisponibles = () => {
        return this.juegos.map(juego => juego.nombre).join('\n');
    }
    comprarJuego = () => {
        let eleccionDelUsuario = prompt("Ingresa el nombre del juego que quieres comprar:");
            const juego = this.buscarJuego(eleccionDelUsuario);
        if (juego) {
            const precioEnPesos = (juego.precio * 1430).toFixed(2); 
            const confirmarCompra = confirm(`El juego "${juego.nombre}" cuesta $${juego.precio}. ¿Deseas comprarlo?`);
            
            
            alert(`El precio del juego en pesos argentinos es: $${precioEnPesos}`);

            if (confirmarCompra) {
                alert(`Has comprado el juego: ${juego.nombre} por $${juego.precio}`);
            } else {
                alert("Volvamos a introducir el nombre del juego que deseas.");
            }
        } else {
            alert("Juego no encontrado. Intenta de nuevo.");
        }
    }
}




const miTienda = new TiendaDeJuegos(juegos);
alert("Opciones de juegos disponibles:\n" + miTienda.mostrarJuegosDisponibles());
miTienda.comprarJuego();
