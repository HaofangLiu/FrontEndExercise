import Player from './Players.js';

import Yaser from "./Hero/Yaser.js";


export default class Game{
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
    }
}

