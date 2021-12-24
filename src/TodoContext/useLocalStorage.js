import React from 'react';

//hooks para localstorage

//initialValue = parametro para valor inicial
//itemName = nombre elemento que vamos  a salvar en nustro localstorage

function useLocalStorage(itemName, initialValue) {//recibiendo argumentos

    const [loading, setLoading] = React.useState(true);  // vamos a crear nuestra precarga
    const [error, setError] = React.useState(false);  // error
    //item = estado guardado
    //setItem= metodo para actualizarlo
    const [item, setItem] = React.useState(initialValue);//pasando parametros a mi usestate estara preparado para detectar cambios

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);//llamdo a localstorage para recibir un argumento
                let parsedItem;

                //logica para validar si hay datos en el array del local storage
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));//
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);//sino esta vacio cargo los datos que  hay en el localstorge
                }
                setItem(parsedItem);//actualkizamo el estado
                setLoading(false); // como ya cargo nuestra aplicacion cambiamos el estado
            } catch (error) {
                setItem(error);
            }
        }, 3000);
    });
    // funcion para guardar o actualizar los cambios en mi local storage o en mi hook
    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };
    //informacion de  nuestro estado, si tenemos mas estados debemos cambiar el ARRAY por UN OBEJETO
    // como vemos tenemos mas de dos atributos por eso debemo cambiar los parentesis por los corchetes,
    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export {useLocalStorage}