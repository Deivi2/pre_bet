import {Routes} from "@angular/router";
import {betsComponent} from "./nba-bets.component";
import {nbaBetsDetailsComponent} from "./nba-bets-details/nba-bets-details.component";
import {nbaPlayedGamesComponent} from "./nba-played-games/nba-played-games.component";
import {nbaIncomeingGamesComponent} from "./nba-incoming-games/nba-incoming-games.component";



export const  nbaRoutes : Routes = [

    { path: 'nbabets', component: betsComponent,
        children: [
            { path: 'played', component: nbaPlayedGamesComponent }, // url: about/
            { path: 'incoming', component: nbaIncomeingGamesComponent } // url: about/item
        ]
    },
    { path: 'nbabets/:id', component: nbaBetsDetailsComponent }

];