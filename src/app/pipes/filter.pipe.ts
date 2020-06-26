import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], filter: string): any[] {
    console.log('arr', arr);
    console.log('filter', filter);
    const arrFiltered: any[] = [];
    filter = filter.toUpperCase().replace(/ /g, '');
    if (filter == '') {
      return arr;
    } else {
      for (let i = 0; i < arr.length; i++) {
        var flag = false;
        let all = '';
        Object.keys(arr[i]).forEach(key => {
          if (arr[i][key] != null) {
            var regex = arr[i][key];
            all += regex.toString().toUpperCase().replace(/ /g, '');
            if (all.toString().toUpperCase().replace(/ /g, '').includes(filter)) {
              flag = true;
            }
          }
        })
        if (flag)
          arrFiltered.push(arr[i]);
      };
      return arrFiltered;
    }

  }

}
