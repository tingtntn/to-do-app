import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from '../list-item.model';
import { ListItemService } from '../list-item.service';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
    @Input() listItem: ListItem;
    isChecked: boolean = false;

    constructor(private listItemService: ListItemService) {}

    ngOnInit(): void {}

    showIsChecked() {
        console.log(this.isChecked);
    }

    onDeleteItem() {
        this.listItemService.deleteListItem(this.listItem.id);
    }

    onChangeStatus() {
        this.listItemService.changeListItemStatus(this.listItem.id);
    }
}
