import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PromisePageComponent} from './pages/promise-page/promise-page.component';
import {ObservablePageComponent} from './pages/observable-page/observable-page.component';
import {HttpClientModule} from "@angular/common/http";
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EditNotePageComponent} from "./pages/edit-note-page/edit-note-page.component";
import { PencilIconComponent } from './components/icons/pencil-icon.component';
import {TrashIconComponent} from "./components/icons/trash-icon.component";
import { HttpCallComponent } from './pages/http-call/http-call.component';

@NgModule({
    declarations: [
        AppComponent,
        PromisePageComponent,
        ObservablePageComponent,
        EditNotePageComponent,
        EditNoteComponent,
        PencilIconComponent,
        TrashIconComponent,
        HttpCallComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
