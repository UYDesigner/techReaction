interface todoItem{
    id : string;
    text:string;
    
}
 interface TodoState {
  todos: todoItem[];
}
export type {todoItem, TodoState}