import { Schedule } from "src/interface/schedule";
import { Team } from "src/interface/team";

export const SEASON_SCHEDULE:Schedule [] = [
    {id: 1, PlayingDate: new Date(2021,08,01),HomeTeam:'FUG', 
    AwayTeam:'FUG2', HomeScore:'2', AwayScore:'3',
    RefName:'Ade', notes:'Pertandingan overtime'},
    {id: 2, PlayingDate: new Date(2021,08,01),HomeTeam:'RRQ', 
    AwayTeam:'AE', HomeScore:'2', AwayScore:'0',
    RefName:'Bangsin', notes:'Pertandingan overtime'},
    {id: 3, PlayingDate: new Date(2021,08,01),HomeTeam:'BTR', 
    AwayTeam:'EVOS', HomeScore:'1', AwayScore:'2',
    RefName:'ApTzy', notes:'Pertandingan overtime'},
    {id: 4, PlayingDate: new Date(2021,08,01),HomeTeam:'AURA', 
    AwayTeam:'AE', HomeScore:'2', AwayScore:'1',
    RefName:'AndryTzy', notes:'Pertandingan overtime'},
    {id: 5, PlayingDate: new Date(2021,08,01),HomeTeam:'GEEK', 
    AwayTeam:'NEUS', HomeScore:'2', AwayScore:'0',
    RefName:'MuhammadAnteng', notes:'Pertandingan overtime'},
]

export const TEAMS:Team [] = [
    {id:1, name:'RRQ', type: 'Over 30'},
    {id:2, name:'EVOS', type: 'Over 30'},
    {id:3, name:'AE', type: 'Over 30'},
    {id:4, name:'AURA', type: 'Over 30'},
    {id:5, name:'FUG', type: 'Over 30'},
]