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

export interface IBord{
   id:string;
   titleBord:string;
   tasks:ITask[]
}
export interface IActiveTask{
   isVisible:boolean;
   indexBord:string|null;
   indexTask:string|null;
}
