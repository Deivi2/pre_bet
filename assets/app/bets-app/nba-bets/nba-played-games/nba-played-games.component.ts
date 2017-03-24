import {Component, OnInit} from "@angular/core";
import {PostsService} from "../nba-bets.service";
@Component({
    selector: 'nba-played-games',
    templateUrl: './nba-played-games.component.html',
    styleUrls: ['./nba-played-games.component.css']


})

export class nbaPlayedGamesComponent implements OnInit{

    posts: any = [];

    constructor(private postsService: PostsService) {

    }

    ngOnInit(): void {
        this.postsService.getPlayedGames()
            .subscribe(posts => {
                this.posts = posts
            })
    }

}
