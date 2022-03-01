import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormBuilder } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';




@NgModule({
  imports: [WelcomeRoutingModule,NzFormModule,ReactiveFormsModule,
    FormsModule,NzTableModule, CommonModule, ScrollingModule,],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
