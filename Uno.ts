import { trebolIzq, trebolDer } from "./trebol";

const trebolUno = trebolDer("");
const trebolDos = trebolIzq("");


export function Uno(firstName: string) {
    return firstName + ('**********************\n'+trebolDos+'*       ******       *\n*      *******       *\n*     ********       *\n*    **** ****       *\n*   ****  ****       *\n*  ****   ****       *\n*         ****       *\n*         ****       *\n*         ****       *\n*         ****       *' + trebolUno + ('**********************'));
    }

export function Dos(firstName: string) {
    return firstName + ('**********************\n'+trebolDos+'*       *****       *\n*      ******       *\n*     *******       *\n*    **** ****       *\n*   ****  ****       *\n*  ****   ****       *\n*         ****       *\n*         ****       *\n*         ****       *\n*         ****       *' + trebolUno + ('**********************'));
    }