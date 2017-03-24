import {Component, OnInit} from "@angular/core";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {User} from "../auth.model";
import {FormGroup, FormControl, Validators} from "@angular/forms";


@Component({
    selector: 'login-top-bar',
    templateUrl: 'login-top-bar.component.html',
    styleUrls : ['login-top-bar.component.css']
})

export class loginTopBarComponent implements OnInit{




    myForm: FormGroup;


    constructor(private authService: AuthService, private router: Router){}

    onSubmit() {
        console.log(this.myForm);
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password);

        this.authService.signin(user)
            .subscribe(
                data => {
                    console.log("from front end login.comp",data, ' token ', data.token, ' userId ', data.userId);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    localStorage.setItem('userEmail', data.userEmail);
                  //  console.log('user mail :' , this.userMail);
                    this._userMail = data.userEmail;
                   // this.router.navigateByUrl('/');
                } ,
                error => console.error((error))
            );
        this.myForm.reset();
        this.myForm.reset();
    }

    logOut(){
            this.authService.logout()
    }

    loggedIn(){
        return this.authService.isLoggedin()
    }

    private _userMail = localStorage.getItem('userEmail');
    get userMail(): string {
        return this._userMail;
    }
    set userMail(value: string) {
        this._userMail = value;
    }

    ngOnInit() {

        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required
                //,Validators.pattern('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
            ]),
            password: new FormControl(null, Validators.required),
        });
    }


}