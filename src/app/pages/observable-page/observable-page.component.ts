import {Component, OnInit} from '@angular/core';
import {NotesService} from "../../services/notes.service";
import {BehaviorSubject} from "rxjs";
import {switchMap} from "rxjs/operators";
import {Note} from "../../models/note";

@Component({
    selector: 'app-observable-page',
    templateUrl: './observable-page.component.html',
    styles: []
})
export class ObservablePageComponent {
    refresh$ = new BehaviorSubject<void>(undefined);
    notes$ = this.refresh$.pipe(
        switchMap(() => this.notesService.getNotes())
    )

    constructor(private notesService: NotesService) {
    }

    async deleteNote(note: Note) {
        await this.notesService.deleteNote(note).toPromise();
        await this.refresh$.next();
    }
}
