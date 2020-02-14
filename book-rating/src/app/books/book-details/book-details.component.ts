import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      paramMap => this.isbn = paramMap.get('isbn')
    );

    // Los geht's!

    of('😎', '😳', '🤩').subscribe(
      s => console.log(s),
      err => console.error(err),
      () => console.log('COMPLETE!')
    );


  }

}
