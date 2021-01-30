new Vue ({
    el: "#vm",
    data:{
        imagen: 'http://lorempixel.com/300/200/',
        texto: "<em>Bienvenido al curso de Vue.js 2!</em>",
        mostrar: false,
        parrafo: 4,
        paises:['Mexico', 'España', 'Colombia'],
        empleado:{
            nombre: 'carlos castro',
            edad: '30 años',
            nacionalidad: 'Mexicano',
            profesion: 'programador',
            empresa: 'IBM',
            telefono: '1234567890'
        }
    }
})