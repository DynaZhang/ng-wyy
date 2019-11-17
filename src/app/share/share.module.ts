import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  declarations: []
})
export class ShareModule { }
