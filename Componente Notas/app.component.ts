import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public my_notes = [
    { id: 1, title: "Note 1", description: "Description for note 1" },
    { id: 2, title: "Note 2", description: "Description for note 2" },
    { id: 3, title: "Note 3", description: "Description for note 3" },
    { id: 4, title: "Note 4", description: "Description for note 4" },
  ]
  public note = { id: null, title: null, description: null };
  public show_form: boolean = false;
  public editing = false;

  addNote() {
    this.show_form = true;
  }

  viewNote(note) {
    this.editing = true;
    this.note = note;
    this.show_form = true;
  }

  cancel() {
    this.show_form = false;
    this.editing = false;
    this.note = { id: null, title: null, description: null };
  }

  createNote() {
    if (this.editing) {
      var nota_actual = this;
      this.my_notes.forEach(function (i, index) {
        if (i.id == nota_actual.note.id) {
          nota_actual.my_notes[index] = nota_actual.note;
        }
      });
      this.show_form = false;
      this.editing = false;
    } else {
      this.note.id = Date.now();
      this.my_notes.push(this.note);
      this.show_form = false;
      this.note = { id: null, title: null, description: null };
    }
  }

  delete() {
    var nota_actual = this;
    this.my_notes.forEach(function (i, index) {
      nota_actual.my_notes.splice(index, 1);
    });
    this.show_form = false;
    this.note = { id: null, title: null, description: null };
  }

}
