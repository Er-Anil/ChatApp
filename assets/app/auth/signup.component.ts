import { Component, OnInit } from "@angular/core"
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component ({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
 myForm: FormGroup;

 onSubmit() {
     console.log(this.myForm);
     this.myForm.reset();
 }

    ngOnInit(){
        this.myForm = new FormGroup({
            firstname: new FormControl(null,Validators.required),
            lastname: new FormControl(null,Validators.required),
            email: new FormControl(null,[
                Validators.required,
                Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,5}$")
                
            ]),
            password: new FormControl(null,Validators.required)
        });
    }
}