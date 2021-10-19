/*
    ===== Código de TypeScript =====
*/

function sumar(a: number,b: number): number{
    return a+b;
}
let sumarFlecha = (a:number, b:number): number=>(a+b);

const resultado = sumar(20,50);

console.log(resultado)

let multiplicar= (a:number, b?:number, base:number=2): number =>(a*base)

console.log(multiplicar(5,24))


interface PersonajeLOR {
    nombre: string;
    pv: number
    mostarPV: ()=>void;
}


function curar(personaje:PersonajeLOR, curarX: number): void{

    personaje.pv += curarX;

    console.log(personaje);

}

const nuevoPersonaje: PersonajeLOR ={
    nombre: 'Sky',
    pv: 13,
    mostarPV(){
        console.log('Puntos de vida: ', this.pv )
    }
}

curar(nuevoPersonaje,45);
