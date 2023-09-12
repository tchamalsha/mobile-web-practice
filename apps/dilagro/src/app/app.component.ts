import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppService } from './services/app/app.service';


@Component({
  standalone: true,
  imports: [RouterModule,LoginComponent,MatToolbarModule,CommonModule,MatProgressBarModule],
  selector: 'seng41293-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  constructor(protected appService:AppService){}

}
