import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

//* i18n Select
  public name: string = 'Steven';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  public changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }
  //* i18Plural
  public clients: string[] = ['Maria','Pedro','Fernando','Eduardo','Natalia','Andrea'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient():void {
    this.clients.pop();
  }
  //* keyValue Pipe
  public person = {
    name: 'Steven',
    age: 40,
    address: 'Pasto - Colombia'
  }
  //* Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
  tap(x => console.log('x:',x)));

  public promiseValue: Promise<string> = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      this.name = 'Geovany';
    }, 3500)
  })





}
