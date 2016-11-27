import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IndexComponent } from './index.component';
import { DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [IndexComponent, DashboardComponent ],
  bootstrap: [IndexComponent ]
})
export class IndexModule { }
