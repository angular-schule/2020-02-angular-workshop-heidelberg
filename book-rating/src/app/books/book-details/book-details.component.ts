import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Observer, timer, Subscription } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  alive = true;


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

    of('😎', '😳', '🤩').subscribe(observer);

    timer(0, 250).pipe(
      takeWhile(() => this.alive)
    ).subscribe(console.log);

    timer(0, 250).pipe(
      takeWhile(() => this.alive)
    ).subscribe(console.log);

  }

  ngOnDestroy() {
    this.alive = false;

  }

}
