import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  formRegister = this.fb.group({
    Name:['',[Validators.required,Validators.minLength(4)]],
    Password:['',[Validators.required,Validators.maxLength(10)]],
    Email:['',[Validators.required,Validators.email]]

  })

  ngOnInit(): void {
  }

}
