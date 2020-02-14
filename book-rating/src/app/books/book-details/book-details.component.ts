import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observer, timer, Subscription, Observable } from 'rxjs';

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

      setTimeout(() => subscriber.next('😇'), 1000);
      setTimeout(() => subscriber.complete(), 2000);

      // subscriber.error('HILFE FEHLER!');
    });

    observable.subscribe(observer);

    // subscripion
    // this.sub = timer(0, 250).subscribe(console.log);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
