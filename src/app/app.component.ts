import { Component, OnInit } from '@angular/core';
//import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import Glide from '@glidejs/glide'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'base';
  public ngOnInit() {
    new Glide('.glide').mount()
  }
}
