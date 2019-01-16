import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { DataService } from './services/data.service';
import { QuestionComponent } from './question/question.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QuestionListComponent,
    QuestionComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [ 
    DataService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
