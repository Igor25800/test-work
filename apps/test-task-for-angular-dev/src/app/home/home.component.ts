import { Component, OnInit, signal } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  quote = signal<string>('');
  isLoading = signal<boolean>(false);

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading.set(true)
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        })
      )
      .subscribe((quote: string) => {
        this.quote.set(quote);
      });
  }
}
