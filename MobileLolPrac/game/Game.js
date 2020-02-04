import Player from './Players.js';

import Yaser from "./Hero/Yaser.js";

import Luban from './Hero/Luban.js'

class Game{
    constructor(){
        this.player = null;
    }
    login(name){
        this.player = new Player(name);

    }
    //Load hero
    loadHeros(){
        //add the hero
        this.player.heros.push(new Yaser());
        this.player.heros.push(new Luban());
    }
}

let instance = null;
console.log(!instance);
export default function(...arg){
    if(!instance){
        instance = new Game(...arg);
    }
    return instance;
}
