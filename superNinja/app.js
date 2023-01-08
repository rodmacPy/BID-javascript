class Ninja{
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3
    }
    sayName(){
        console.log(this.nombre);
    }
    showStats(){
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}`);
    }
    drinkSake(){
        this.salud +=10;
        console.log(`El Ninja ${this.nombre} aumento 10 de salud`);
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.salud = 200;
        this. velocidad = 10;
        this.fuerza = 10;

    }
    speakWisdom(){
        super.drinkSake();
    }
}
// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
