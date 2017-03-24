import {OnInit, Component, ViewChild} from "@angular/core";
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
    bt1;
    bt2;
    bt3;
    bt4;


    constructor(private postsService: PostsService, private route: ActivatedRoute) {
        console.log('bets from details', this.bets);

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

    setWinnerBetForHome() {
        if (!this.bt1)
            this.enterBetDetails(this.posts.data, this.posts.status, this.posts.slug, this.posts.score, 'home', 'winner');
        this.bt1 = true
    }

    setWinnerBetForAway() {
        if (!this.bt2)
            this.enterBetDetails(this.posts.data,this.posts.status, this.posts.slug,this.posts.score,  'away', 'winner');
        this.bt2 = true
    }

    setResultBetForHome() {
        if (!this.bt3)
            this.enterBetDetails(this.posts.data, this.posts.status, this.posts.slug,this.posts.score,  'home', 'result');
        this.bt3 = true
    }

    setResultBetForAway() {
        if (!this.bt4)
            this.enterBetDetails(this.posts.data, this.posts.status,  this.posts.slug, this.posts.score,  'away', 'result');
        this.bt4 = true
    }


    enterBetDetails(game: string, status: string, slug: string, score: string, team: string, bet: string) {
        this.bets.push(new betsDetails(
            game,
            status,
            slug,
            score,
            team,
            bet
        ))
    }

    selectedBet(betsDetails: betsDetails) {
        console.log('selected bet form emited details class', betsDetails)
    }


}