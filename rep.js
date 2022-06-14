console.clear();

const employees = [
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
        nombre: 'Kren' 
    }
];

const wages = [ 
    {
        id: 1,
        salary: 1500
    },
    {
        id: 2,
        salary: 2000
    }
];

const id = 1;

const getEmployees = ( id, callback ) => {
    const employee = employees.find( e => e.id === id )?.nombre;
    
    ( employee ) ? callback( null, employee ) : callback(`El empleado con id ${ id } no existe`);
} 

const getWages = ( id, callback ) => {
    const wage =  wages.find( w => w.id === id )?.salary;

    ( wage ) ? callback( null, wage ) : callback(`El salario no existe para el id: ${ id }`);

}

getEmployees( id, ( err, employee ) => {
    if( err ) {
        return console.log(err);
    }
    getWages( id, ( err, salary ) => {
        if( err ){
            return console.log(err);
        } else {
            console.log(`Employee: ${ employee }, salary: ${ salary }`)
        }
    })
});