import { Subject } from 'rxjs';
import { ListItem } from './list-item.model';

export class ListItemService {
    listItemDeleted = new Subject<ListItem[]>();
    listItemAdded = new Subject<ListItem[]>();
    listItemChanged = new Subject<ListItem[]>();
    size: number = 2;

    listItems: ListItem[] = [
        new ListItem(1, 'Mop the floor', 'Tu-Ning', false),
        new ListItem(2, 'Wash the clothes', 'Joe', false),
    ];

    getAllListItems() {
        return this.listItems.slice();
    }

    deleteListItem(id: number) {
        this.listItems = this.listItems.filter((listItem) => {
            return listItem.id !== id;
        });
        this.listItemChanged.next(this.listItems.slice());
    }

    addListItem(listItem: ListItem) {
        this.listItems.push(listItem);
        this.listItemChanged.next(this.listItems.slice());
    }

    deleteSelected() {
        this.listItems = this.listItems.filter((listItem) => {
            return listItem.isFinished !== true;
        });
        this.listItemChanged.next(this.listItems.slice());
    }

    changeListItemStatus(id: number) {
        let index = this.listItems.findIndex((listItem) => {
            return listItem.id === id;
        });
        this.listItems[index].isFinished = !this.listItems[index].isFinished;
        this.listItemChanged.next(this.listItems.slice());
    }

    increaseSizeByOne() {
        this.size = this.size + 1;
    }
}
