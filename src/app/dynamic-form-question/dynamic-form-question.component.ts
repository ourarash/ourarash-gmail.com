
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../question-class/question-base';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  get isValid() {
    // console.log('this.question.key: ', JSON.stringify(this.question.key));
    // console.log('this.form.controls: ', (this.form.controls));

    if (this.form.controls[this.question.key]) {
      return this.form.controls[this.question.key].valid;
    }
  }
}