import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
 

<div class="py-3 bg-dark utile-mobile  ">
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
</div>


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
    <img src="assets/img/line-desktop2.png"  alt="">

  <div>
    <img class="mx-auto " src="assets/img/stars.png" alt="">
    <p>Score <span>4.1 </span>| <span>1500 avis</span></p>
  </div>

</div>

<div class="bg-dark flex flex-col py-3 text-center avis-desktop">
             <img class="mx-auto py-3" src="assets/img/stars.png" alt="">
   <p>le meilleurs site pour le listing des mangas
     et le meilleur pour agrandir votre collection <br>
     <span>1500 </span>avis
    </p>
</div>



  `,
  styles: [`
      .bg-dark{
       background-color: #101010;
      }

.utile-desktop{
    display:none;
   }
.avis-desktop{
      display:none;
}

@media (min-width: 1250px) { 

   .utile-desktop{
    display:flex;
   }

.avis-desktop{
      display:flex;
}

  .utile-mobile{
    display:none;
  }
  .avis-mobile{
        display:none;
  }
 }





    `]
})
export class HomeComponent implements OnInit {

  ;

  ngOnInit(): void {

  }


}
