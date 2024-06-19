import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
   <nav class="flex   py-3 justify-evenly" >
   <ul class="flex flex-row items-center gap-x-8 ">
    <li><a routerLink="/"><img  src="assets/img/logo.png" alt=""></a></li>
    <li><a class="icon-menu"><img src="assets/svg/ri_bar-chart-horizontal-fill.svg" ></a></li>
    <li><a class="icon-user"><img src="assets/svg/bx_bx-user-check.svg" ></a></li>
    <li><a class="icon-panier"><img src="assets/svg/carbon_shopping-cart-plus.svg" ></a></li>
   </ul>
   </nav>

    <router-outlet />
     <footer class="bg-dark-up py-3 text-white">
        <img class="mx-auto"  src="assets/img/logo.png" alt="">

        <div class="text-center my-6">
            <img class="mx-auto" src="assets/img/stars.png" alt=""> 
            <p class="infos">Score<span> 4.1</span> | <span>1500</span> avis</p>
        </div>

        <div class="text-center my-6"  >
            <ul class="list" >
                <li><h4>Manga’up</h4></li>
                <li><a>Les conditions de vente</a></li>
                <li><a>Politique de confidentialité</a></li>
                <li><a>contact</a></li>
            </ul>
        </div>

        <div class="text-center my-6"  >
            <ul class="list">
                <li><h4>Compte</h4></li>
                <li><a>Créer un compte</a></li>
                <li><a>Se connecter</a></li>
            </ul>
        </div>
        <div class="flex flex-row justify-center gap-4 my-6">
            <a href="https://discord.com/" target="_blank"><img src="assets/icon/discord_mobile.png" alt=""></a> 
            <a href="https://x.com/home" target="_blank"><img src="assets/icon/x_mobile.png" alt=""></a> 
            <a href="https://www.instagram.com/" target="_blank"><img src="assets/icon/insta_mobile.png" alt=""></a>
            <a href="https://www.facebook.com/" target="_blank"><img src="assets/icon/facebook_mobile.png" alt=""></a>
        </div>

     <img class="mx-auto my-6" src="assets/img/android-btn.png" alt=""> 

        <img class="mx-auto my-6"  src="assets/img/line.png" alt="">

        <p class="text-center "  >Copyright © 2024 Manga’up
       <br>Contact, Mention legale - All rights reserved</p>
    </footer>
  `,
  styles: [`

  
    .bg-dark-up{
        background-color: rgb(16, 16, 16,50%);
    }

   .list{
     line-height: 2rem;
    } 

    .list>li>h4{
        font-weight: bolder;
     }

     
`  
  ],
})
export class AppComponent {
  title = 'app';
}
