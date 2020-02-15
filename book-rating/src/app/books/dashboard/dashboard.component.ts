import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { Store, select } from '@ngrx/store';
import { loadBooks } from '../actions/book.actions';
import { selectBooks, selectBooksLoading } from '../selectors/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // VORSICHT: gleich Bug bei HTTP
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books$ = this.store.pipe(select(selectBooks));
  loading$ = this.store.pipe(select(selectBooksLoading));

  constructor(private store: Store<{}>) { }

  ngOnInit() {
    this.store.dispatch(loadBooks());
  }

  doRateDown(book: Book) {
    // const ratedBook = this.br.rateDown(book);
    // this.update(ratedBook);
  }

  doRateUp(book: Book) {
    // const ratedBook = this.br.rateUp(book);
    // // const ratedBook = {
    // //   ...book,
    // //   rating: Math.min(++book.rating, 5)
    // // };
    // this.update(ratedBook);
  }

  update(ratedBook: Book) {
    // this.books = this.books
    //   .map(book => book.isbn === ratedBook.isbn ? ratedBook : book)
    //   .sort((a, b) => b.rating - a.rating);
  }

  doCreate(book: Book) {
    // this.books = [...this.books, book];
  }
}
