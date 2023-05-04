import Player from "../modules/Player"
import Gameboard from "../modules/Gameboard"
import Ship from "../modules/Ship"

describe('player', () => {
    let player
    let computer
    let ship


    beforeEach(() => {
       player = new Player("Player")
       computer = new Player("Computer")
       player.gameboard.initializeBoard()
       computer.gameboard.initializeBoard()
       ship = new Ship("Destroyer", 2)

    })

    it('create new player', () => {
        expect(player.name).toBe("Player")
    })

    it('Player attack Computer', () => {
        computer.gameboard.placeShip("y", 51, ship)
        player.attack(computer, 51)
        expect(computer.gameboard.board[51]).toEqual(2)
        expect(player.gameboard.board[51]).toEqual(0)
    })

    it('generate random target between 1 to 100', () => {
        expect(computer.generateTarget()).toBeGreaterThanOrEqual(1)
        expect(computer.generateTarget()).toBeLessThanOrEqual(100)
    })

    it('computer attack player', () => {
        const target = computer.generateTarget()
        player.gameboard.placeShip("x", 1, ship)
        computer.attack(player, target)
        expect(player.gameboard.board[target]===2 || player.gameboard.board[target]===3).toBeTruthy()
        expect(computer.gameboard.board[target]).toEqual(0)
    })

})