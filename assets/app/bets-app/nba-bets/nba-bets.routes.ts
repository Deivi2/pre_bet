import {Routes} from "@angular/router";
import {betsComponent} from "./nba-bets.component";
import {nbaBetsDetailsComponent} from "./nba-bets-details/nba-bets-details.component";
import {nbaPlayedGamesComponent} from "./nba-played-games/nba-played-games.component";
import {nbaIncomeingGamesComponent} from "./nba-incoming-games/nba-incoming-games.component";
import {userRegisterComponent} from "../../auth/register/register.component";
import {userLogingInComponent} from "../../auth/login/login.component";
import {nbaPlayingGamesComponent} from "./nba-playing-games/nba-playing-games.component";
import {nbaTodayGamesComponent} from "./nba-today-games/nba-today-games.component";
import {userProfileComponent} from "../user-profile/user-profile.component";
import {betStatusComponent} from "../user-profile/bet-status/bet-status.component";


export const nbaRoutes: Routes = [

    {
        path: 'nbabets', component: betsComponent,
        children: [
            {path: 'played', component: nbaPlayedGamesComponent},
            {path: 'incoming', component: nbaIncomeingGamesComponent},
            {path: 'playing', component: nbaPlayingGamesComponent},
            {path: 'today', component: nbaTodayGamesComponent}
        ]
    },
    {path: 'nbabets/:id', component: nbaBetsDetailsComponent},
    {path: 'user/register', component: userRegisterComponent},
    {path: 'user/login', component: userLogingInComponent},
    {path: 'profile', component: userProfileComponent},
    {path: 'status/game/:id/:id2', component: betStatusComponent}
];
