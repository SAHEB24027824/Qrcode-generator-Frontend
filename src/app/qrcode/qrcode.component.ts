import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'

import {HttpService} from '../http.service'


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  public itemGroup;

  public data;

  constructor(
    private fb:FormBuilder,
    private http:HttpService
  ) { 
    this.itemGroup=this.fb.group({
      itemName:[null,Validators.required]
    })
  }

  ngOnInit(): void {
    this.getItem()
  }



  public getItem(){
    this.http.getALlItem().subscribe(res=>{

   this.data=res.result;
    },error=>{})
  }

  public addItem(){
    console.log(this.itemGroup.value)
    this.http.addItem(this.itemGroup.value).subscribe(res=>{
      this.getItem()
    })
  }

}
