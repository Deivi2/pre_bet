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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {betSlipHolderComponent} from "./bet-slip/bet-slip-holder/bet-slip-holder.component";
import {searchGamePipe} from "./bets-app/nba-bets/nba-incoming-games/search-game.pipe";
import {userRegisterComponent} from "./auth/register/register.component";
import {AuthService} from "./auth/auth.service";
import {userLogingInComponent} from "./auth/login/login.component";
import {nbaPlayingGamesComponent} from "./bets-app/nba-bets/nba-playing-games/nba-playing-games.component";
import {loginTopBarComponent} from "./auth/login-top-bar/login-top-bar.component";
import {nbaTodayGamesComponent} from "./bets-app/nba-bets/nba-today-games/nba-today-games.component";
import {betService} from "./bet-slip/bet.service";
import {userProfileComponent} from "./bets-app/user-profile/user-profile.component";


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
        betSlipHolderComponent,
        searchGamePipe,
        userRegisterComponent,
        userLogingInComponent,
        nbaPlayingGamesComponent,
        loginTopBarComponent,
        nbaTodayGamesComponent,
        userProfileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: [PostsService,AuthService,betService,
        [{provide: LocationStrategy, useClass: HashLocationStrategy}]
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}