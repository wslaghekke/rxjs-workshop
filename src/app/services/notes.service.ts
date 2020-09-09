import {Injectable} from '@angular/core';
import {Note} from "../models/note";
import {Observable, of, throwError} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class NotesService {
    private data: Note[] = JSON.parse(localStorage.getItem('notes') || '[]');

    constructor() {
    }

    getNotes(): Observable<Note[]> {
        return of(this.data.map(item => ({...item}))).pipe(
            delay(2000)
        )
    }

    getNote(id: number): Observable<Note> {
        const note = this.data.find(item => item.id == id)
        return note == undefined ? throwError('not found') : of({...note});
    }

    createNote(note: Note): Observable<Note> {
        const noteWithId = {...note, id: note.id || this.generateId()}
        this.data.push(noteWithId);
        this.saveData();
        return of({...noteWithId});
    }

    updateNote(note: Note): Observable<Note> {
        const noteIndex = this.data.findIndex(item => item.id == note.id)
        if (noteIndex === -1) {
            return throwError('not found')
        } else {
            this.data.splice(noteIndex, 1, {...note});
            this.saveData();
            return of({...note});
        }
    }

    deleteNote(note: Note): Observable<void> {
        const noteIndex = this.data.findIndex(item => item.id == note.id)
        if (noteIndex === -1) {
            return throwError('not found')
        } else {
            this.data.splice(noteIndex, 1);
            this.saveData();
            return of<void>(undefined);
        }
    }

    private saveData() {
        localStorage.setItem('notes', JSON.stringify(this.data));
    }

    private generateId(): number {
        return 1 + this.data.reduce((highestId, item) => {
            return item.id > highestId ? item.id : highestId
        }, 0);
    }
}
