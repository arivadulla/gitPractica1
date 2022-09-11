const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode){
    //Complete with your code
    //Defino una variable para almacenar los datos del pais buscado y retorno el valor encontrado
    var buscar = countries.find(element => element.iso3 == isoCode);
    return buscar;
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language){
    //Complete with your code
    //Defino una variable para almacenar los datos del pais buscado y retorno el valor encontrado
    var buscar = countries.find(element => element.iso3 == isoCode);
    // utilizo la propiedad language del pais para al idioma pasado por parametro
    var traducir = buscar.translations[language];
    return traducir;    

}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){
    //Complete with your code
    //Declaramos las variables auxiliares para recorrer las estructuras de datos.
    var region = [];
    var subregiones = [];
    var aux = 0;
    var cantidad = countries.length;
    //Recorremos y comparamos para determinar si existe coincidencia entre la regiones 
    //y la subregion enviada por parametro.
    while(aux < cantidad) {
        var region = countries[aux].subregion;
        if (region == subregion) {
            //recuperamos y agregamos el nombre de cada pais
            subregiones.push(countries[aux].name);        }
        aux++;
    }
    return subregiones;    
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();