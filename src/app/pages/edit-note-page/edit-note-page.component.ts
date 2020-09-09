import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NotesService} from "../../services/notes.service";
import {Note} from "../../models/note";

@Component({
    selector: 'app-edit-note-page',
    templateUrl: './edit-note-page.component.html',
    styles: []
})
export class EditNotePageComponent implements OnInit {
    note: Note | null = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private notesService: NotesService
    ) {
    }

    async ngOnInit() {
        if (this.route.snapshot.params.noteId) {
            this.note = await this.notesService.getNote(this.route.snapshot.params.noteId).toPromise()
            console.log(this.note);
        }
    }

    async saveNote(note: Note) {
        if (note.id) {
            await this.notesService.updateNote(note).toPromise()
            await this.router.navigate(['../..'], {relativeTo: this.route});
        } else {
            await this.notesService.createNote(note).toPromise();
            await this.router.navigate(['..'], {relativeTo: this.route});
        }

    }
}
