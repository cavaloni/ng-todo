/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {SortableComponent} from './sortable.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { DndModule } from 'ng2-dnd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('Component: Home', () => {
    let component = new SortableComponent();
    let fixture : ComponentFixture < SortableComponent >;
    let debug : DebugElement;
    let htmlElem : HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                DndModule.forRoot(),
                FormsModule,
                CommonModule,
                ReactiveFormsModule,
            ],
            declarations: [SortableComponent], // Our Test sample component
        });
        fixture = TestBed.createComponent(SortableComponent);
        component = fixture.componentInstance;
    })

    function setInputValue(selector: string, value: string) {
        fixture.detectChanges();

        let input = fixture.debugElement.nativeElement.querySelector(selector);
        input.value = value;
        input.dispatchEvent(new Event('input'));
    }

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

    it('should call addItem on submit click and add item to list', async(() => {
        spyOn(component, 'addItem');

        setInputValue('.form-control-rounded', 'some stuff')

        let input = fixture.debugElement.nativeElement.querySelector('.form-control-rounded');

        let button = fixture.debugElement.nativeElement.querySelectorAll('button');
        const submitButton = button[0]
        submitButton.click();

        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(component.addItem).toHaveBeenCalled();
            expect(component.remainingTasks.length).toEqual(1)
        })

        let remainingTasksList = fixture.debugElement.nativeElement.querySelector('div.panel-warning').querySelector('div.list-group')

    }));

});
