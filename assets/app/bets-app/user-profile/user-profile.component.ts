import {Component, OnInit} from "@angular/core";
import {bets_slip} from "../../bet-slip/bet-slip-bet.model";
import {betService} from "../../bet-slip/bet.service";
import $ = require("jquery");

@Component({
    selector: 'user-profile-app',
    templateUrl: 'user-profile.component.html',
    styleUrls: ['user-profile.component.css']
})

export class userProfileComponent implements  OnInit{

    bets: bets_slip[];

    constructor(private betService: betService){}

    ngOnInit(): void {
        this.betService.getBet()
            .subscribe(
                (bets: bets_slip[]) =>{
                    this.bets = bets
                }
            );

    }
}