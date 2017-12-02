import { Component } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  private apiUrl ='http://localhost:3000/'
  data
  data1
  name
  country
  id
  nameupdate
  countryupdate
  constructor(public http: Http){
    this.getData()
    this.getContacts()
  }


  update(){
    return this.http.post('http://localhost:3000/Update/'+this.id,({name:this.nameupdate,country:this.countryupdate})).subscribe((result)=>{
    console.log('result',result);
    window.location.reload()
    })
  }

  updateid(name,country,inputid){
    this.id = inputid
    this.nameupdate = name
    this.countryupdate = country
  }

  delete(inputid){
    return this.http.get('http://localhost:3000/Delete/'+inputid).subscribe(()=>{
      window.location.reload()
    })
  }
  

  add(){
   
    return this.http.post('http://localhost:3000/Create/',({name:this.name,country:this.country})
    
    ).subscribe((result)=>{
       console.log('result',result);
       window.location.reload()
    })
    
  }

  getData(){
    return this.http.get(this.apiUrl).map((res:Response)=>res.json())
  }

  getContacts(){
    this.getData().subscribe(data=>{
      console.log(data)
      this.data = data
    })
  }
}
