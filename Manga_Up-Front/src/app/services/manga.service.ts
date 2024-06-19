import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manga } from '../types';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

    mangas=new BehaviorSubject<Manga[]>([]);

    manga=new BehaviorSubject<Manga | null>(null);
    
    currentMangas=this.mangas.asObservable();
    currentManga=this.manga.asObservable();

    url="http://localhost:3000/manga";

    constructor(
        private http: HttpClient    
    ) {
        async()=>await firstValueFrom(this.http.get<Manga[]>(this.url))
        .then((data)=>{
            console.log("data : ", data);
        });
        
    }

    getManga(id: number){
        this.http.get<Manga>(`${this.url}/${id}`)
        .pipe()
        .toPromise()
        .then((r)=>{
            if(!r) return;
            this.manga.next(r);
        })
    }
}
