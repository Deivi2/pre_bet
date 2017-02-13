import {OnInit, Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../nba-bets.service";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {betSlipComponent} from "../../../bet-slip/bet-slip.component";
import {betsDetails} from "./nba-bets-details.model";
import construct = Reflect.construct;


@Component({

    templateUrl: 'nba-bets-details.component.html',
    styleUrls: ['nba-bets-details.component.css']
})

export class nbaBetsDetailsComponent implements OnInit {

    isOn: boolean = false;
    bets: any = [];
    posts: any = [];
    private sub: any;

    constructor(private postsService: PostsService, private route: ActivatedRoute) {
        console.log('bets from details', this.bets);

     //   this.enterBetDetails(this.posts.data,'a', 'b')
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            // Retrieve with Id route param
            this.postsService.getAllGames()
                .subscribe(posts => {
                    this.posts = posts[id];
                });
        });

    };

    ngOnDestroy() {
        // Clean sub to avoid memory leak
        this.sub.unsubscribe();
    }

    setState(): void {
        this.isOn = true
    }


    setWinnerBetForHome(){
        this.enterBetDetails(this.posts.data,'home','winner')
    }
    setWinnerBetForAway(){
        this.enterBetDetails(this.posts.data,'away','winner')
    }
    setResultBetForHome(){
        this.enterBetDetails(this.posts.data,'home','result')
    }
    setResultBetForAway(){
       this.enterBetDetails(this.posts.data,'away','result')
    }


    enterBetDetails(game:string,team:string, bet:string){
        this.bets.push(new betsDetails(
            game,
            team,
            bet
        ))
    }

    selectedBet(betsDetails: betsDetails) {
        console.log('selected bet form emited details class', betsDetails)
    }


}