import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ShowsApiService {
  constructor(private http: HttpClient) {}

  url = 'https://api.tvmaze.com';

  getEpisodes(showId: string): Observable<any> {
    return this.http.get(`${this.url}/shows/${showId}/episodes`);
  }

  getEpisode(episodeId: string): Observable<any> {
    return this.http.get(`${this.url}/episodes/${episodeId}`);
  }
}
