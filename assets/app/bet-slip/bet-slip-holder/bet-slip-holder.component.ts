import {Component, Input, EventEmitter, Output, OnInit} from "@angular/core";


@Component({
    selector: 'bet-slip-holder',
    templateUrl: './bet-slip-holder.component.html',
    styleUrls: ['./bet-slip-holder.component.css']
})


export class betSlipHolderComponent implements OnInit{

    @Input() bets : any = [];

    ngOnInit(): void {
        console.log('Input from cmp holder' , this.bets);
    }


}