import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http:HttpClient) { }
  
  url = "https://www.google.com/search?gs_ssp=eJzj4tDP1TfITc9OV2A0YHRg8GJLzE2sys8DAELoBhw&q=amazon&rlz=1C1RXQR_enIN1063IN1063&oq=a&aqs=chrome.4.69i57j69i59l3j46i131i199i433i465i512l2j0i131i433i512l3j0i512.407636381j0j15&sourceid=chrome&ie=UTF-8"

  fetchMobiles(){
    return this.http.get(this.url)
  }

  deleteMobile(id){
    return this.http.delete(this.url+"/"+id)
  }

  postMobile(body){
    return this.http.post(this.url,body)
  }

  putMobile(body){
    return this.http.put(this.url,body)
  }

  


}
