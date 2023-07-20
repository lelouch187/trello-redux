export interface CommentsInterface {
   id:string;
   value:string;
}

export interface TaskInterface {
   id:string;
   title:string;
   description:string;
   comments: CommentsInterface[];
}

export interface BordInterface{
   id:string;
   titleBord:string;
   tasks:TaskInterface[]
}
export interface ActiveTaskInterface{
   isVisible:boolean;
   indexBord:string|null;
   indexTask:string|null;
}
