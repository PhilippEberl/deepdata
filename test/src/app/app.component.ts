import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export class MarsData {
  temperature: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  values: JSON;
  sol: number;

  constructor(private http: HttpClient){}


  public getValues() {
    this.http.get<JSON>('https://api.nasa.gov/insight_weather/?api_key=PDUHpwFVlCIf6P0a6CbEQZJTvg58mSFhv2g2LYEL&feedtype=json&ver=1.0')
      .subscribe((data) => {
        this.parseObject(data);
        this.values = data;
        //console.log(data);
      });
  }

  public parseObject(obj)
{
   for(let key in obj)
   {
      console.log("key: " + key + ", value: " + obj[key])
      if(obj[key] instanceof Object)
      {
        this.parseObject(obj[key]);
      }
   }
}
}
