const fs = require('fs');
//ruta donde estan los archivos
var rutaOrdenados = "src/Archivos Ordenados"
var rutaDesordenados = "src/Archivos Desordenados"
//ruta donde se van a mover
const rutaImagenes = `${rutaOrdenados}/Imagenes`
const rutaMusica = `${rutaOrdenados}/Musica`
const rutaProgramas = `${rutaOrdenados}/Programas`
const rutaDocumentos = `${rutaOrdenados}/Documentos`
const rutaComprimidos = `${rutaOrdenados}/Comprimidos`
// //extensiones
const extensionesImagenes = ["png","jpg","gif","tiff","psd","bpm","ai","3gp"];
const extensionesMusica = ["mp3","wav","flac","mpeg-4","aif","aiff"];
const extensionesProgramas = ["lnk","exe"];
const extensionesDocumentos = ["docx","xlsm","pdf","html","ini"];
const extensionesComprimidos = ["7z","zip","rar"];

//creacion de carpetas donde se va a copiar
crearCarpeta(rutaOrdenados);
crearCarpeta(rutaDesordenados);
crearCarpeta(rutaImagenes);
crearCarpeta(rutaMusica);
crearCarpeta(rutaProgramas);
crearCarpeta(rutaDocumentos);
crearCarpeta(rutaComprimidos);

//lectura de la carpeta de archivos
const files = fs.readdirSync(rutaDesordenados)
files.forEach(file => {
    moverArchivo(file);
});
function crearCarpeta(path){
    if(!fs.existsSync(path)){
        fs.mkdirSync(path);
    }
}

function moverArchivo(file){
    let extension = file.slice(file.indexOf(".")+1,file.length); //obtengo la extension
    //valido la extension y muevo el archivo a la carpeta correspondiente
    if(extensionesImagenes.includes(extension)){
        fs.renameSync(`${rutaDesordenados}/${file}`,`${rutaImagenes}/${file}`);
    }else if(extensionesMusica.includes(extension)){
        fs.renameSync(`${rutaDesordenados}/${file}`,`${rutaMusica}/${file}`);
    }else if(extensionesProgramas.includes(extension)){
        fs.renameSync(`${rutaDesordenados}/${file}`,`${rutaProgramas}/${file}`);
    }else if(extensionesDocumentos.includes(extension)){
        fs.renameSync(`${rutaDesordenados}/${file}`,`${rutaDocumentos}/${file}`);
    }else if(extensionesComprimidos.includes(extension)){
        fs.renameSync(`${rutaDesordenados}/${file}`,`${rutaComprimidos}/${file}`);
    }
}
