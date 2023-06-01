import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/capstoneFood-api/src/models';
import { FoodserviceService } from '../services/foodservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  foods:Food[]=[]

  constructor(private router: Router,private service:FoodserviceService, private routers: ActivatedRoute) { }

  ngOnInit(): void {
  
  }
  
  doSearch(value: string) {
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
  }
 
}


