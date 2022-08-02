namespace Encapsulation {
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

    abstract class SorcererSupreme extends Avenger {
        public suit = 'Cloak of Levitation'
        public weapon = 'Magic'
        protected infinityStone = 'Time Stone'
        public move() {
            console.log('Levitate')
        }
    }

    class DoctorStrange extends SorcererSupreme {
        public timeTravel() {
            console.log(`Time travel by ${this.infinityStone}`)
        }
    }

    const strange = new DoctorStrange()
    strange.timeTravel()
}
