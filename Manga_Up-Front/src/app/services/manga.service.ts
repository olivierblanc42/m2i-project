import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manga } from '../types';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
    url="http://localhost:3000/manga";

    mangas=new BehaviorSubject<Manga[]>([]);
    manga=new BehaviorSubject<Manga | null>(null);
    
    currentMangas=this.mangas.asObservable();
    currentManga=this.manga.asObservable();


    constructor(
        private http: HttpClient    
    ) {
        this.http.get<Manga[]>(this.url)
        .pipe()
        .toPromise()
        .then((r) => {
           if (!r) return;
           this.mangas.next(r);
        })
    }

    getManga(id: number){
        this.http.get<Manga>(`${this.url}/${id}`)
        .pipe()
        .toPromise()
        .then((r)=>{
            if(!r) return;
            console.log(r);
            this.manga.next(r);
        })
    }
}
