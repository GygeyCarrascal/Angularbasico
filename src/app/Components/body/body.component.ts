import { Component, OnInit } from '@angular/core';
import { PaisesService } from './../../servicios/paisesservices/paises.service';
import { PeruService } from './../../servicios/peruservices/peru.service';
import { PostService } from './../../servicios/postservices/post.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 
  constructor(private paisser:PaisesService,
              private peruser:PeruService,
              private postser:PostService) { }
  
  peru:any;
  pais:any;
  usuario:any;
  mostrarperu=false;  
  mostrarpais=false;

  ngOnInit(){
  this.obtenerUsuario()
  this.obtenerPeru()
  this.obtenerPais()
  }

  
  obtenerUsuario(){
    this.postser.getUsuarios().subscribe(data => {
      this.usuario = data;
      console.log(this.usuario);
    });
  }

  obtenerPeru(){
    if(this.peru==undefined){
      this.peruser.getPeru().subscribe(data => {
        this.peru = data;
      });
    }
  } 

  obtenerPais(){
    if(this.pais==undefined){
      this.paisser.getPais().subscribe(data => {
        this.pais = data;
      });
    }
  }

  clicmostrardatosPeru(){
    this.obtenerPeru()
    this.mostrarpais=false;
    this.mostrarperu=true;
  }

  clicmostrardatosPais(){
    this.obtenerPais()
    this.mostrarpais=true;
    this.mostrarperu=false;
  }

}

