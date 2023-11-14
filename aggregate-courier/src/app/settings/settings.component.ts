import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text:'',img: string;
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  tiles: Tile[] = [
    {text:'',img: 'https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Settings-icon.png', cols: 1, rows: 4, color: '#E5E7E9'},
    {text:'',img: 'https://cdn-icons-png.flaticon.com/128/7792/7792583.png', cols: 1, rows: 1, color: '#E5E7E9'},
    {text:'',img: 'https://cdn-icons-png.flaticon.com/512/2639/2639300.png', cols: 1, rows: 1, color: '#E5E7E9'},
    {text:'',img: '', cols: 1, rows: 1, color: '#E5E7E9'},
    {text:'',img: 'https://icons.veryicon.com/png/o/education-technology/internet-blue-line-icon/api-interface.png', cols: 1, rows: 1, color: '#E5E7E9'},
    {text:'',img: 'https://cdn.dribbble.com/users/46989/screenshots/1668827/webhook-icon.png', cols: 1, rows: 1, color: '#E5E7E9'},
    {text:'',img: 'https://cdn-icons-png.flaticon.com/512/8200/8200166.png', cols: 1, rows: 1, color: '#E5E7E9'},
    {text:'',img: 'Three', cols: 1, rows: 1, color: '#E5E7E9'},
    {text:'',img: 'Four', cols: 1, rows: 1, color: '#E5E7E9'},
    {text:'',img: 'Two', cols: 1, rows: 1, color: '#E5E7E9'},
    {text:'',img: 'Three', cols: 1, rows: 1, color: '#E5E7E9'},
    {text:'',img: 'Four', cols: 1, rows: 1, color: '#E5E7E9'},
    {text:'',img: 'Four', cols: 1, rows: 1, color: '#E5E7E9'},
  ];
}
