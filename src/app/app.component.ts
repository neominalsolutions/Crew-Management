import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { CardComponent } from './buttons/card.component';
import { ActionsComponent } from './buttons/actions.component';
import { ButtonRendererComponent } from './buttons/button-render.component';
import { CrewService } from './services/crew.service';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Layout işlemleri modülü
    RouterModule, // yönlendirme modulü
    CommonModule, // NgFor NgStyle gibi ana angular bileşenleri için bunu aç
    TranslateModule, // Dil ile çalışacağız Bu Module aktif et
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public translateService: TranslateService) {
    this.translateService.addLangs(['en', 'fr', 'pt']); // 3 dil seçeneği olsun
    this.translateService.setDefaultLang('en'); // default ingilizce
    this.translateService.use('en');
  }

  // dil değişimi olunca Translate Service için OnLangChange Eventi tetiklenir.
  public onChange(selectedLanguage: string): void {
    console.log('selectedLanguage', selectedLanguage);
    this.translateService.use(selectedLanguage);
  }
}
