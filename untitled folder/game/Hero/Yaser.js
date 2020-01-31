import S16610 from "../skills/s16610.js";
import S16620 from "../skills/s16620.js";
import S16630 from "../skills/s16630.js";

export default class Yaser{
    constructor(){
        this.name = 'yaser';
        this.hp = 3000;
        this.skills = [new S16610, new S16620, new S16630];
        this.skins = [];
        this.icon = '301660-08792.png'
    }
}