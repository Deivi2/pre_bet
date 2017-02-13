import {Component, OnInit, ElementRef, Directive} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {PostsService} from "./nba-bets.service";

@Component({
    selector: 'nba-bets-app',
    templateUrl: 'nba-bets.component.html',
    styleUrls: ['nba-bets.component.css']
})


export class betsComponent implements OnInit {

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