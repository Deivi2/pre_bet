import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name: 'search_game'
})
export class searchGamePipe implements PipeTransform {
    transform(value: String , args: string[]){
        if (!value) return value;

        if(value.escapeHTML().includes('L')){
            return value
        }
    }
}
