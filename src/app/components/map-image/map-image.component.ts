import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-map-image',
  templateUrl: './map-image.component.html',
  styleUrls: ['./map-image.component.css']
})
export class MapImageComponent {
  @Output() mouseHover: EventEmitter<any> = new EventEmitter();
  @Output() pathSelect: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    let area = Array.from(document.querySelectorAll("path"));
    area.forEach(item => {
      item.addEventListener('mouseenter', (event: MouseEvent) =>
      this.mouseHover.emit({
        code: (event.target as HTMLDivElement).setAttribute("fill", "#e9edc9"),
        name: (event.target as HTMLDivElement).setAttribute("opacity", "1.0")
      })
      );
    });

    area.forEach(item => {
      item.addEventListener('mouseleave', (event: MouseEvent) =>
      this.mouseHover.emit({
        code: (event.target as HTMLDivElement).setAttribute("fill", "#ccd5ae"),
        name: (event.target as HTMLDivElement).setAttribute("opacity", "1.0")
      })
      );
    });

    area.forEach(item => {
      item.addEventListener('mouseover', (event: MouseEvent) =>
      this.pathSelect.emit({
        code: (event.target as HTMLDivElement).getAttribute("id"),
        name: (event.target as HTMLDivElement).getAttribute("name")
      })
      );
    });


  }
}
