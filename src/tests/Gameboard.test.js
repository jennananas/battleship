
import Gameboard from "../modules/Gameboard.js";
import Ship from "../modules/Ship.js";

describe('gameboard', () => {
    let gameboard
    let ship

    beforeEach(() => {
       gameboard = new Gameboard()
       gameboard.initializeBoard()
       ship = new Ship("Destroyer", 2)
    })

    it('initialize gameboard', () => {
        expect(gameboard.board[10]).toEqual(0)
    })

    it('place a ship on X', () => {
        expect(gameboard.placeShip("x", 1, ship)).toEqual([1,2])
    })

    it('update board status after X placement', () => {
        gameboard.placeShip("x", 1, ship)
        expect(gameboard.board[2]).toEqual(1)
    })

    it('place a ship on Y', () => {
        expect(gameboard.placeShip("y", 1, ship)).toEqual([1,11])
    })

    it('update board status after Y placement', () => {
        gameboard.placeShip("y", 1, ship)
        expect(gameboard.board[11]).toEqual(1)
    })

    it('place a ship on X and hit a wall', () => {
        expect(() => gameboard.placeShip("x", 10, ship)).toThrow("Wall")
    })

    it('place a ship on Y and hit a wall', () => {
        expect(() => gameboard.placeShip("y", 92, ship)).toThrow("Wall")
    })

    it('place a ship and add it to ships array', () => {
        gameboard.placeShip("y", 1, ship)
        expect(gameboard.ships[0]).toMatchObject(ship)
    })
    it('receive attack and miss', () => {
        gameboard.placeShip("x", 1, ship)
        gameboard.receiveAttack(4)
        expect(gameboard.board[4]).toEqual(3)
    })

    it('receive attack and hit a ship', () => {
        gameboard.placeShip("x", 1, ship)
        gameboard.receiveAttack(1)
        expect(gameboard.board[1]).toEqual(2)
        expect(gameboard.findShip(1).nbHits).toEqual(1)
    })
    
    it('find a ship', () => {
        gameboard.placeShip("x", 1, ship)
        expect(gameboard.findShip(2)).toMatchObject(ship)
    })
    it('finish game if all sunk', () => {
        gameboard.placeShip("x", 1, ship)
        gameboard.receiveAttack(1)
        gameboard.receiveAttack(2)
        expect(gameboard.finishGame()).toBe(true)
    })
    it('game goes on', () => {
        gameboard.placeShip("x", 1, ship)
        gameboard.receiveAttack(1)
        expect(gameboard.finishGame()).toBe(false)
    })

})