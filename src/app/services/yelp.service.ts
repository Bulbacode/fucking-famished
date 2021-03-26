import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  constructor(
    public http: HttpClient
  ) { }

  search(config: any) {
    console.log(`Config - ${JSON.stringify(config)}`);
    return this.http.post<any>(`${environment.apiBaseUrl}/search`, {
      query: {
        ...config
      }
    });
  }
}
