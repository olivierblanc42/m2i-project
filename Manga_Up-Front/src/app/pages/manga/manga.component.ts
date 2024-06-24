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
    <div class="border-b-2 background-color-black-medium px-6 py-3">
        <div><img src="/assets/svg/star-white.svg" alt="star-white.svg"><span>12</span></div>
        <div><img src="/assets/svg/comment-white-fill.svg" alt="comment-white-fill.svg"><span>12</span></div>
        <div><img src="/assets/svg/heart-white-outline.svg" alt="heart-white-outline.svg"><span>12</span></div>
    </div>
    <div class="border-b-2 background-color-black-light px-6 py-3"><img src="/assets/svg/star-yellow.svg" alt="star-yellow">
        <div>
            <div>-/5</div>
            <div>0 vote</div>
        </div>
    </div>
    <div class="p-6">
        <img src="/assets/img/Lazy_Sigh_of_the_Villainous_Daughter.png" alt="Lazy_Sigh_of_the_Villainous_Daughter">
    </div>
  </div>
</div>

  `,
  styles: ``
})

export class MangaComponent implements OnInit{

    manga!: Manga | null;
    pictures!: Picture[] | null;
    idUrl!: string;

    constructor(
        private mangaService: MangaService,
        private pictureService: PictureService,
        private activatedRoute: ActivatedRoute        
    ){}
    
    ngOnInit(): void {
        this.idUrl=this.activatedRoute.snapshot.paramMap.get('id')!;
        this.mangaService.getManga(this.idUrl)
        this.pictureService.getPicturesByIdManga(this.idUrl);
        
        this.mangaService.currentManga.subscribe(manga=>this.manga=manga);
        this.pictureService.currentPictures.subscribe(pictures=>this.pictures=pictures);
        console.log("this.manga : ", this.manga);
        console.log("this.manga : ", this.pictures);
        
    }
}
