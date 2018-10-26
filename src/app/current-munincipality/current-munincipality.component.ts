import { Component, OnInit } from '@angular/core';
import { MapService } from "../map.service";
import { MapComponent }  from "../map/map.component";

@Component({
  selector: 'current-munincipality',
  templateUrl: './current-munincipality.component.html',
  styleUrls: ['./current-munincipality.component.scss']
})
export class CurrentMunincipalityComponent implements OnInit {

  currentMunincipality: string;
  constructor(private mapService: MapService) { 
    this.currentMunincipality = "Not found";

    mapService.location.subscribe(location => {
      if ( location != undefined ) {
        mapService.findMunincipality(location).then(munincipality => {
           this.currentMunincipality = munincipality
        });
      }
    });
  }

  ngOnInit() {
  }

  refreshLocation() {
    this.mapService.refreshLocation();
  }

}