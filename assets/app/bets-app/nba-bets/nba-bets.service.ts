
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'


@Injectable()
export class PostsService {

    constructor(private http: Http){}

    getAllGames(){
        return this.http.get('/nbabets')
            .map(res => res.json())
    }

    getPlayedGames(){
        return this.http.get('/nbabets/played')
            .map(res => res.json())
    }

    getPlayingGames(){
        return this.http.get('/nbabets/playing')
            .map(res => res.json())
    }

    getTodayGames(){
        return this.http.get('/nbabets/today')
            .map(res => res.json())
    }
}