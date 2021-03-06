console.clear();
const empleados = [
    {
        id: 1,
        nombre: 'Carlos'
    },
    {
        id: 2,
        nombre: 'Steeven'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const id = 10;

const getEmpleado = ( id ) => {

    return promesa = new Promise(( resolve, reject) => {

        const empleado = empleados.find( e => e.id === id )?.nombre;

        ( empleado )
            ? resolve( empleado )
            : reject(`No se ha ecnontrado el empleado con id: ${ id }`);

    });
    
}

const getSalario = ( id ) => {

    return promesa = new Promise(( resolve, reject ) => {

        const salario = salarios.find( s => s.id === id )?.salario;

        ( salario )
            ? resolve( salario )
            : reject(`No existe un salario para el id: ${ id }`);

    });
}

// getEmpleado( id )
//     .then( empleado => {
//         getSalario( id )
//             .then( salario => {
//                 console.log(`Empleado: ${ empleado }, salario: ${ salario }`);
//             })
//             .catch( err => console.log( err ) );
//     })
//     .catch( err => console.log( err ) );

//Promesas en cadena

let nombre;
getEmpleado( id )
    .then( empleado => {
        nombre = empleado;
        return getSalario( id );
    })
    .then( salario => console.log( nombre, salario ) )
    .catch( err => console.log( err ) );

