
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private images:any[] = [];
  private url: string = 'https://api.imgur.com/3/image';
  private clientId: string = 'b8ef643ed81d18b';
  public imageData!:any;
  public headers!:any;
  imageLink:any;
  constructor(private http:HttpClient) { }
  uploadImage(imageFile:File){

    console.log("🚀 este es imageFile", imageFile)
    console.log("🚀nombre del file", imageFile.name)
   

    //let formData = new FormData();
    //formData.append('image', imageFile, imageFile.name);
    
    //console.log("form data malito",formData);
    
 
  /*   let header = new HttpHeaders({
      "authorization": 'Client-ID '+this.clientId
      
    }); */
    this.headers = new Headers({'authorization': 'Client-ID '+this.clientId});

    this.imageLink = this.http.post(this.url, imageFile,{headers: this.headers}).subscribe((res:any)=>{
      console.log("este es el result del post",res);
      return res;
      
    });
    //this.imageLink = this.imageData['data'];
    console.log("🚀 ~ file: image.service.ts ~ line 27 ~ ImageService ~ uploadImage ~ this.imageLink", this.imageLink)
 
    this.images.push( this.imageLink);
 
  }
 
  getImages(){
    return this.images;
  }



}
