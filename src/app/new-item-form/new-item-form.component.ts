import { Component, OnInit } from '@angular/core';
import { ListItem } from '../to-do-list/list-item.model';
import { ListItemService } from '../to-do-list/list-item.service';

@Component({
    selector: 'app-new-item-form',
    templateUrl: './new-item-form.component.html',
    styleUrls: ['./new-item-form.component.css'],
})
export class NewItemFormComponent implements OnInit {
    newListItems: ListItem[];
    title: string;
    creator: string;
    myImage = 'assets/images/add.png';

    constructor(private listItemService: ListItemService) {}

    ngOnInit(): void {}

    onAddNewListItem() {}

    onAddNewListItems() {
        let id = this.listItemService.size + 1;
        this.listItemService.addListItem(
            new ListItem(id, this.title, this.creator, false)
        );
        this.title = '';
        this.creator = '';
        this.listItemService.increaseSizeByOne();
    }
}
