import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-episodes-table',
  templateUrl: './episodes-table.component.html',
  styleUrls: ['./episodes-table.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class EpisodesTableComponent implements OnInit {
  constructor() {}

  @Input() episodes: any[] = [];

  ngOnInit() {}
}
