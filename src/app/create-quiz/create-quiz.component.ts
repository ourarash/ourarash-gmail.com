import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { QuestionService } from '../question-class/question.service';
import { QuestionBase } from '../question-class/question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss'],
  providers: [QuestionService]

})
export class CreateQuizComponent implements OnInit {
  name = new FormControl('');
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  questions$: Observable<QuestionBase<any>[]>;
  questionService;
  constructor(private fb: FormBuilder, service: QuestionService) {
    this.name.setValue("Ari");
    this.questionService = service;
    this.questions$ = service.getQuestions();

    this.profileForm.patchValue({
      address: { street: "Ahmadabad" }
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  addQuestion(){
    this.questionService.addQuestion();
    this.questions$ = this.questionService.getQuestions();
  }
}
