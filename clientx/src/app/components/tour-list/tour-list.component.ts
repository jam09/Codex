import { Component, OnInit,HostBinding } from '@angular/core';
import { ToursService} from '../../services/tours.service';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  tours : any = [];

  constructor(private toursService: ToursService) { }

  ngOnInit() {
    this.toursService.getTours().subscribe(
      res =>{
        this.tours = res;
      },
      err =>console.error(err)
    );
  }
  reservaTour(id:string){
    console.log(id);
  }

}
