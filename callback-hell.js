
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

const id = 3;

// Busca el empleado en la BD
const getEmpleado = ( id, callback ) => {

    const empleado = empleados.find( e => e.id === id)?.nombre;
    if( empleado ) {
        callback( null, empleado );
    } else {
        callback(`El empleado con id: ${ id } no existe`);
    }
}

// Busca el salario en la BD
const getSalario = ( id, callback ) => {
    
    const salario = salarios.find( s => s.id === id )?.salario;
    if( salario ) {
        callback( null, salario );
    } else {
        callback(`El salario del empleado con id: ${ id } no existe`);
    }
};

getEmpleado( id, (err, empleado ) => {

    if( err ) {
        return console.log( err );
    }

    getSalario( id, ( err, salario ) => {
        if( err ) {
            return console.log( err );
        }
        console.log('Empleado ', empleado, ' salario ', salario);
    });

});

