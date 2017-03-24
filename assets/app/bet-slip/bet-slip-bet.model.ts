export class bets_slip{

    game?: string;
    team?: string;
    bet?: string;
    result?: string;
    score?: string;
    status? : string;
    slug? : string;
    userId: string;
    betId?: string;

    constructor(game?: string, team?: string, bet?: string, result?: string, score?: string, status?: string, slug?: string, userId?: string, betId?: string) {
        this.game = game;
        this.team = team;
        this.bet = bet;
        this.result = result;
        this.score = score;
        this.status = status;
        this.slug = slug;
        this.userId = userId;
        this.betId = betId;
    }



}