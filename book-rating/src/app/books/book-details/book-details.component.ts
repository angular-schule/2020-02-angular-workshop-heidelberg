import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observer, timer, Subscription, Observable } from 'rxjs';
import { map, filter, reduce, mergeMap, concatMap, switchMap, share, shareReplay, catchError } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  show = false;

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.bs.getSingleBook(isbn)),
    catchError((err: HttpErrorResponse) => of({
      isbn: '000',
      title: 'Fehler beim Laden von ' + err.url,
      description: '???'
    }))
  );

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {
  }
}
