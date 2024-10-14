const get = (key: any, defaultValue: any) => {
    const value = localStorage.getItem(key) || sessionStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
};

const set = (key: any, value: any, session: boolean = false) => {
    const storage = session ? sessionStorage : localStorage;
    const parsed = JSON.stringify(value);
    //el método setItem() sirve para guardar el valor con la clave dada en el almacenamiento correspondiente.
    storage.setItem(key, parsed);
};

export default {
    get,
    set,
};


// que hace get 
// Objetivo: Recuperar un valor almacenado ya sea en localStorage o sessionStorage.
// Paso a paso:
// Recibe dos parámetros:

// key: La clave con la que se guardó el valor en el almacenamiento.
// defaultValue: Un valor por defecto que será devuelto si no se encuentra ningún valor asociado a la clave dada.
// Primero, intenta obtener el valor de localStorage usando la clave key. Si no hay ningún valor, busca en sessionStorage.

// Si encuentra un valor (value), lo convierte de JSON a un objeto JavaScript usando JSON.parse(), ya que los valores en ambos tipos de almacenamiento se guardan como strings.

// Si no se encuentra ningún valor, devuelve el defaultValue pasado como parámetro.



// ¿Qué hace?
// Objetivo: Guardar un valor en localStorage o sessionStorage.
// Paso a paso:
// Recibe tres parámetros:

// key: La clave bajo la cual se guardará el valor.
// value: El valor que deseas guardar (puede ser cualquier tipo de dato, ya que será convertido a un string).
// session: Un booleano opcional que indica si el valor debe guardarse en sessionStorage (si es true) o en localStorage (si es false o no se especifica).
// Dependiendo del valor de session, selecciona si el almacenamiento será sessionStorage o localStorage.

// Convierte el valor a JSON usando JSON.stringify() para poder almacenarlo como string.

// Usa el método setItem() para guardar el valor con la clave dada en el almacenamiento correspondiente.