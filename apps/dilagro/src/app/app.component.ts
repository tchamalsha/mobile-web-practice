import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

@Component({
  standalone: true,
  imports: [RouterModule,LoginComponent,CommonModule],
  selector: 'seng41293-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dilagro';
  name='Tharushi';
  frameworks=['Angular','React','Vue']
}
