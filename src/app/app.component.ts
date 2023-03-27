import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'td1ex2';
  text="test test est"
  status=false
  boutonEtat=1
  message=''
  afficherMessage(){
    console.log("mess mess mess")
  }
  utilisateur :any[]=[
    {"nom":"Test", "prenom":"Jean","email":"test@test.fr","tel":"0698131221","age":25}
  ]
  oUtil= { "nom": "", "prenom" :""};
  clickBouton(){
    this.boutonEtat=this.boutonEtat*(-1);

  }
  addUser(){
    this.oUtil.nom=this.message
    this.oUtil.prenom=""
 
    console.log(this.oUtil)
    this.utilisateur.push({"nom":this.message})
    this.utilisateur.push(this.oUtil)
  }
  

  
}
