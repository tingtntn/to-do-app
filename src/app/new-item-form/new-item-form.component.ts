import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ListItem } from '../to-do-list/list-item.model';
import { ListItemService } from '../to-do-list/list-item.service';

@Component({
    selector: 'app-new-item-form',
    templateUrl: './new-item-form.component.html',
    styleUrls: ['./new-item-form.component.css'],
})
export class NewItemFormComponent implements OnInit {
    title: string;
    creator: string;
    myImage = 'assets/images/add.png';
    newItemForm: FormGroup;

    constructor(private listItemService: ListItemService) {}

    getNewItems() {
        return (<FormArray>this.newItemForm.get('newItems')).controls;
    }

    onAddNewItem() {
        let newItem = new FormGroup({
            title: new FormControl(null, Validators.required),
            creator: new FormControl(null, Validators.required),
        });
        (<FormArray>this.newItemForm.get('newItems')).push(newItem);
    }

    onDeleteNewItem(index) {
        console.log('delete');
        (<FormArray>this.newItemForm.get('newItems')).removeAt(index);
    }

    ngOnInit(): void {
        this.newItemForm = new FormGroup({
            newItems: new FormArray([]),
        });
    }

    onAddNewListItems() {
        console.log(this.newItemForm);
        let newItems: Array<ListItem> = this.newItemForm.value.newItems;
        newItems.forEach((newItem: ListItem) => {
            let id = this.listItemService.size + 1;
            this.listItemService.addListItem(
                new ListItem(id, newItem.title, newItem.creator, false)
            );
            this.listItemService.increaseSizeByOne();
        });

        this.newItemForm = new FormGroup({
            newItems: new FormArray([]),
        });
    }
}
