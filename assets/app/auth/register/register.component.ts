import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "../auth.model";
import {AuthService} from "../auth.service";


@Component({
    selector: 'user-register-app',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class userRegisterComponent implements OnInit{

    myForm: FormGroup;

    constructor(private  authService: AuthService) {
    }

    onSubmit() {
         console.log(this.myForm);
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName
        );
        this.authService.signup(user)
            .subscribe(
                data => console.log("from front end signup.comp",data),
                error => console.error((error))
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required

                //,Validators.pattern('/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/')
            ]),
            password: new FormControl(null, Validators.required),
        });
    }


}
