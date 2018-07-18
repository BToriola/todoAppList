import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '../../../../node_modules/angularfire2/database';

@Injectable()
export class TodoService {

  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList(){
    this.toDoList = this.firebasedb.list('titles')
    return this.toDoList;
  }
  addTitle(title: string){
    this.toDoList.push({
      title: title,
      isChecked: false

    });
  }

  checkorunCheckTitle($key: string, flag: boolean){
    this.toDoList.update($key, {isChecked: flag })
  }
  removeTitle($key: string){
    this.toDoList.remove($key);
  }
}
