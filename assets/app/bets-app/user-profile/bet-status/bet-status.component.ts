import {Component, OnInit, Input} from "@angular/core";
import {betService} from "../../../bet-slip/bet.service";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: "bet-status-app",
    templateUrl: "bet-status.component.html",
    styleUrls: ["bet-status.component.css"]
})
export class betStatusComponent implements OnInit{

    constructor(private betService: betService,private route: ActivatedRoute){}

    private sub: any;
    bets : string;
    b : string;
    betsData : any;
    didYouWin: any;
    score : any;
    result : any;
    status: any;

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            // Retrieve with Id route param
            this.betService.getBetStatus(id)
                .subscribe(posts => {
                    this.bets = posts;
                    this.betsData = posts[0];
                    console.log('debug posts.bet: ', posts[0])
                });
        });
    }



    getBet(b: any){
        console.log('try to get : ', b.label);
        this.score = b.score;
        this.status = b.status
    }

    getDataBet(b: any){
      console.log('getBet(): ' , b[0]);
      console.log('bet status', this.status);
      if(this.status == 'closed') {
          if (b.bet == 'result') {
              this.ifResult(this.score, b)
          } else if (b.bet == 'winner') {
              this.ifWinner(this.score, b)
          }
      }else {
          this.didYouWin = 'waiting'
      }
    }


    ifWinner(b: any, bet: any){
        var result: string;
        var away;
        var home;
        var betFor;
        var winner;
        betFor = bet.team;
        result = b;
        var line = b.indexOf('-');
        away = result.substr(0,line);
        home = result.substr(line+1, result.length);
        console.log('awway res ', away);
        console.log('home res ', home);
        if(away > home){
            winner = 'away'
        }
        else if(away < home){
            winner = 'home'
        }
        console.log('debug winner: ' , winner);
        console.log('debug betFor ' , betFor);
        if(winner == betFor){
            this.didYouWin = 'win'
        }
        else if(winner != betFor){
            this.didYouWin = 'lost'

        }
        console.log('didyouwin' , this.didYouWin)
    }



    ifResult(score: any, b: any){
       var whichTeamBetFor;
        var away;
        var home;
        var result: string;
        var yourResult: string;
        result = score;
        yourResult = b.result;
        whichTeamBetFor = b.team;
        console.log('if result team for' , whichTeamBetFor);

        var line = score.indexOf('-');
        away = result.substr(0,line);
        home = result.substr(line+1, result.length);
        console.log('awway res ', away);
        console.log('home res ', home);
        console.log('yourresult ', yourResult);

        if(whichTeamBetFor == 'away'){
            if(away == yourResult){
                this.didYouWin = `win ! away team result is:  ${away}`
            }
            else {
                this.didYouWin = `lose away team result is: ' ${away}`
            }
        }
        if(whichTeamBetFor == 'home'){
            if(home == yourResult){
                this.didYouWin = `win ! home team result is:  ${home}`
            }else{
                this.didYouWin = `lose home team result is:  ${home}`
            }
        }
    }

}