// Se va a realizar un reproductor de canciones

// Metodos de propiedad


const player = {
    play: function(id1){
       return `Reproduciendo canción ${id1}`
    },
    pause: function(id2){
        return `Pausando canción. ${id2}`
    }
};


player.delete = function(id3){
    return `Eliminando canción... ${id3}`
};

player.list = function(id4){
     return `Creando lista perreadora ${id4}`
};


console.log(player.delete(25));
console.log(player.list(22));
console.log(player.play(1023));
console.log(player.pause(1022));