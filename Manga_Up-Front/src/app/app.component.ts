import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
   <nav class="flex   py-3 justify-evenly nav-mobile" >
   <ul class="flex flex-row items-center gap-x-8 ">
    <li><a routerLink="/"><img  src="assets/img/logo.png" alt=""></a></li>
    <li><a class="icon-menu"><img src="assets/svg/ri_bar-chart-horizontal-fill.svg" ></a></li>
    <li><a class="icon-user"><img src="assets/svg/bx_bx-user-check.svg" ></a></li>
    <li><a class="icon-panier"><img src="assets/svg/carbon_shopping-cart-plus.svg" ></a></li>
   </ul>
   </nav>

<nav class="py-3 flex flex-row px-10 justify-around nav-desktop">
      <a routerLink="/"><img  src="assets/img/logo.png" alt=""></a>

    <div class="mb-5 search ">
    <input type="text" id="text" class="" />
    <ul class="flex flex-row justify-around py-1">
      <li ><a class="flex flex-row" href=""><img src="assets/svg/iconoir_book-solid.svg" alt="">Genres</a></li>
      <li><a class="flex flex-row" href=""><img src="assets/svg/new.svg" alt="">News</a></li>
      <li><a class="flex flex-row" href=""><img src="assets/svg/decouverte.svg" >Découverte</a></li>
      
    </ul>
    </div>
    <div class="flex flex-row gap-10">
    <a class="icon-panier"><img src="assets/svg/carbon_shopping-cart-plus.svg" ></a>
    <a class="icon-user"><img src="assets/svg/bx_bx-user-check.svg" ></a>
    </div>
 
</nav>

    <router-outlet />
     <footer class="bg-dark-up py-3 text-white footer-mobile">
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


  <footer class="background-color py-3 flex flex-col px-10 ">

<div class="flex flex-row 	justify-between	"   >
    <div class=" flex flex-col	 justify-between 	">
        <div >
            <img class="mx-auto" src="assets/img/stars.png" alt="">
            <p class="infos">Score<span> 4.1</span> | <span>1500</span> avis</p>
        </div>
        <img class=" inline-block "  src="assets/img/logo.png" alt="">
    </div>


    <div>
     <ul class="list" >
                <li><h4>Manga’up</h4></li>
                <li><a>Les conditions de vente</a></li>
                <li><a>Politique de confidentialité</a></li>
                <li><a>contact</a></li>
            </ul>
    </div>
 


        <div class=" "  >
            <ul class="list">
                <li><h4>Compte</h4></li>
                <li><a>Créer un compte</a></li>
                <li><a>Se connecter</a></li>
            </ul>
        </div>

      <div class=" flex flex-col	 justify-between ">

        <div class=" flex flex-row justify-center gap-4 ">
            <a href="https://discord.com/" target="_blank"><img src="assets/icon/discord_mobile.png" alt=""></a>
            <a href="https://x.com/home" target="_blank"><img src="assets/icon/x_mobile.png" alt=""></a>
            <a href="https://www.instagram.com/" target="_blank"><img src="assets/icon/insta_mobile.png" alt=""></a>
            <a href="https://www.facebook.com/" target="_blank"><img src="assets/icon/facebook_mobile.png" alt=""></a>
        </div>
             <img class="ml-auto " src="assets/img/android-btn.png" alt="">

      </div>

</div>

        <img class="mx-auto my-6"  src="assets/img/line_desktop.png" alt="">


      <p class=" ">Copyright © 2024 Manga’up Contact, Mention legale - All rights reserved</p>
        
  </footer>



  `,
  styles: [`
    

 .nav-desktop{
    display:none;
  }

     input{
      color:black;
     }
    .bg-dark-up{
        background-color: rgb(16, 16, 16,50%);
    }

   .list{
     line-height: 2rem;
    } 

    .list>li>h4{
        font-weight: bolder;
     }

@media (min-width: 1250px) { 

  .footer-mobile{
    display:none;
  }
  .nav-mobile{
   display:none;
  }
 .nav-desktop{
    display:flex;
  }
  .search{
    width:449px;
    input{
      width:100%;
    }
  }

 }
`  
  ],
})
export class AppComponent {
  title = 'app';
}
