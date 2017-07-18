/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {SortableComponent} from './sortable.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { DndModule } from 'ng2-dnd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

describe('Component: Home', () => {
    let component = new SortableComponent();
    let fixture: ComponentFixture < SortableComponent >;
    // debug: DebugElement;
    // htmlElem: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                DndModule.forRoot(),
                FormsModule,
                CommonModule,
                ReactiveFormsModule,
            ],
            declarations: [SortableComponent], // Our Test sample component
        }).compileComponents().then(() => {
        fixture = TestBed.createComponent(SortableComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        });
    }));

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

    it('should call addItem on submit click', async(() => {
        spyOn(component, 'addItem');

        const button = fixture.debugElement.nativeElement.querySelectorAll('button');
        const submitButton = button[0];
        fixture.detectChanges();
        submitButton.click();
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(component.addItem).toHaveBeenCalled();
        });

        const remainingTasksList = fixture.debugElement.nativeElement.querySelector('div.panel-warning').querySelector('div.list-group');

    }));

});
