import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  public usersList : User[] = [];
  public dataSource  = new MatTableDataSource();  
  public displayedColumns: string[] = ['id', 'nombre', 'apellido', 'fechaNacimiento', 'identificacion', 'opciones' ];

  public activeLang = 'es';  constructor(
    private translate: TranslateService,
    private userService : UserService
  ) {
    this.translate.setDefaultLang(this.activeLang);
  }
  
  ngOnInit(): void {
    this.getUsers();
  }  
  
  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

  getUsers(){
    this.userService.getUsers()
      .subscribe( ( response : any ) =>{
        this.usersList = response;
        this.dataSource.data = this.usersList;
      });
  }  

  deleteUser( user : User ) {
    this.userService.deleteUse( Number( user.id ))
      .subscribe( ()=> this.getUsers() )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

