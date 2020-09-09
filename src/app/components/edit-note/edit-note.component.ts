import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Note} from "../../models/note";

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styles: [
  ]
})
export class EditNoteComponent {
  form = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(''),
    description: new FormControl('')
  })



  @Input()
  set note(note: Note|null) {
    if (note) {
      this.form.patchValue(note)
    }
  }

  @Output()
  noteUpdated = new EventEmitter<Note>()

  submit() {
    this.noteUpdated.emit({...this.form.value})
  }
}
