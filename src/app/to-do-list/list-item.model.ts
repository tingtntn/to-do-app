export class ListItem {
    public id: number;
    public title: string;
    public creator: string;
    public isFinished: boolean;

    constructor(
        id: number,
        title: string,
        creator: string,
        isFinished: boolean
    ) {
        this.id = id;
        this.title = title;
        this.creator = creator;
        this.isFinished = isFinished;
    }
}
