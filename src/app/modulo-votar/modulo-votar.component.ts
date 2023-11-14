import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-modulo-votar',
  templateUrl: './modulo-votar.component.html',
  styleUrls: ['./modulo-votar.component.css']
})
export class ModuloVotarComponent {
  constructor(private sharedService: SharedService, private router: Router){}

  
}
