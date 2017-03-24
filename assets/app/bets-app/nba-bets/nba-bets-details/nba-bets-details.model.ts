export class betsDetails {
    game?: string;
    status?: string;
    slug?: string;
    result? : string;
    score? : string;
    team?: string;
    bet?: string;

    constructor(game?: string, status?: string,slug?: string, score? : string, team?: string, bet?: string) {
        this.game = game;
        this.status = status;
        this.slug = slug;
        this.score = score;
        this.team = team;
        this.bet = bet;

    }
}