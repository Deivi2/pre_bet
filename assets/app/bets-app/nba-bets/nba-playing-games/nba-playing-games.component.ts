import {Component, OnInit} from "@angular/core";
import {PostsService} from "../nba-bets.service";
@Component({
    selector: 'nba-playing-games',
    templateUrl: 'nba-playing-games.component.html',
    styleUrls: ['nba-playing-games.component.css']
})
export class nbaPlayingGamesComponent implements OnInit{

    posts: any = [];

    constructor(private postsService: PostsService) {

    }

    ngOnInit(): void {
        this.postsService.getPlayingGames()
            .subscribe(posts => {
                this.posts = posts
            })
    }


}
