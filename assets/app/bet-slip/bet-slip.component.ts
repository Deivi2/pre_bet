import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {bets_slip} from "./bet-slip-bet.model";
import {betService} from "./bet.service";



@Component({
    selector: 'bet-slip',
    templateUrl: './bet-slip.component.html',
    styleUrls: ['./bet-slip.component.css']
})



export class betSlipComponent implements OnInit{

    @Input() bets: any = [];
    //@Output() bets_slip: bets_slip;

    bet_slip: bets_slip;

    bet_slip_arr: Array<any> = [];

    getGame: string;
    getBet: string;
    getTeam: string;
    getStatus: string;
    getScore: string;
    getSlug: string;

    constructor(private betService: betService){

    }
    ngOnInit(): void {
       this.getGame = this.bets.game.replace(/\"/g, "");
       this.getBet = this.bets.bet.replace(/\"/g, "");
       this.getTeam = this.bets.team.replace(/\"/g, "");
       this.getStatus = this.bets.status.replace(/\"/g, "");
       this.getScore = this.bets.score.replace(/\"/g, "");
       this.getSlug = this.bets.slug.replace(/\"/g, "");
       console.log('Input from other cmp' , this.bets);
    }

    result: string;

    showResult(result){
        console.log('Input from other cmp result' ,this.result, this.bets);
    }


    submitBet(){
        const bet = new bets_slip(this.getGame, this.getTeam, this.getBet, this.result, this.getScore, this.getStatus, this.getSlug, localStorage.getItem('userId') )
        this.betService.addBet(bet)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );

        console.log('bet obj: ', bet)
    }


    pressed: boolean = false

    buttonPressed(){
        this.pressed = true
    }


    textForResultBet(value: any): Boolean{
        if(value == 'result'){
         return true
        }
    }

}