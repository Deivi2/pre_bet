import {PipeTransform, Pipe} from "@angular/core";


@Pipe({name: 'home'})
export class getHomeTeamPipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        if (!value) return value;

        var index = value.indexOf('vs');

        return value.substr(index+3, value.length)

    }
}
