import { Component, OnInit } from '@angular/core';
import { Color_ } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  colors:Color_[]=[];
  dataLoaded="false";

  constructor(private colorService:ColorService) { }  

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
      this.dataLoaded="true";
    })
  }

}
