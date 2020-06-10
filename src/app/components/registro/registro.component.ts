import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public user : User = new User();
  constructor( 
    private userService : UserService,
    private router : Router 
  ) { }

  ngOnInit() {
  }

  registerUser(){
    this.userService.addUser( this.user )
      .subscribe( ( response : any ) =>{
        this.router.navigate(['/home'])
      });
  }

}
