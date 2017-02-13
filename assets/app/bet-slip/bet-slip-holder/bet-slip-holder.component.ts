import {Component, Input, EventEmitter, Output, OnInit} from "@angular/core";


@Component({
    selector: 'bet-slip-holder',
    templateUrl: './bet-slip-holder.component.html',
    styleUrls: ['./bet-slip-holder.component.css']
})


export class betSlipHolderComponent implements OnInit{

    @Input() bets : any = [];

    getGame: string;
    getBet: string;
    getTeam: string;

    constructor(){
    }

    ngOnInit(): void {
        // this.getGame = this.bets.game.replace(/\"/g, "");
        // this.getBet = this.bets.bet.replace(/\"/g, "");
        // this.getTeam = this.bets.team.replace(/\"/g, "");
        console.log('Input from cmp holder' , this.bets);
    }


}