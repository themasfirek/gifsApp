import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string= 'kls926mkim1bHZXmZScc4NOL4BeQvdS7';
  private servicioUrl: string= 'https://api.giphy.com/v1/gifs';

  private _historial: string[]=[];

  public resultados: Gif[]=[];

  get historial(){
    
    return [...this._historial];
  }

  constructor(private http: HttpClient){
    //obtener informacion de json para motrarla en el historial
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }

    if(localStorage.getItem('resultado')){
      this.resultados = JSON.parse(localStorage.getItem('resultado')!);
    }
  }

  buscarGifs(query: string = ''){
    query=query.trim().toLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);//lo agrega al inicio del historial en el arreglo
      this._historial = this._historial.splice(0,23);// limita el arreglo de a 10 resultados
      localStorage.setItem('historial', JSON.stringify(this._historial));//guardar informacion en localStorage
      
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '23')
      .set('q', query);
    
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
    .subscribe( (resp) =>{
      //console.log(resp.data)
      this.resultados=resp.data
      localStorage.setItem('resultado', JSON.stringify(this.resultados));
      
    })


  }

}
