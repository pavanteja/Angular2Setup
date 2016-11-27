import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccountComponent }  from './account.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AccountComponent ],
  bootstrap:    [ AccountComponent ]
})
export class AccountModule { }
