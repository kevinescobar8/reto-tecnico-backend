 export class NaveEspacial {
    private name: string;
    private weight: number;
    private load: number;
    private height: number;
    private potency: number;
    private passengers: number;
    private quest: string;
    private fuel: string;

    constructor(name: string, weight: number, load: number, height: number, potency: number, passengers: number, quest: string, fuel: string){
        this.name = name;
        this.weight = weight;
        this.load = load;
        this.height = height;
        this.potency = potency;
        this.passengers = passengers;
        this.quest = quest;
        this.fuel = fuel;
    }
    
    getName(){
        return this.name;
    }
    setName(name: string){
        this.name = name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight: number){
        this.weight = weight;
    }
    getLoad(){
        return this.load;
    }
    setLoad(load: number){
        this.load = load;
    }
    getHeight(){
        return this.height;
    }
    setHeight(height: number){
        this.height = height;
    }
    getPotency(){
        return this.potency;
    }
    setPotency(potency: number){
        this.potency = potency;
    }
    getPassengers(){
        return this.passengers;
    }
    setPassengers(passengers: number){
        this.passengers = passengers;
    }
    getQuest(){
        return this.quest;
    }
    setQuest(quest: string){
        this.quest = quest;
    }
    getFuel(){
        return this.fuel;
    }
    setFuel(fuel: string){
        this.fuel = fuel
    }
    tipoNave(passengers: number , weight: number): string {
        if(passengers>0){
            if(weight>70 && passengers>2){
                return 'Estacion Espacial'
            }
            else{
                return 'Lanzadera'
            }
        }
        else{
            return 'No tripulada'
        }
    }
}
