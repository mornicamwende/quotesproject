import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quote[] = [
    new Quote(1,'Life quote','Life is a journey','mwende','andiwo',new Date(2020,3,14)),
    // new Quote(2,'Life quote','Life is a journey','mwende','andiwo',new Date(2010,12,22)),
    // new Quote(3,'Life quote','Life is a journey','mwende','andiwo',new Date(2020,8,29)),
  ];
  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }



  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  // completeQuote(isComplete, index){
  //   if (isComplete) {
  //     this.quote.splice(index,1);
  //   }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
