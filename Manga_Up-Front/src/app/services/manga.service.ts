import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Manga } from '../types';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
    url="http://localhost:8080/api/mangas";

    headers=new HttpHeaders()
        .set("content-type", "application/json")
        .set("Access-Control-Allow-Origin", '*');


    mangas=new BehaviorSubject<Manga[]>([]);
    manga=new BehaviorSubject<Manga | null>(null);
    
    currentMangas=this.mangas.asObservable();
    currentManga=this.manga.asObservable();


    constructor(
        private http: HttpClient, 
    ) {
        //this.http.get<Manga[]>(this.url)
        //.pipe()
        //.toPromise()
        //.then((r) => {
        //   if (!r) return;
        //   this.mangas.next(r);
        //})
    }

    getManga(id: string){
        this.http.get<Manga>(`${this.url}/${id}`, {
            headers: {'Access-Control-Allow-Origin': '*'}
         })
        .pipe()
        .toPromise()
        .then((r)=>{
            if(!r) return;
            console.log(r);
            this.manga.next(r);
        })
    }
}
