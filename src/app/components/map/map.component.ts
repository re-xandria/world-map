import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  public country: any = {
    name: ["Hover over an area to begin."],
    data: [""]
  };

  constructor(private DataService: DataService) { } loadCountryData(e: any) {
    this.country.name = e.name; 
    this.DataService
    .getCountry(e.code)
    .pipe(take(1))
    .subscribe((response: any) => {
    this.country.data = [
    "Country: " + response[1][0].name,
    "Capital: " + response[1][0].capitalCity,
    "Region: " + response[1][0].region.value,
    "Income Level: " + response[1][0].incomeLevel.value,
    "Longitude: " + response[1][0].longitude,
    "Latitude: " + response[1][0].latitude
    ]}
  )}
}
