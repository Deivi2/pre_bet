import {Component, OnInit} from "@angular/core";
import {PostsService} from "../nba-bets.service";


@Component({
        selector: 'nba-today-games-app',
        templateUrl: 'nba-today-games.component.html',
        styleUrls: ['nba-today-games.component.css']
})


export class nbaTodayGamesComponent implements OnInit{

    posts: any = [];

    constructor(private postsService: PostsService) {

    }

    ngOnInit(): void {
        this.postsService.getTodayGames()
            .subscribe(posts => {
                this.posts = posts
            })
    }


}