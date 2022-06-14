
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


const getEmpleado = ( id ) => {

    return promesa = new Promise( ( resolve, reject ) => {
        const empleado = empleados.find( e => e.id === id)?.nombre;

        ( empleado )
            ? resolve( empleado )
            : reject(`No existe empleado con id ${ id }`);

    });

}

const getSalario = ( id ) => {

    return promesa = new Promise(( resolve, reject) => {

        const salario = salarios.find( s => s.id === id )?.salario;

        ( salario )
            ? resolve( salario )
            : reject(`No existe salario para el id ${ id }`);

    });
}

const id = 3;

const getInfoEmpleado = async ( id ) => {

    try {
        const empleado = await getEmpleado( id );
        const salario  = await getSalario( id );
    
        return `Empleado: ${ empleado }, salario: ${ salario }`;

    } catch( err ){
        throw err;
    }

}

getInfoEmpleado( id )
    .then( msg => console.log( msg ) )
    .catch( err => console.log( err ) );