import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[] = [
   
    {id:1,playingDate:new Date(2021,8,10),HomeTeam: 'Real Madrid',
    AwayTeam:'Barcelona',HomeScore:1,AwayScore:3,
    RefName:'Budi',notes:'Pertandingan Overtime'},
    {id:2,playingDate:new Date(2021,8,11),HomeTeam: 'Atletico Madrid',
    AwayTeam:'Espanyol',HomeScore:4,AwayScore:2,
    RefName:'Anjayani',notes:'Pertandingan ngelek'},
    {id:3,playingDate:new Date(2021,8,13),HomeTeam: 'Real Madrid',
    AwayTeam:'Atletico Madrid',HomeScore:2,AwayScore:4,
    RefName:'Parto',notes:'Pertandingan ada kerusuhan'},
    {id:4,playingDate:new Date(2021,8,14),HomeTeam: 'Barcelona',
    AwayTeam:'Valencia',HomeScore:2,AwayScore:4,
    RefName:'Parto',notes:'Pertandingan 3 kartu merah'},
    {id:5,playingDate:new Date(2021,8,15),HomeTeam: 'Valencia',
    AwayTeam:'Villareal',HomeScore:2,AwayScore:3,
    RefName:'Parno',notes:'Pertandingan aman'},
]

export const TEAMS:Team [] = [
    {id:1,name:'Barclona',type:'Over 30'},
    {id:2,name:'Real Madrid',type:'Over 30'},
    {id:3,name:'Atletico Madrid',type:'Over 30'},
    {id:4,name:'Valencia',type:'Over 30'},
    {id:5,name:'Villareal',type:'Over 30'},
    {id:6,name:'Espanyol',type:'Over 30'},
]