import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ListItemComponent } from './to-do-list/list-item/list-item.component';
import { FormsModule } from '@angular/forms';
import { NewItemFormComponent } from './new-item-form/new-item-form.component';
import { ListItemService } from './to-do-list/list-item.service';

@NgModule({
    declarations: [
        AppComponent,
        ToDoListComponent,
        ListItemComponent,
        NewItemFormComponent,
    ],
    imports: [BrowserModule, FormsModule],
    providers: [ListItemService],
    bootstrap: [AppComponent],
})
export class AppModule {}
