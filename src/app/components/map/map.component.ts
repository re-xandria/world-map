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
    
    let country: string = "Country: ";
    let capital: string = "Capital: ";
    let region: string = "Region: ";
    let income: string = "Income Level: ";
    let longitude: string = "Longitude: ";
    let latitude: string = "Latitude: ";

    this.country.name = e.name; 
    this.DataService
    .getCountry(e.code)
    .pipe(take(1))
    .subscribe((response: any) => {
    this.country.data = [
    country + response[1][0].name,
    capital + response[1][0].capitalCity,
    region + response[1][0].region.value,
    income + response[1][0].incomeLevel.value,
    longitude + response[1][0].longitude,
    latitude + response[1][0].latitude
    ]}
  )}
}
