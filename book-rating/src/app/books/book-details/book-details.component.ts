import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observer, timer, Subscription, Observable, forkJoin } from 'rxjs';
import { map, filter, reduce, mergeMap, concatMap, switchMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn'))
  );

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {

    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      switchMap(isbn => forkJoin([
        this.bs.getSingleBook(isbn),
        this.bs.getSingleBook(isbn)
      ])
      )
    ).subscribe(y => console.log(y));
  }
}
