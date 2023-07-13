export interface IComments {
   id:string;
   value:string;
}

export interface ITask {
   id:string;
   title:string;
   description:string;
   comments: IComments[];
}

export interface ICard{
   id:string;
   titleCard:string;
   tasks:ITask[]
}
export interface IActiveTask{
   isVisible:boolean;
   indexCard:string|null;
   indexTask:string|null;
}
