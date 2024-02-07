import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'Quiz Editor';

  quizzes = [
    {
      name: 'Quiz 1',
      showDelete: false,
    },

    {
      name: 'Quiz 2',
      showDelete: false,
    },

    {
      name: 'Quiz 3',
      showDelete: false,
    },
  ];


addFunnyQuiz = () => {
  this.quizzes = [
    ...this.quizzes
    , {
      name: 'Funny Quiz'
      , showDelete: true
    }
  ];
};

deleteQuiz = (q:any) => {
  this.quizzes = this.quizzes.filter(x => x !== q );
};

addQuiz  = () => {
  this.quizzes = [
    ...this.quizzes
    , {
      name: this.newQuizName
      ,showDelete:false
    }
  ];
  this.newQuizName = '';
};

newQuizName = '';

}
