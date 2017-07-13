import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SortableComponent } from './home/sortable/sortable.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ng2-dnd';

const routes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        DndModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [SortableComponent, HomeComponent],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }
