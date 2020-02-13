import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  isInvalid(name: string) {
    const control = this.bookForm.get(name);
    return control.touched && control.invalid;
  }

  hasError(name: string, code: string) {
    const control = this.bookForm.get(name);
    return control.touched && control.hasError(code);
  }

  submitForm() {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    };

    // ???
    // 1. Erstelle einen EventEmitter (Name: create)
    // 2. "Emitte" das neue Buch
    // 3. Empfange das neue Buch um Dashboard
    // 4. Füge das neue Buch dem Array hinzu

    this.bookForm.reset();
  }

}
