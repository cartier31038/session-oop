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

    class IronMan extends Avenger implements Armor {
        mark = 1
        suit = 'Red Armor Suit'
        weapon = 'Beam'
        private money = 11000000000
        move() {
            console.log('Fly')
        }
        attack() {
            console.log(`Attack with ${this.weapon}`)
        }
        getMoney() {
            return this.money
        }
    }

    class HulkBuster extends IronMan implements Armor {
        mark = 44
        weapon = 'Mega Punch'
        move() {
            console.log('Run & Jump')
        }
    }

    class IronmanMark85 extends IronMan implements Armor {
        mark = 85
        attack() {
            super.attack()
            console.log(`Double attack with ${this.weapon}}}`)
        }
    }

    const mark1 = new IronMan()
    mark1.move()
    mark1.attack()

    const mark44 = new HulkBuster()
    mark44.move()
    mark44.attack()

    const mark85 = new IronmanMark85()
    mark85.move()
    mark85.attack()
}
