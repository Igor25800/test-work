import { Component, OnInit, Input, ElementRef, HostListener } from '@angular/core';
import { I18nService } from './i18n.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  standalone: false,
})
export class LanguageSelectorComponent implements OnInit {
  @Input() inNavbar = false;
  @Input() menuClass = '';
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' | 'bottom-end' | 'bottom-start' = 'bottom-end';
  @Input() container: any = '';

  menuStyles: any = {};

  constructor(private i18nService: I18nService, private el: ElementRef) {
  }

  ngOnInit() {}

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
}
