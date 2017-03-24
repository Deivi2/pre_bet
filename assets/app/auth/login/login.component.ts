import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {User} from "../auth.model";


@Component({

    selector: 'login-app',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']


})

export class userLogingInComponent implements OnInit{

    myForm: FormGroup;

    constructor(private authService: AuthService, private router: Router){}

    onSubmit() {
        // console.log(this.myForm);
        // const user = new User(
        //     this.myForm.value.email,
        //     this.myForm.value.password);
        //
        // this.authService.signin(user)
        //     .subscribe(
        //         data => {
        //             console.log("from front end login.comp",data, ' token ', data.token, ' userId ', data.userId);
        //             // localStorage.setItem('token', data.token);
        //             localStorage.setItem('userId', data.userId);
        //             this.router.navigateByUrl('/');
        //         } ,
        //         error => console.error((error))
        //     );
        // this.myForm.reset();
        // this.myForm.reset();
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