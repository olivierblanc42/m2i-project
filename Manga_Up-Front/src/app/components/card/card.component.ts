import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
<div class="place-items-center h-screen">
  <div class="card">
    <img src="https://images.pexels.com/photos/16645682/pexels-photo-16645682/free-photo-of-close-up-of-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />

  </div>
</div>

  `,
  styles: [`
         .card {
           width: 167px;
           height: 300px;
              img{
                width:100%;
                height:100%;
                border-radius: 10px;
                }
              }


      
    `]
})
export class CardComponent {

}
