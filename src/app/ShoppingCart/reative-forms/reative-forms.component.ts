import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-reative-forms',
  templateUrl: './reative-forms.component.html',
  styleUrls: ['./reative-forms.component.css']
})
export class ReativeFormsComponent implements OnInit {

  constructor() { }

     formRegister = new FormGroup({
         Name: new FormControl(''),
         Password:new FormControl(''),
         Email:new FormControl('')
     })
  ngOnInit(): void {
  }

  resetData(){
    this.formRegister.reset({
      Name:"Ibase",
      Password:'',
      
    })
  }

   updatePartial(){
     this.formRegister.patchValue({
        Name:"Raj Verma",
        Password:''
     })
   }

  getData(){
    console.log(this.formRegister.value.Name)
    console.log(this.formRegister.value.Password)
    console.log(this.formRegister.value.Email)
  }

}
