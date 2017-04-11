import {Component, OnInit} from "@angular/core";
import 'rxjs/Rx';
import {PostsService} from "./nba-bets.service";

@Component({
    selector: 'nba-bets-app',
    templateUrl: 'nba-bets.component.html',
    styleUrls: ['nba-bets.component.css']
})


export class betsComponent implements OnInit {

    posts: any = [];

    constructor() {
    }

    ngOnInit(): void {
    }
}