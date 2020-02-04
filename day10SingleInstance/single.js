export default class Person{
    static instance = null;
    constructor(name){
        if(Person.instance){
            return Person.instance;
        }
        Person.instance = this;
        this.name = name;
    }
}