import { SpatialExploration, SpaceMessage } from "../interfaces/interfaces";

abstract class Nave {
    private potency: number;
    private speed: number;
    private weight: number;
    private fuel: number;
    private name: string;

    constructor( potency: number, speed: number, weight: number, fuel: number, name: string ){
        this.potency = potency;
        this.speed = speed;
        this.weight = weight;
        this.fuel = fuel;
        this.name = name;
    }

    setPotencia( potency: number ){
        this.potency = potency;
    }
    getPotencia(){
        return this.potency;
    }
    setSpeed( speed: number ){
        this.speed = speed;
    }
    getSpeed(){
        return this.speed;
    }
    setWeight( weight: number ){
        this.weight = weight;
    }
    getWeight(){
        return this.weight;
    }
    setFuel( fuel: number ){
        this.fuel = fuel;
    }
    getFuel(){
        return this.fuel;
    }
    setName( name: string ){
        this.name = name;
    }
    getName(){
        return this.name;
    }

    abstract fuelLevel(fuel :number): number;
    abstract questProgress(): number;

}


export class Lanzadera extends Nave {
    private height: number;
    private load: number;

    constructor( height: number, load: number, potency: number, speed: number, weight: number, fuel: number, name: string ){
        super( potency, speed, weight, fuel, name )
        this.height = height;
        this.load = load;
    }
    setHeight( height: number ){
        this.height = height;
    }
    getHeight(){
        return this.height;
    }
    setLoad( load: number ){
        this.load = load;
    }
    getLoad(){
        return this.load;
    }

    fuelLevel( fuel: number): number {
        const percent = fuel * 0.5;
        return fuel
    }

    questProgress(): number {
        return 20
    }
}


export class Notripuladas extends Nave implements SpaceMessage {
    private quest: string;
    constructor( quest: string, potency: number, speed: number, weight: number, fuel: number, name: string ){
        super( potency, speed, weight, fuel, name )
        this.quest = quest;
    }
    setQuest( quest: string ){
        this.quest = quest;
    }
    getQuest(){
        return this.quest;
    }
    fuelLevel( fuel: number): number {
        const percent = fuel * 0.5;
        return fuel
    }

    questProgress(): number {
        return 20
    }
    messege(): string {
        return "I never coming back"
    }
}


export class Tripuladas extends Nave implements SpaceMessage{
    private distance: number;
    private personas: number;
    constructor( distance: number, personas: number,  potency: number, speed: number, weight: number, fuel: number, name: string ){
        super( potency, speed, weight, fuel, name )
        this.distance = distance;
        this.personas = personas;
    }
    setDistance( distance: number ){
        this.distance = distance;
    }
    getDistance(){
        return this.distance;
    }
    setPersonas( personas: number ){
        this.personas = personas;
    }
    getPersonas(){
        return this.personas;
    }
    fuelLevel( fuel: number): number {
        const percent = fuel * 0.5;
        return fuel
    }
    questProgress(): number {
        return 20
    }
    messege(): string {
        return "Studing the gravity"
    }
}

export class LanzaderaTripulada extends Lanzadera implements SpatialExploration, SpaceMessage{
    planet: string;
    constructor(planet: string, height: number, load: number, potency: number, speed: number, weight: number, fuel: number, name: string ){
        super( height, load, potency, speed, weight, fuel, name );
        this.planet = planet;
    }

    setPlanet( planet: string ){
        this.planet = planet;
    }
    getSetplanet(){
        return this.planet;
    }

    messege(): string {
        return `traveling to study the surface of ${this.planet}`
    }
}
