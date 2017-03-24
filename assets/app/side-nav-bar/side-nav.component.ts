import {Component, OnInit} from "@angular/core";
import {AuthService} from "../auth/auth.service";


@Component({
    selector: 'side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css']
})

export class sideNavComponent implements OnInit{

    private my_Class = "styleOne";

    public imgPath: String;

    private isOn: boolean = false;

    getButtonText(): string {
        return `${ this.isOn ? '>' : '<' }`;
    }
    setState(): void {
        this.toggle_class();
        this.isOn = !this.isOn;
    }
    keepState(state: boolean) {
            this.isOn == state;
    }
    ngOnInit(): void {

    }

    toggle_class(){
        if(this.my_Class=="styleOne"){
            this.my_Class='styleTwo';
        }else{
            this.my_Class='styleOne';
        }
    }

    constructor(private authService: AuthService){}

    isLoggedIn(){
        return this.authService.isLoggedin()
    }

}