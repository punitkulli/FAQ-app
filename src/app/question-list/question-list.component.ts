import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Question } from '../models/question.model';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit{
  questions: Question[];

  constructor(private dataservice: DataService) { }

 ngOnInit(){
  this.questions = this.dataservice.getQuestions();
 }

 addQuestion(question: Question){
  this.dataservice.addQuestion(question);
}


}

