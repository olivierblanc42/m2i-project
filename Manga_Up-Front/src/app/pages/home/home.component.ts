import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CardComponent, FontAwesomeModule],
  template: `

     <!-- <ui-card class=""
             size="mobile-manga"
             ></ui-card> -->

<section>

    <a routerLink="/mangas"  class="flex flex-row items-center	gap-2">
      <h2>Manga</h2>
   <fa-icon [icon]="faArrowRight"></fa-icon>
  </a>
<div>

</div> 
</section>


  <!-- start mobile   -->
<!-- <div class="py-3 bg-dark utile-mobile  ">
  <div class="flex flex-row justify-center items-center gap-11	">
    <img src="assets/svg/shield.svg" alt="">
    <p>Fiable et sûr <br>10,000 référence</p>
  </div>
  <img class="mx-auto my-6"  src="assets/img/line.png" alt="">
  <div class=" flex flex-row justify-center items-center gap-10		 "  >
    <img src="assets/svg/customer-service.svg"  alt="">
    <p>Service client <br> disponibles 24/7</p>
  </div>
</div>

<div class="bg-dark py-3 text-center avis-mobile">
             <img class="mx-auto py-3" src="assets/img/stars.png" alt="">
   <p>le meilleurs site pour le listing des mangas
     et le meilleur pour agrandir votre collection <br>
     <span>1500 </span>avis
    </p>
</div> -->
<!-- end mobile -->




<div class="py-3 bg-dark flex flex-row justify-center items-center gap-10	utile-desktop">

  <div class="flex flex-row justify-center items-center gap-4	">
    <img src="assets/svg/shield.svg" alt="">
    <p>Fiable et sûr <br>10,000 référence</p>
  </div>
  <img src="assets/img/line-desktop2.png"  alt="">

  <div class=" flex flex-row justify-center items-center gap-4		 "  >
    <img src="assets/svg/customer-service.svg"  alt="">
    <p>Service client <br> disponibles 24/7</p>
  </div>
    <img src="assets/img/line-desktop2.png" class="line-none" alt="">

  <div class="stars-none flex flex-col	 justify-center ">
    <img class="mx-auto " src="assets/img/stars.png" alt="">
    <p>Score <span>4.1 </span>| <span>1500 avis</span></p>
  </div>

</div>
<section>

    <a class="flex flex-row items-center	gap-2">
      <h2>Les plus vue</h2>
   <fa-icon [icon]="faArrowRight"></fa-icon>
  </a>
<div>

</div>
</section>

<div class="bg-dark flex flex-col py-3 text-center avis-desktop">
             <img class="mx-auto py-3" src="assets/img/stars.png" alt="">
   <p>le meilleurs site pour le listing des mangas
     et le meilleur pour agrandir votre collection <br>
     <span>1500 </span>avis
    </p>
</div>
<section>

    <a routerLink="/genres"  class="flex flex-row items-center	gap-2">
      <h2 >Genre</h2>
   <fa-icon [icon]="faArrowRight"></fa-icon>
  </a>
<div>

</div>
</section>

<div class="bg-dark flex flex-col py-3 text-center uppercase">
   <p>La référence dans le manga plus de 10 000 mangas</p>
</div>

  `,
  styles: [`
      .bg-dark{
       background-color: #101010;
      }


a{
  color:#E7E08B;
  text-transform: uppercase
}
.line-none{
  display:none;
}
.stars-none{
  display:none;
}


@media (min-width: 1250px) { 

    .stars-none{
  display:flex;
}
.line-none{
  display:flex;
}
 }





    `]
})
export class HomeComponent implements OnInit {

  faArrowRight = faArrowRight ;

  ngOnInit(): void {

  }


}
