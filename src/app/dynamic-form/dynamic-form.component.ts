import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../question-class/question-base';
import { QuestionControlService } from '../question-class/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit, OnChanges {

  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    console.log('this.questions: ', JSON.stringify(this.questions));
    this.form = this.qcs.toFormGroup(this.questions);
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes.questions: ', JSON.stringify(changes.questions));
    console.log("In changes");

    // changes.prop contains the old and the new value...
    this.form = this.qcs.toFormGroup(this.questions);

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}