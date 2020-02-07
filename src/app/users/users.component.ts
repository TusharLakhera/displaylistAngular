import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { isNull } from 'util';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    DOB: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
    

  }

 // name = new FormControl('');
  onSubmit()
  {
    if(isNull(sessionStorage.getItem('first'))){
      let obj = {'key':[]};
      obj['key'].push(this.profileForm.value);
      sessionStorage.setItem('first',JSON.stringify(obj));
}
else{
      let obj= sessionStorage.getItem('first');
      obj['key'].push(this.profileForm.value);
      sessionStorage.setItem('first',JSON.stringify(obj));
}
 
}

  }
   
  
  

