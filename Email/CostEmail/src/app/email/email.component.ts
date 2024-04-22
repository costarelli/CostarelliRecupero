//email.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  @Input() emails: { ogg: string, mit: string, des: string, txt: string, highlighted: boolean }[] = [];
  selectedEmail: { ogg: string, mit: string, des: string, txt: string } = { ogg: '', mit: '', des: '', txt: '' };
  riempiLabels(index: number) {
    this.selectedEmail = this.emails[index];
  }
  toggleHighlight(index: number) {
    this.emails[index].highlighted = !this.emails[index].highlighted;
  }
}
