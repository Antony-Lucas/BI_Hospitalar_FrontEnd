import { Component } from '@angular/core';
import { menuNavData } from './menu-data';

@Component({
  selector: 'app-graphmenu',
  templateUrl: './graphmenu.component.html',
  styleUrl: './graphmenu.component.css',
})
export class GraphmenuComponent {
  menuData = menuNavData;
}
