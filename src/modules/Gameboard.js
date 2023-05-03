export default function Gameboard(){
    return {
        board: new Object(),
        ships: [],
        initializeBoard: function(){
            for (let i=1; i<101;i++){
                this.board[i] = 0
            }
            return this.board
        }
        ,
        placeShip: function(orientation, firstNode, ship){
            const shipArr = []
            for (let i=0; i<ship.length;i++){
                if (orientation == "x"){
                    if (((firstNode + i) % 10 == 0) && (shipArr.length != ship.length-1)){
                        throw new Error("Wall")
                    } else {
                        shipArr.push(firstNode + i)
                        this.board[firstNode+i] = 1
                    }
                } else {
                    if (firstNode+i*10 > 100) {
                        throw new Error("Wall")
                    } else {
                        shipArr.push(firstNode + i * 10)
                        this.board[firstNode + i * 10] = 1
                    }
                }
            }
            ship.location = shipArr
            this.ships.push(ship)
            return ship.location
        } ,
        /* 0: initial state ; 1: ship placed ; 2:ship hit ; 3: miss */
        receiveAttack: function(location){
            if (this.board[location] == 1){
                this.board[location] = 2
                const hitShip = this.findShip(location)
                hitShip.hit()
            } else {
                this.board[location] = 3
            }
        },
        findShip: function(location){
            return this.ships.find(ship => ship.location.includes(location))
        },
        finishGame: function(){
            return this.ships.every(ship => ship.isSunk())
        }
    
    
    }
}