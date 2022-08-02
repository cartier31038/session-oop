interface Hero {
    clan: string
    suit: string
    weapon: string
    move(): void
}

abstract class Avenger implements Hero {
    clan: string = 'Avenger'
    abstract suit: string
    abstract weapon: string
    abstract move(): void
}

class Thor extends Avenger {
    suit: string = 'Vahalla Armor'
    weapon: string = 'Storm Breaker'
    move() {
        console.log(`Fly with ${this.weapon}`)
    }
}

class CaptainAmerica extends Avenger {
    clan: string = 'Hydra'
    suit: string = 'American Tight Suit'
    weapon: string = 'Vibranium Shield'
    move() {
        console.log('Run Cap!!')
    }
}

const odinson = new Thor()
console.log(odinson.clan)
odinson.move()
