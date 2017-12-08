import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() data;  
  @Input() err: boolean = false;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
  }
}
