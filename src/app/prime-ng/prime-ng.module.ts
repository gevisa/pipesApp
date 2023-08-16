
import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
//import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';


@NgModule({
  exports: [
    // MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule

  ]
})
export class PrimeNgModule { }
