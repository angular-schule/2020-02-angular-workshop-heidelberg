import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observer, timer, Subscription, Observable } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  sub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      paramMap => this.isbn = paramMap.get('isbn')
    );

    // Los geht's!
    const observer = {
      next: s => console.log(s),
      error: err => console.error(err),
      complete: () => console.log('COMPLETE!')
    };

    const observable = new Observable(subscriber => {
      subscriber.next('😎');
      subscriber.next('😍');

      const t = setTimeout(() => { subscriber.next('😇'), console.log('Ist da wer???'); }, 1000);
      setTimeout(() => subscriber.complete(), 2000);

      return () => {
        console.log('Da hat jemand unsubscribed!');
        clearTimeout(t);
      };
    });

    const sub = observable.subscribe(observer);
    setTimeout(() => sub.unsubscribe(), 500);

    // subscripion
    // this.sub = timer(0, 250).subscribe(console.log);

    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      map(x => x * 10),
      filter(x => x > 30),
      reduce((x, y) => x + y),
      map(x => '🍞'.repeat(x))
    ).subscribe(console.log);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
