let mensaje: string = "Hola Mundo"

mensaje = "chanchito felis"

mensaje = "chao mundo"
console.log(mensaje)
console.log(typeof [])
/** Tipos de JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * Tipos de TS
 * any "no usarlo"
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 * 
 * Tipos inferidos
 * No es necesario escribir el tipo siempre y cuando se inicialicen las variables
 */

let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = "T-rex"
let extintos = true

function chanchitoFeliz (config: any) {
    return config
}

let animales: string[] = ['chanchito', 'feliz', 'felipe']
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

//nums.map(x => x.) // el autocompletado sugiere métodos del tipo de dato

let tupla: [number, string[]] = [1, ['chanchito felis', 'chanchito felipe']]

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

//PascalCase
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande= 'xl' }

const variable1 = Talla.Grande
console.log(Talla.Grande);

const enum LoadingState { Idle, Loading, Success, Error }

const estado = LoadingState.Success

const objeto: {
    id: number
    nombre?: string
} = { id: 1 }