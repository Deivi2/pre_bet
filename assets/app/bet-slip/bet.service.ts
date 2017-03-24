import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {bets_slip} from "./bet-slip-bet.model";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";
import {Observable} from "rxjs";
@Injectable()

export class betService{

    private bets: bets_slip[] = [];

    constructor(private http: Http){}

    addBet(bet: bets_slip){
        const body = JSON.stringify(bet);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

        return this.http.post('http://localhost:3000/nbabets/:id' + token, body, {headers: headers})
            .map((respone: Response) => {
                const result = respone.json();
                return bet = new bets_slip(
                    result.obj.game,
                    result.obj.team,
                    result.obj.bet,
                    result.obj.result,
                    result.obj.score,
                    result.obj.status,
                    result.obj.slug

                )
            })
            .catch((error: Response) => Observable.throw(error.json()))
    }


    getBet(){
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

        return this.http.get('http://localhost:3000/profile' + token)
            .map((response: Response) => {
            const bets = response.json().bets;
            let transformedMessages: bets_slip[] = [];
            for (let b of bets){
                transformedMessages.push(new bets_slip(
                    b.game,
                    b.team,
                    b.bet,
                    b.result,
                    b.score,
                    b.status,
                    b.slug

                ));
            }
            this.bets = transformedMessages;
                return transformedMessages;
        })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}