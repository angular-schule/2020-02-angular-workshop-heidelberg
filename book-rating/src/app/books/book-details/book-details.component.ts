import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observer, timer, Subscription, Observable } from 'rxjs';
import { map, filter, reduce, mergeMap, concatMap, switchMap, share, shareReplay } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  show = false;

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.bs.getSingleBook(isbn))
  );

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {
  }
}
