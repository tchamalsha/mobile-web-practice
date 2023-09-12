import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  loading = true;

  toggleLoading(){
    this.loading = !this.loading
  }

  constructor() { }
}
