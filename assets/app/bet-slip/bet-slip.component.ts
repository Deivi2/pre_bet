import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";



@Component({
    selector: 'bet-slip',
    templateUrl: './bet-slip.component.html',
    styleUrls: ['./bet-slip.component.css']
})



export class betSlipComponent implements OnInit{

    @Input() bets: any = [];

    getGame: string;
    getBet: string;
    getTeam: string;

    constructor(){
    }

    ngOnInit(): void {
       this.getGame = this.bets.game.replace(/\"/g, "");
       this.getBet = this.bets.bet.replace(/\"/g, "");
       this.getTeam = this.bets.team.replace(/\"/g, "");
       console.log('Input from other cmp' , this.bets);



    }





}