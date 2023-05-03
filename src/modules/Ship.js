export default function Ship(type, length){
    return {
        type,
        length,
        nbHits:0,
        location: [],
        hit: function(){
            this.nbHits++;
        },
        isSunk: function(){
            return this.length <= this.nbHits
        }
    }
}