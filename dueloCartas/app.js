class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
        }else{
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            if (this.stat == "resiliencia") {
                target.res += this.magnitude;
                console.log(this.text)
            }
            else if (this.stat == "poder") {
                target.power += this.magnitude;
                console.log(this.text)
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }

}
const HardAlgo = new Effect("Hard Algorithm", 2, "resilience", 3);

//unit
const cinturonRojo = new Unit("Ninja Cinturón Rojo",3, 3, 4)
const cinturonNegro = new Unit("Ninja Cinturón Negro",4, 5, 4)
//effect
const algoDificil = new Effect("Algoritmo Dificil", 2, "aumentar la resistencia del objetivo en 3", "resiliencia", 3) 
const rechazoPromesa = new Effect("Rechazo de promesa no manejado", 2, "reducir la resistencia del objetivo en 2", "resiliencia", -2)
const programacionPareja = new Effect("Programación en pareja", 3, "aumentar el poder del objetivo en 2", "poder", 2)


console.log(cinturonRojo);
console.log(cinturonNegro);
//turn 1
algoDificil.play(cinturonRojo)

//turn 2

rechazoPromesa.play(cinturonRojo)

//turn 3
programacionPareja.play(cinturonRojo)
cinturonRojo.attack(cinturonNegro)


console.log(cinturonRojo);
console.log(cinturonNegro);