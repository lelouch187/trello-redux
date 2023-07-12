export interface ITask {
   title:string;
   description:string;
   comments: string[];
}

export interface ICard{
   titleCard:string;
   tasks:ITask[]
}