import {Component, OnInit, ElementRef, Directive} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {PostsService} from "../nba-bets.service";

@Component({
    selector: 'nba-incoming-games',
    templateUrl: 'nba-incoming-games.component.html',
    styleUrls: ['nba-incoming-games.component.css']
})


export class nbaIncomeingGamesComponent implements OnInit {

    posts: any = [];

    constructor(private postsService: PostsService) {

    }

    ngOnInit(): void {
        this.postsService.getAllGames()
            .subscribe(posts => {
                this.posts = posts
            })

    }

}