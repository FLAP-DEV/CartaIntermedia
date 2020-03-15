// La funcion $() sirve para acceder a elementos HTML en Javascript

/*
Pedir el nombre de la materia
Listar los dias de la semana Enter para pasar al siguiente dia o escribimos los horarios 
 --> Hora de Inicio 6
 --> Hora Terminada 22 
 no se manejar pm ni am 
 Se imprimira una tabla en la que las columanas señalen los dias y las filas las horas 
 tendran un rango de lunes a viernes y de 7 a 20 horas y el nombre de la materia en la posicion 
 Dia, hora señalada
*/

/*
Una vez se termine de ingresar los datos cada materia se tratara como una estructura que tendra dos 
conbinaciones se empezara a agregar primero la materia cuyo indice de filas sea el mas pequeño de todos
este indice se ingresara por el usuario en forma de horas la idea esque con truty y folsis se pueda contar el
numero de HORAS HUECAS por dia, al mismo tiempo se creara otro arreglo que empieze con la segunda materia con el 
menor numero de filas y columnas y contaremos las horas por dia, se comparara las horas huecas de cada  dia y se 
decidira conservar el horario mas optimo segun una relacion  predefinida

es decir puedo tener horas seguidas todos los dias pero no es practico tener un dia con dos clases una en la mañana
y la otra en la noche es necesario cuantificar un resultado final que indique que opcion tomar segun estos parametros 
que tendran un grado de importancia mas elevado dependiendo el numero de horas huecas seguidas en el mismo dia

Pasos

1.crear un arreglo que almacene todas las estructuras 
2.el usuario nos facilitara las filas y columnas de plantilla sin saberlo al ingresar las horas correspondientes 
a cada materia


*/


import * as prompts from 'prompts';
import {materia} from './interfaces/materia'

async function Principal(){

/*
const Plantilla = [  ['Horario','   Lunes  ','  Martes ' ,'Miercoles ','  Jueves  ',  'Viernes '],
                     ['7 a 8'  ,'Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                     ['8 a 9'  ,'Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                     ['9 a 10' ,'Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                     ['10 a 11','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                     ['11 a 12','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                     ['12 a 13','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                     ['13 a 14','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                     ['14 a 15','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                     ['15 a 16','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                     ['17 a 18','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                     ['18 a 19','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre'],
                     ['19 a 20','Hora libre','Hora libre','Hora libre','Hora libre','Hora libre']  
                  ]


Plantilla.forEach(

    function(valorActual){

        console.log(valorActual);

    }
);
*/



const ListadeMateriasIngresadas: materia[] = [];



async function CreandoMateria(){

   let NoEsEntero;
   let NoEstaEnHorarioPermitido;
   let opcionInvalida;

    const nombreMateria = await prompts({
          type: "string",
          name: "Materia",
          message: "Dame el nombre de la Materia que deseas Ingresar "
    });





    do{
        const FilaMateria = await prompts({
           type: "number",
           name: "Dia",
           message: "'Selecciona el dia de clases' \n Lunes --> 1 \n Martes --> 2 \n Miercoles --> 3 \n Jueves --> 4 \n Viernes --> 5"
        });

        NoEsEntero = Math.floor(FilaMateria.Dia) != FilaMateria.Dia;
        opcionInvalida = FilaMateria.Dia < 1 || FilaMateria.Dia > 5;

    }while(NoEsEntero || opcionInvalida);
    
    do{
      const ColumnaMateria = await prompts({
        type: "number",
        name: "HoradeInicio",
        message: "Hora de Inicio: " 
      },
      {
        type:"number",
        name: "HoradeSalida",
        message: "Hora de Salida: "
      });

      const NoEnteroHoradeInicio = Math.floor(ColumnaMateria[0].HoradeInicio) != ColumnaMateria[0].HoradeInicio; 
      const NoEnteroHoradeSalida = Math.floor(ColumnaMateria[1].HoradeSalida) != ColumnaMateria[1].HoradeSalida; 
      const FueradeRangoHoradeInicio = ColumnaMateria[0].HoradeInicio < 7 || ColumnaMateria[1].HoradeInicio > 20;
      const FueradeRangoHoradeSalida = ColumnaMateria[1].HoradeSalida < 7 || ColumnaMateria[1].HoradeSalida > 20;
      const InicioDudoso = ColumnaMateria[0].HoradeInicio >= ColumnaMateria[1].HoradeSalida;
      NoEsEntero = NoEnteroHoradeInicio ||  NoEnteroHoradeSalida;
      NoEstaEnHorarioPermitido = FueradeRangoHoradeInicio || FueradeRangoHoradeSalida || InicioDudoso 

    }while(NoEsEntero || NoEstaEnHorarioPermitido);

    const MateriaGuardada ={
        
    }

    const MismaMateria = await prompts(
    {
        type: "number",
        name: "NuevoHorarioMismaMateria",
        message: "Existe otro horario disponible para esta materia? \n Si --> 1 \n No --> 0"
    });

switch(MismaMateria.NuevoHorarioMismaMateria){

    case 0:

       IngresarNuevaMateria();
        
    break;

    case 1:

      
       
    break;
}

}

function IngresarNuevaMateria(){
    CreandoMateria();
}

IngresarNuevaMateria();
}
Principal();