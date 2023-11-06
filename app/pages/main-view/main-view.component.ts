import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {

  board: Board = new Board('Test board', [
    new Column('Countries', [
      "Argentina",
      "Germany",
      "Spain",
      "Egypt",
      "Cameroon",
      "Chile",
      "Nigeria",
      "Kenya",
      "Brazil",
      "France",
      "Peru",
      "Romania",
    ]),
    new Column('Europe', [

    ]),
    new Column('Africa', [

    ]),
    new Column('South America', [

    ])
  ]);


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  europeColumn = this.board.columns.find(column => column.name === 'Europe');
  africaColumn = this.board.columns.find(column => column.name === 'Africa');
  southAmericaColumn = this.board.columns.find(column => column.name === 'South America');

  check() {
    // console.log(this.europeColumn, this.africaColumn, this.southAmericaColumn);
    const europeCountriesToCheck = ["Romania", "France", "Spain", "Germany"];
    const africaCountriesToCheck = ["Egypt", "Nigeria", "Cameroon", "Kenya",];
    const southAmericaCountriesToCheck = ["Brazil", "Argentina", "Peru", "Chile"];


    // console.log(this.europeColumn.countries);
    const allEuropeCountriesChecked = europeCountriesToCheck.every(country => this.europeColumn.countries.includes(country))
    const allAfricaCountriesChecked = africaCountriesToCheck.every(country => this.africaColumn.countries.includes(country))
    const allSouthAmericaCountriesChecked = southAmericaCountriesToCheck.every(country => this.southAmericaColumn.countries.includes(country))
    if (allEuropeCountriesChecked && allAfricaCountriesChecked && allSouthAmericaCountriesChecked) {
      console.log('Perfect!!');
      alert('Excelent ✅')
    } else {
      console.log('Keep Trying...');
      alert('❌Keep Trying...')
    }

  }

}
