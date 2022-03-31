import {
    Entity,
    Column,
    PrimaryColumn
  } from "typeorm";
  
  @Entity()
  export class Location {
    @PrimaryColumn()
    locationName!: string;
  
    @Column()    
    timezoneName!: string;
  
    @Column()
    timezoneAbbr!: string;
  
    @Column()
    utcOffset!: number;
  }