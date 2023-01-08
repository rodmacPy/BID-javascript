class Ninja{
    constructor(nombre,salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3
    }
    sayName(){
        console.log(this.nombre);
    }
    showStats(){
        console.log(`El ninja ${this.nombre} tiene de fuerza ${this.fuerza}, una velocidad de ${this.velocidad} y su salud es ${this.salud}`);
    }
    drinkSake(){
        this.salud +=10;
        console.log(`El Ninja ${this.nombre} aumento 10 de salud`);
    }
}
const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();