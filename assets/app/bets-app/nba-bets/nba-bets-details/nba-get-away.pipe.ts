import {PipeTransform, Pipe} from "@angular/core";


@Pipe({name: 'away'})
export class getAwayTeamPipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        if (!value) return value;

        var index = value.indexOf('vs');

        return value.substr(0, index)

    }
}
