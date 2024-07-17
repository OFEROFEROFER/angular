import { Component, OnInit } from '@angular/core';
import { ShowsApiService } from '../../services/shows-api.service';
import { CommonModule } from '@angular/common';
import { EpisodesTableComponent } from '../episodes-table/episodes-table.component';

@Component({
  selector: 'app-episodes-page',
  templateUrl: './episodes-page.component.html',
  styleUrls: ['./episodes-page.component.css'],
  standalone: true,
  imports: [CommonModule, EpisodesTableComponent],
})
export class EpisodesPageComponent implements OnInit {
  constructor(private showsApiService: ShowsApiService) {}

  ngOnInit() {}

  episodes$ = this.showsApiService.getEpisodes('156');

  episode$ = this.showsApiService.getEpisode('11353');
}
