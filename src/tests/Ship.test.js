import Ship from "../modules/Ship.js";

describe('ship', () => {
    let myCarrier

    beforeEach(() => {
       myCarrier = Ship("Carrier", 5)
    })

    test('create a carrier ship', () => {
        expect(myCarrier.type).toBe("Carrier")
        expect(myCarrier.length).toEqual(5)
    })
    test('is hit', () => {
        myCarrier.hit()
        expect(myCarrier.nbHits).toBe(1)
    })

    test('is sunk', () => {
        myCarrier.nbHits = 5;
        expect(myCarrier.isSunk()).toBe(true)
    })
    test("isn't sunk", () => {
        expect(myCarrier.isSunk()).toBe(false)
    })
})