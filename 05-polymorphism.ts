namespace Inheritance {
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

    interface Armor {
        mark: number
    }

    interface Subweapon {
        subweapon: string
    }

    class IronMan extends Avenger implements Armor, Subweapon {
        name: number
        mark = 1
        suit = 'Red Armor Suit'
        weapon = 'Beam'
        subweapon = 'Rocket'

        move() {
            console.log('Fly')
        }
        attack() {
            console.log(`Attack with ${this.weapon}`)
        }
    }

    class Thor extends Avenger {
        suit: string = 'Vahalla Armor'
        weapon: string = 'Storm Breaker'
        move() {
            console.log(`Fly with ${this.weapon}`)
        }
        warp() {
            console.log('Warp by Bifrost')
        }
    }

    class CaptainAmerica extends Avenger {
        suit: string = 'American Tight Suit'
        weapon: string = 'Vibranium Shield'
        move() {
            console.log('Run Cap!!')
        }
    }

    const odinson = new Thor()
    const steve = new CaptainAmerica()
    const tony = new IronMan()

    const avengers: Avenger[] = [odinson, steve, tony]
    avengers.forEach((hero) => hero.move())
}
