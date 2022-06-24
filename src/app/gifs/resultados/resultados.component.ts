import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
    `
   /* *{
      box-sizing: border-box;
    }
    body{
      margin: 0;
      padding: 0;
    } 
     
  img{
    width: 100%
  }

  .row1{
    display: flex;
    padding: 5px;
    flex-wrap: wrap;
  }
  
  .column1{
    flex: 25%;
    padding: 5px;
  }

  .column1 img{
    margin-top: 5px;
  }
  @media (max-width: 800px){
    .column1{
      flex: 50%;
    }
  }
  @media (max-width: 600px){
    .column1{
      flex: 100%;
    }
  } */
    `
  ]
})
export class ResultadosComponent implements OnInit {

  get resultados(){
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

}
