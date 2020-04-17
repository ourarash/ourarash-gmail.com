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
        question: "Where was Google's first international office?",
        img: "assets/google/international.jpg",
        answers: [
          "Google London",
          "Google Tokyo",
          "Google Canada",
          "Google Ireland",
        ],
        explanation: "Google launched their first international office in Tokyo.",
        correctAnswer: 1
      },
      {
        question: "Our mission statement is: to organize the world's information and make it universally _________ and useful.",
        img: "assets/google/mission.png",
        answers: [
          "acceptable",
          "available",
          "accessible",
          "addressable",

        ],
        explanation: "to organize the world's information and make it universally accessible and useful.",
        correctAnswer: 2
      },

      {
        question: "What was the original name of the Google search engine?",
        img: "assets/google/massage.jpg",
        answers: [
          "FootRub",
          "YouRub",
          "BackRub",
          "PageRub",
        ],
        explanation: "They called BackRub because the program analyzed the web’s “back links” to understand how important a website was, and what other sites it related to.",
        correctAnswer: 2
      },

      {
        question: "Which actor stars as bogus Google intern in the movie The Internship?",
        img: "assets/google/intern.jpg",
        answers: [
          "Robert Deniro",
          "Al Pacino",
          "Jesse Eisenberg",
          "Vince Vaughn",

        ],
        explanation: "When Billy (Vince Vaughn) and Nick (Owen Wilson) find themselves downsized, Billy decides that, despite their complete lack of technological savvy, they should work for Google",
        correctAnswer: 3
      },
      {
        question: "Which one is the first Google Doodle?",
        img: "assets/google/doodle.jpg",
        answers: [
          "PacMan",
          "BurningMan",
          "IronMan",
          "SuperMan",
        ],
        explanation: "Larry and Sergey wanted to let users know that the Google team was at Burning Man, in case the servers went down.",
        correctAnswer: 1
      },
      {
        question: "Which one is NOT an Android name?",
        img: "assets/google/android.jpg",
        answers: [
          "Cupcake",
          "Donut",
          "Ice Cream Cone",
          "Kit Kat",
        ],
        explanation: "Ice Cream Sandwich is correct!",
        correctAnswer: 2
      },
      {
        question: "Google is ....",
        img: "assets/google/google.png",
        answers: [
          "Larry Page's real last name",
          "Sergey Brin's real last name",
          "A misspelling",
          "A word that means 10^100",
        ],
        explanation: "Google is a misspelling of the word Googol which means 10^100.",
        correctAnswer: 2
      },

      {
        question: "Where is the second rooftop at LAX?",
        img: "assets/google/rooftop.jpeg",
        answers: [
          "Bin 1",
          "Bin 2",
          "Bin 7",
          "Bin 6",
        ],
        explanation: "Bin 2 and bin 7 have rooftops. Bin 7's rooftop is much smaller.",
        correctAnswer: 2
      },

      {
        question: "What company was at LAX campus before Google?",
        img: "assets/google/binacular.jpg",
        answers: [
          "Chiat Day",
          "Snapchat",
          "Craigslist",
          "UCLA",
        ],
        explanation: "Frank Gehry originally designed the Binoculars Building for Chiat Day, which is the American division of the advertising agency TBWA Worldwide. ",
        correctAnswer: 0
      },

      {
        question: "How much money per day would you receive as incentive if you don't park at LAX campus?",
        img: "assets/google/parking.jpg",
        answers: [
          "$6.75",
          "$6.81",
          "$6.85",
          "$7.00",
        ],
        explanation: "The current incentive is $6.85. See go/A2B-LAX for more info.",
        correctAnswer: 2
      },


    ]
  }
  constructor(private _bottomSheet: MatBottomSheet) { this.init(); }

  ngOnInit(): void {
  }

  onClickMe(i) {
    if (this.data.qas[this.current_index].correctAnswer === i) {
      this._bottomSheet.open(BottomSheetCorrect);
      this.showExplanation = true;

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


