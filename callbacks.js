
console.clear();


const getUsuarioByID = ( id, callback ) => {
    const user = {
        id, 
        nombre: 'Carlos'
    }

    setTimeout( () => {
        callback( user );
    },2000);
}

getUsuarioByID( 1, ({ id, nombre }) => {
    console.log( id, nombre );
});














// const getUsuarioByID = ( id, callback ) => {

//     const user = {
//         id,
//         nombre: 'Carlos'
//     }

//     setTimeout( () => {
//         callback( user );
//     }, 1500);
// }

// getUsuarioByID( 10, ({ id, nombre }) => {
//     console.log(id);
//     console.log(nombre);
// });

 

