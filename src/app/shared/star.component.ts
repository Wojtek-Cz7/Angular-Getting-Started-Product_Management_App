import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
@Component(
    {
        selector: 'pm-star',
        templateUrl: './star.component.html',
        styleUrls: ['./star.component.css']
    }
)
export class StarComponent implements OnChanges {
    // properties
       @Input() rating: number;   // property marked with @Input() decorator
        starWidth: number;
        @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    // method
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
    onClick(): void {
        console.log(`The rating ${this.rating} was clicked!`);
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
