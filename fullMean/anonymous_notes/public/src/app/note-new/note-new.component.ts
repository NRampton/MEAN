import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';



@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  newNote: Note = new Note;

  constructor(private _ns: NoteService) { }

  ngOnInit() {
  }

  createNote() {
    this._ns.create(
      this.newNote, 
      note => console.log(note)
    );
  }

}
