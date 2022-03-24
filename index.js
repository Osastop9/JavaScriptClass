class Player{
    constructor(name,country){
    this.name= name;
    this.country= country;
    }
    
    playerInfo(name,country){
    return name + " was born in " + country
    }
}
    
class TennisPlayer extends Player{
        constructor(name,country, age){ 
        super(name);
        super(country)
        this.age = age;
    }
    
    
    
    tennisPLayerInfo(name,country, age){
    return name +" is " + age + " years old and knows how to play tennis."
    }
}