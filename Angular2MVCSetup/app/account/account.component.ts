import { Component } from '@angular/core';

@Component({
  selector: 'my-acc',
  template: `<h1>Hello {{name}} from Acc</h1>`,
})
export class AccountComponent  { name = 'Angular'; }
