import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public user : User = new User();

  constructor(
    private userService : UserService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      let id = params['id']
      if(id){
        this.userService.getUserById( id )
          .subscribe( ( user : User ) =>{
            this.user = user;
          })
      }
    })
  }

  updateUser(){
    console.log(' el usuario es', this.user  )
    this.userService.updateUser( this.user )
      .subscribe( ( resp : any ) => this.router.navigate(['/home'])   )
  }



}
