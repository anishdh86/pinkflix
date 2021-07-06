import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MoviesHttpService } from '../../services/movies/movies-http.service';

@Component({
  selector: 'app-application-frame',
  templateUrl: './application-frame.component.html',
  styleUrls: ['./application-frame.component.scss']
})
export class ApplicationFrameComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}
