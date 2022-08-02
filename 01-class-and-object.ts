class Cat {
    breed: string
    emotion: string

    constructor(breed: string) {
        this.breed = breed
    }

    feed(amount: number) {
        console.log(`Feed: ${amount}`)
    }
}

const ส้ม = new Cat('Persia')
ส้ม.feed(2)
