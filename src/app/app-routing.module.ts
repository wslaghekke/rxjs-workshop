import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PromisePageComponent} from "./pages/promise-page/promise-page.component";
import {ObservablePageComponent} from "./pages/observable-page/observable-page.component";
import {EditNotePageComponent} from "./pages/edit-note-page/edit-note-page.component";
import {HttpCallComponent} from "./pages/http-call/http-call.component";

const routes: Routes = [
    {
        path: 'promise',
        children: [
            {
                path: '',
                component: PromisePageComponent
            },
            {
                path: 'new',
                component: EditNotePageComponent
            },
            {
                path: 'edit/:noteId',
                component: EditNotePageComponent
            }
        ]
    },
    {
        path: 'observable',
        children: [
            {
                path: '',
                component: ObservablePageComponent
            },
            {
                path: 'new',
                component: EditNotePageComponent
            },
            {
                path: 'edit/:noteId',
                component: EditNotePageComponent
            }
        ]
    },
    {
        path: 'http',
        component: HttpCallComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
