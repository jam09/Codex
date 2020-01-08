import { Component, OnInit, HostBinding } from '@angular/core';
import { HotelesService } from '../../services/hoteles.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  hoteles : any = [];

  constructor(private hotelesServices: HotelesService) { }

  ngOnInit() {
    this.hotelesServices.getHoteles().subscribe(
      res =>{
        this.hoteles = res;
      },
      err => console.error(err)
    );
    
  }

}
