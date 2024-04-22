import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CostEmail';

  mit: string = '';
  des: string = '';
  ogg: string = '';
  txt: string = '';
  highlighted: boolean=false;
  emails: { ogg: string, mit: string, des: string, txt: string, highlighted: boolean }[] = [];
  showContent: boolean = true;
  showAlert: boolean = false;
  salvaEmail() {
    if (!this.mit || !this.des || !this.ogg || !this.txt) {
      this.showAlert = true; // Mostra l'alert se uno dei campi non è compilato
      return false;
    }

    const email = { ogg: this.ogg, mit: this.mit, des: this.des, txt: this.txt, highlighted:this.highlighted };
    this.emails.push(email);
   
    this.mit = '';
    this.des = '';
    this.ogg = '';
    this.txt = '';
    this.highlighted=false;
    
    this.showAlert = false; 
    return false;
  }
  sContent() {
    this.showContent = true;
  }

  hContent() {
    this.showContent = false;
  }
}