const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

    // location.has -> trae el fragmento de la url apartir del #. En este caso traería #/1/
    //  .slice(1) -> corta la url y muestra apartir del primer elemento. Aqui '/1/'
    // .split('/') -> separa la cadena en un array y elemina los / quedando así: ['','1','']
        // El [1] trae el elemento en la posicion 1, en este caso seria el id
        
export default getHash;