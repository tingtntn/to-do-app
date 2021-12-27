import { Component, OnInit } from '@angular/core';
import { ListItem } from './list-item.model';
import { ListItemService } from './list-item.service';

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
    listItems: ListItem[];
    selectedListItems: ListItem[];

    constructor(private listItemService: ListItemService) {}

    onDeleteSelected() {
        this.listItemService.deleteSelected();
    }

    ngOnInit(): void {
        this.listItems = this.listItemService.getAllListItems();
        this.listItemService.listItemChanged.subscribe(
            (listItems: ListItem[]) => {
                this.listItems = listItems;
            }
        );
    }
}
