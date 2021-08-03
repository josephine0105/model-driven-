import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'attributebinding';
 country=[
   {countrylist:"india"},
   {countrylist:"italy"}
]
user:FormGroup
ngOnInit(){
this.user=new FormGroup({
 'name':new FormControl(null,Validators.required),
 'email':new FormControl(null,[Validators.required,Validators.email]),
 'password':new FormControl(null),
 'gender':new FormControl(null),
 'checkbox':new FormControl(null),
 'address':new FormGroup({ 
  'country':new FormControl(null),
  'city':new FormControl(null),
  'street':new FormControl(null),
  'pincode':new FormControl(null)
  })
});
/*this.user.setValue({
  name:'josephine',
  email:'josephine@gmail.com',
  password:'12345678',
  gender:'female',
  checkbox:true,
  address:{
    country:'india',
    city:'pondy',
    street:'mg road',
    pincode:'660770'
  }
});*/
this.user.patchValue({
name:'josephine'
})
}

onsubmit(){
  console.log(this.user);
  this.user.reset();
}
}
