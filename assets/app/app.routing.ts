import {Routes, RouterModule} from "@angular/router";
import {betsComponent} from "./bets-app/nba-bets/nba-bets.component";
import {AppComponent} from "./app.component";
import {nbaRoutes} from "./bets-app/nba-bets/nba-bets.routes";
import {nbaBetsDetailsComponent} from "./bets-app/nba-bets/nba-bets-details/nba-bets-details.component";
import {ModuleWithProviders} from "@angular/core";


const APP_ROUTES: Routes =  [

    ...nbaRoutes
];

export const routing = RouterModule.forRoot(APP_ROUTES);