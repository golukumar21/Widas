import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'searchFilter',
    pure: false
})
export class SearchPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            return (
                val.title === null ? val.title
                    : val.title.toString().trim().toLowerCase().includes(args.toString().trim().toLowerCase()))
                || (val.subtitle === null ? val.subtitle
                    : val.subtitle.toString().trim().toLowerCase().includes(args.toString().trim().toLowerCase()))
        });
    }
}