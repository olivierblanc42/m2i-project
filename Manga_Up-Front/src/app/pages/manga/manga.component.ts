import { PictureService } from './../../services/picture.service';
import { MangaService } from './../../services/manga.service';
import { Component, OnInit } from '@angular/core';
import { Manga, Picture } from '../../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manga',
  standalone: true,
  imports: [],
  template: `

<div class="flex justify-center">
  <div class="block max-w-[18rem] rounded-lg bg-secondary text-white shadow-secondary-1">
    <div class="border-b-2 background-color-black px-6 py-3">{{manga?.title}}</div>
    <div class="border-b-2 background-color-black-medium px-6 py-3 flex justify-between">
        <div class="img"><img src="/assets/svg/star-white.svg" alt="star-white.svg"><span>12</span></div>
        <div class="img"><img src="/assets/svg/comment-white-fill.svg" alt="comment-white-fill.svg"><span>12</span></div>
        <div class="img"><img src="/assets/svg/heart-white-outline.svg" alt="heart-white-outline.svg"><span>12</span></div>
    </div>
    <div class="border-b-2 background-color-black-light px-6 py-3 flex justify-center">
        <div><img src="/assets/svg/star-yellow.svg" alt="star-yellow"></div>
        <div class="ml-4">
            <div>-/5</div>
            <div class="text-xs">0 vote</div>
        </div>
    </div>
    <div class="h-30">
        <img class="w-72" src="{{base64}}" alt="">
    </div>
    <div>
        <p>Titre original : <span>{{manga?.title}}</span></p>
        <p>Origine : </p>
        <p>Année VF : <span>{{manga?.releaseDate}}</span></p>
        <p>Type : <span>{{manga?.category?.name}}</span></p>
        <p class="genres flex flex-wrap">
            Genre : 
            @for (genre of manga?.genres; track genre.id) {
                <span class="ml-4">{{genre.label}}</span>
            }
        </p>
        <p>Thèmes : </p>
        <p>Auteur : </p>
        <p>Éditeur VO : </p>
        <p>Éditeur VF : </p>
        <p>Prépublié dans : </p>
        <p>Nb volume VO : 10 (Terminé)</p>
        <p>Nb volume VF : 0 (À paraître)</p>
        <p>Prix : <span>{{manga?.price}}</span></p>
        <p>Âge conseillé : </p>
        <p>Pour public averti : </p>
        <p>Se trouve dans le commerce en France : </p>
    </div>
  </div>
</div>
  `,
  styles: [`

    span{
        color: rgba(231, 224, 139, 1);
        font-weight: inherit;

    }

    .genres span{
    }
  `]
})

export class MangaComponent implements OnInit{

    manga!: Manga | null;
    pictures!: Picture[];
    picture!: Picture;
    idUrl!: string;
    base64:string="data:image/webp;base64,";
    
    constructor(
        private mangaService: MangaService,
        private pictureService: PictureService,
        private activatedRoute: ActivatedRoute        
    ){}
    
    ngOnInit(): void {
        this.idUrl=this.activatedRoute.snapshot.paramMap.get('id')!;
        this.mangaService.getManga(this.idUrl)
        this.pictureService.getPicturesByIdManga(this.idUrl);
        
        this.mangaService.currentManga.subscribe(manga=>{
            this.manga=manga
            this.strToLowerCaseAndFirstLetter();
            
        });

        this.pictureService.currentPictures.subscribe(pictures=>{
            this.pictures=pictures;
            for (const picture of this.pictures) {
                if(picture.isPoster) {
                    this.picture=picture;
                    break;
                };
            }
            this.base64=this.base64+this.picture.img;
            console.log("this.base64 : ", this.base64);
            
        });
    }

    strToLowerCaseAndFirstLetter(){
        if(this.manga){
            for (let genre of this.manga?.genres) {
                let tmp=genre.label.toLocaleLowerCase();
                genre.label=tmp.charAt(0).toUpperCase()+tmp.slice(1);
            }
        }
    }
}





