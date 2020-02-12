import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private br: BookRatingService) { }

  ngOnInit() {
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Tolles Buch',
        rating: 5
      },
      {
        isbn: '111',
        title: 'AngularJS',
        description: 'Altes Buch',
        rating: 3
      },
      {
        isbn: '222',
        title: 'Python',
        description: 'Hilfe, ein Leerzeichen zuviel!',
        rating: 1
      },
    ];
  }

  doRateDown(book: Book) {
    // const ratedBook = this.br.rateDown(book);
    const ratedBook = {
      ...book,
      rating: Math.max(--book.rating, 1)
    };

    this.update(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.br.rateUp(book);
    this.update(ratedBook);
  }

  update(ratedBook: Book) {
    this.books = this.books
      .map(book => book.isbn === ratedBook.isbn ? ratedBook : book)
      .sort((a, b) => b.rating - a.rating);
  }
}
