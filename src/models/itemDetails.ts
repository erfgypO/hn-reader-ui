export interface ItemDetails {
    by: string;
    descendants: number;
    id: number;
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
    comments: Comment[];

}

export interface Comment {
    by: string;
    id: number;
    parent: number;
    text: string;
    time: number;
    type: string;
}
