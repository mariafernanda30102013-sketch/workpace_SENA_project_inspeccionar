import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import indexRoutes from './routes/index.js'
import authRoutes from './routes/autenticacion.js'

const app = express()

// Ruta absoluta
const __dirname = dirname(fileURLToPath (import.meta.url))
console.log(join(__dirname, '/views'))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 1. PRIMERO: Middlewares para leer datos del formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 2. SEGUNDO: Carpeta pública para archivos estáticos (CSS, imágenes)
app.use(express.static(join(__dirname, 'public')))

// 3. TERCERO: Usar las rutas de la aplicación
app.use(indexRoutes)
app.use(authRoutes)

// 4. CUARTO: Iniciar el servidor
app.listen(3000)
console.log('Hola Mundo')
console.log('El servidor esta escuchando el puerto ', 3000);


// ejercicio de objetos en nodejs
//ejercicio 1

const macbook = {
    marca: "apple",
    modelo: "MACBOOK PRO",
    procesador: "M4 PRO",
    almacenamiento: "1TB SSD",
    ram: "24bg",
    color: " rojo",
    precio: "700.000",
    disponibilidad: "true",

    mostrarInformacionn: function () {
        console.log("INFORMACION ACERCA DE MARCBOOK")
        console.log("modelo:", this.modelo)
        console.log("procesador:", this.procesador)
        console.log("almacenamiento:", this.almacenamiento)
        console.log("color", this.color)
        console.log("precio:", this.precio)
        console.log("ram:", this.ram)
        console.log("disponibilidad:", this.disponibilidad)

    }

}
macbook.mostrarInformacionn()

//  2. Objeto de un automóvil

const automovil = {
    marca: "toyota",
    modelo: "corolla",
    año: "2024",
    color: "azul",
    motor: "2.0l",
    kilometraje: "17.000",

    encender: function () {
        console.log("El auto esta encendido");

    },

    mostrarInformacion: function () {
        console.log("***INFORMACION ACERCA DE automovil***")

        console.log("marca:", this.marca),
            console.log("modelo:", this.modelo),
            console.log("año:", this.año),
            console.log("motor:", this.motor),
            console.log("kilometraje:", this.kilometraje)
    }
};

//ejecuta los metodos

automovil.encender();
automovil.mostrarInformacion();

// ejercicio 3 Objeto de un estudiante

const estudiante = {
    nombre: "juan manuel",
    edad: "18",
    programa: "tecnologo en analisis y desarrollo ",
    ficha: 853487,
    nota1: 5.0,
    nota2: 3.5,
    nota3: 4.0,

    calcularpromedio: function () {
        let promedio = (this.nota1 + this.nota2 + this.nota3) / 3;
        console.log("El promedio del estudiante es:", promedio);
    }

};
estudiante.calcularpromedio();

// ejercicio 4. Objeto de una cuenta bancaria

const cuenta_bancaria = {
    titular: "Maria Fernanda Fuentes",
    numerocuenta: 356535336,
    saldo: 2.500000,
    tipocuenta: "ahorros",

    depositar: function (cantidad) {
        this.saldo = this.saldo - cantidad;
        console.log("deposito: $" + cantidad),
            console.log("nuevo saldo: $ " + this.saldo);
    },

    retirar: function (cantidad) {
        this.saldo = this.saldo - cantidad;
        console.log("deposito: $" + cantidad),
            console.log("nuevo saldo: $ " + this.saldo);
    },

    mostrarSaldo: function () {
        console.log("titular:", this.titular);
        console.log(" saldo inicial: $ " + this.saldo);
    },

};

cuenta_bancaria.mostrarSaldo();
cuenta_bancaria.depositar(200000);
cuenta_bancaria.retirar(100000);


//ejercicio 5 

const mascota = {
    nombre: "Alma",
    especie: "perro",
    raza: "criolla ",
    edad: "6 años",
    color: "cafe con blanco",

    comer: function () {
        console.log("Alma esta comiendo");
    },
    jugar: function () {
        console.log("Alma esta jugando");
    }
};

// mostrar la informacion de la mascota
console.log("INFORMACION DE LA MASCOTA");
console.log("nombre:", mascota.nombre);
console.log("especie:", mascota.especie);
console.log("raza:", mascota.raza);
console.log("edad:", mascota.edad);
console.log("color:", mascota.color);

//ejecutar metodos

mascota.comer();
mascota.jugar();

