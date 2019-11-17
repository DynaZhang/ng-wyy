import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Banner} from '../../services/data-types/common.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public bannerList: Array<Banner> = [];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getBanners().subscribe(resp => {
      this.bannerList = resp;
    });
  }

}
