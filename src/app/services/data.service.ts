import { Injectable } from "@angular/core";
import { Question } from "../models/question.model";

@Injectable()
export class DataService{
    questions: Question[];

    constructor(){
        // this.questions = [
        //     {
        //       text:'what is your name?',
        //       answer: 'My name is Ram',
        //       hide: true
        //     },
      
        //     {
        //       text:'what is your hobby?',
        //       answer: 'My hobby is Cricket',
        //       hide: true
        //     },
      
        //     {
        //       text:'where you come from?',
        //       answer: 'I came from Karnataka',
        //       hide: true
        //     },
        //   ];
    }

// get questions from local storage
    getQuestions(){
      if(localStorage.getItem('questions') === null){
        this.questions = [];
      }else{
        this.questions = JSON.parse(localStorage.getItem('questions'));
      }
        return this.questions;
    }



// add question to local storage
    addQuestion(question: Question){
      this.questions.unshift(question);

      // local var init
      let questions;
      if(localStorage.getItem('questions') === null){
        questions = [];
        // push new question
        questions.unshift(question);
        // set new array to local storage
        localStorage.setItem('questions', JSON.stringify(questions));
      }else{
        questions = JSON.parse(localStorage.getItem('questions'));
        // add new question
        questions.unshift(question);
        // reset local storage
        localStorage.setItem('questions', JSON.stringify(questions));
      }
    }



// remove question from local storage
    removeQuestion(question: Question){
      for(let i=0; i<this.questions.length; i++){
        if(question == this.questions[i]){
          this.questions.splice(i,1);
          localStorage.setItem('questions',JSON.stringify(this.questions));
        }
      }
    }


}