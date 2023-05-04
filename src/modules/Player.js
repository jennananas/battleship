import Gameboard from "./Gameboard";
import Ship from "./Ship";


export default function Player(name){
    return {
    ships: [["Carrier", 5], ["Battleship", 4], ["Destroyer", 3], ["Submarine", 3], ["Patrol Boat", 2]],
    gameboard : new Gameboard(),
    name,
    attack: function(player, target){
        if (player.gameboard.board[target] == 2 || player.gameboard.board[target] == 3){
            return
        } else {
            player.gameboard.receiveAttack(target)
        }
        
    },
    generateTarget: function(){
        return Math.floor(Math.random()*(100-1)+1)
    }

    

    
    }
}