import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../dropdown-question/dropdown-question';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from '../textbox-question/textbox-question';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {
  questions: QuestionBase<string>[] = [

    new DropdownQuestion({
      key: 'brave',
      label: 'Bravery Rating',
      options: [
        { key: 'solid', value: 'Solid' },
        { key: 'great', value: 'Great' },
        { key: 'good', value: 'Good' },
        { key: 'unproven', value: 'Unproven' }
      ],
      order: 1
    }),
    new TextboxQuestion({
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 2
    }),
    new TextboxQuestion({
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
      order: 3
    })
  ];

  getQuestions() {
    return of(this.questions.sort((a, b) => a.order - b.order));
  }

  addQuestion() {
    let order = this.questions.length + 1;
    console.log('order: ', JSON.stringify(order));
    this.questions.push(new TextboxQuestion({
      key: 'question' + order,
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: order
    }));
    console.log('this.questions: ', JSON.stringify(this.questions, null, 2));
  }
}