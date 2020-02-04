import S11210 from "../skills/s11210.js";
import S11220 from "../skills/s11220.js";
import S11230 from "../skills/s11230.js";
import Hero from './Hero.js';

export default class Luban extends Hero{
    constructor(){
        super('luban',2340,[new S11210, new S11220, new S11230],[],'301120-4116.png');
        
        // this.name = 'luban';
        // this.hp = 2340;
        // this.skills = [new S11210, new S11220, new S11230];
        // this.skins = [];
        // this.icon = '301120-4116.png'
    }
    Luban(){
        console.log('luban only method');
    }
}