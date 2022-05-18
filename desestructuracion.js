

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    edad:   50,
    getNombre() {
        return '${ this.nombre } ${ this.apellido } ${ this.poder }';
    }
}

// let { nombre: nombre2, apellido, poder, edad = 0 } = deadpool;
// console.log({ nombre2, apellido, poder, edad });

const imprimeHeroe = ({ nombre, apellido, poder, edad = 0 }) => {
    console.log({ nombre, apellido, poder, edad });
}

// imprimeHeroe( deadpool );

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [ , , h3 ] = heroes;
console.log(  h3 );
