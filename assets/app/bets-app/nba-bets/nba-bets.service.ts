
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




}