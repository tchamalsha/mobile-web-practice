import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../services/app/app.service';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { ChangeEmail, ShowLoading } from '../../../state/app/app.actions';

@Component({
  selector: 'seng41293-admin-grn',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss']
})
export class AdminGrnComponent {
    @Input ({required : true}) lable! : string;
    @Output() update  = new EventEmitter<string>; 
   
  constructor(private store:Store){} 
  toggleLoading(){
    this.store.dispatch(new ShowLoading(true));
  }
  toggleEmail(){
    this.store.dispatch(new ChangeEmail('thrishi@gmail.com'))
  }
}
