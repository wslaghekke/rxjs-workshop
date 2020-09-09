import {Component, OnInit} from '@angular/core';
import {Note} from "../../models/note";
import {NotesService} from "../../services/notes.service";

@Component({
    selector: 'app-promise-page',
    templateUrl: 'promise-page.component.html',
    styles: []
})
export class PromisePageComponent implements OnInit {
    notes: Note[] | null = null;

    constructor(private notesService: NotesService) {
    }

    ngOnInit() {
        this.loadNotes()
    }

    async deleteNote(note: Note) {
        await this.notesService.deleteNote(note).toPromise();
        await this.loadNotes();
    }

    private async loadNotes() {
        this.notes = await this.notesService.getNotes().toPromise()
    }
}
