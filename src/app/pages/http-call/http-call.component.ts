import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {FormControl} from "@angular/forms";
import {mergeMap, startWith, switchMap, tap} from "rxjs/operators";
import {concat, of} from "rxjs";

@Component({
    selector: 'app-http-call',
    templateUrl: './http-call.component.html',
    styles: []
})
export class HttpCallComponent {
    inputControl = new FormControl('test');

    shouldLoadData = true;

    data$ = concat(
        of(this.inputControl.value),
        this.inputControl.valueChanges,
    ).pipe(
        mergeMap(filter => {
            console.log({filter}, {val: this.inputControl.value});
            return this.httpService.getData(filter);
        })
    );

    constructor(private httpService: HttpService) {
    }

    testIndex = 0;

    test() {
        const index = this.testIndex++;
        this.inputControl.valueChanges.subscribe(val => console.log('test', index, val));
    }
}
