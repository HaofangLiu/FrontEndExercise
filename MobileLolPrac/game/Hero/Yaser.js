import S16610 from "../skills/s16610.js";
import S16620 from "../skills/s16620.js";
import S16630 from "../skills/s16630.js";
import Hero from './Hero.js';

export default class Yaser extends Hero{
    constructor(){
        super('yaser',3000,[new S16610, new S16620, new S16630],[],'301660-08781.png');
        // this.name = 'yaser';
        // this.hp = 3000;
        // this.skills = [new S16610, new S16620, new S16630];
        // this.skins = [];
        // this.icon = '301660-08781.png'
    }
    YaserOnly(){
        console.log('yaser only method');
    }
}