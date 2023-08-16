import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'steven';
  public nameUpper: string = 'STEVEN';
  public fullName: string = 'StEvEn VITEri';

  public customDate: Date = new Date();


}
