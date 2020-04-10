import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetError } from '../BottomSheetError/BottomSheetError';
import { BottomSheetCorrect } from '../BottomSheetCorrect/BottomSheetCorrect';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  showExplanation = false;
  current_index = 0;
  disabled = [];
  data = {
    qas: [
      {
        question: "What we should NOT do during quarantine time?",

        answers: [
          "Wash hands",
          "Netflix binge watch",
          "Work on EE599 project",
          "Stay home"
        ],
        explanation: "One should not spend all of his/her quarantine time watching movies!",
        correctAnswer: 1
      },
      {
        question: "Who was a USC faculty member?",

        answers: [
          "Lester R. Ford",
          "Stephen Hawking",
          "Richard E. Bellman",
          "Robert W. Floyd"
        ],
        explanation: "Richard E. Bellman was a professor at the University of Southern California. In 1965, Bellman became Professor of Mathematics, Electrical Engineering, and Medicine at the University of Southern California.",
        correctAnswer: 2
      },
      {
        question: "Which one is the slowest sorting algorithm compared to others?",

        answers: [
          "Merge sort",
          "Bubble sort",
          "Selection sort",
          "Heap sort"
        ],
        explanation: "While both Selection and Bubble sort are O(n), bubble sort has much worse performance.",
        correctAnswer: 1
      },
      {
        question: "What’s the one thing highschool students in the US are most likely to forget to bring to class?",

        answers: [
          "Pen/Pencil",
          "Homework",
          "Book",
          "Calculator"
        ],
        explanation: "In a survey of 100 US high school students, 62 students answered Pen/Pencil.",
        correctAnswer: 0
      },
      {
        question: "What’s the most common excuse when students don’t do homework?",

        answers: [
          "No time/Too busy",
          "Work/Job",
          "What homework??",
          "Forgot",
        ],
        explanation: "In a survey of 100 US high school students, 39 students answered they forgot.",
        correctAnswer: 3
      }, {
        question: "If a student is distracted by their phone, what app are they most likely playing with?",

        answers: [
          "Instagram",
          "Snapchat",
          "YouTube",
          "Zoom"
        ],
        explanation: "In a survey of 100 US high school students, 68 students answered Snapchat.",
        correctAnswer: 1
      }, {
        question: "What are professors' drink of choice?",

        answers: [

          "Milk",
          "Tea",
          "Apple martini",
          "Coffee",

        ],
        explanation: "It's a very well known fact that professors cannot go on without coffee.",
        correctAnswer: 3
      },
      {
        question: "If a professor provides a hint for a question in the midterm, what does it mean?",
        answers: [

          "Hint is for stupid people. Ignore!",
          "The professor has too much extra time.",
          "We should use it!",
          "What hint?",

        ],
        explanation: "Just pay attention to hints guys.",
        correctAnswer: 2
      }]
  }
  constructor(private _bottomSheet: MatBottomSheet) { this.init(); }

  ngOnInit(): void {
  }

  onClickMe(i) {
    if (this.data.qas[this.current_index].correctAnswer === i) {
      this._bottomSheet.open(BottomSheetCorrect);
      this.showExplanation= true;

    } else {
      this._bottomSheet.open(BottomSheetError);
    }
    this.disabled[i] = true;
  }

  init() {
    this.disabled = [];

    for (let i of this.data.qas[this.current_index].answers) {
      this.disabled.push(false);
    }
    this.showExplanation = false;
  }

  onReset() {
    this.disabled = [];
    this.init();
  }
  previous() {
    this.current_index = Math.max(this.current_index - 1, 0);
    console.log('this.current_index: ', JSON.stringify(this.current_index));
    this.init();
  }
  next() {
    this.current_index = Math.min(this.current_index + 1, this.data.qas.length - 1);
    console.log('this.current_index: ', JSON.stringify(this.current_index));
    this.init();
  }

}


