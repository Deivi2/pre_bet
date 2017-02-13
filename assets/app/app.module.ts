import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {sideNavComponent} from "./side-nav-bar/side-nav.component";
import {routing} from "./app.routing";
import {betsComponent} from "./bets-app/nba-bets/nba-bets.component";
import {HttpModule} from "@angular/http";
import {PostsService} from "./bets-app/nba-bets/nba-bets.service";
import {nbaBetsDetailsComponent} from "./bets-app/nba-bets/nba-bets-details/nba-bets-details.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {getHomeTeamPipe} from "./bets-app/nba-bets/nba-bets-details/nba-get-home.pipe";
import {getAwayTeamPipe} from "./bets-app/nba-bets/nba-bets-details/nba-get-away.pipe";
import {nbaPlayedGamesComponent} from "./bets-app/nba-bets/nba-played-games/nba-played-games.component";
import {nbaIncomeingGamesComponent} from "./bets-app/nba-bets/nba-incoming-games/nba-incoming-games.component";
import {betSlipComponent} from "./bet-slip/bet-slip.component";
import {FormsModule} from "@angular/forms";
import {betSlipHolderComponent} from "./bet-slip/bet-slip-holder/bet-slip-holder.component";


@NgModule({
    declarations: [
        AppComponent,
        sideNavComponent,
        betsComponent,
        nbaBetsDetailsComponent,
        getHomeTeamPipe,
        getAwayTeamPipe,
        nbaPlayedGamesComponent,
        nbaIncomeingGamesComponent,
        betSlipComponent,
        betSlipHolderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    providers: [PostsService,
        [{provide: LocationStrategy, useClass: HashLocationStrategy}]
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}