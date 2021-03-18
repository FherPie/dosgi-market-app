import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {


  title;
  description;
  item;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
 
    this.route.queryParams.subscribe(params => {
      this.item = JSON.parse(params["item"]);
     this.title= this.item.title;
     this.description=this.item.description;
  });

  }





}
