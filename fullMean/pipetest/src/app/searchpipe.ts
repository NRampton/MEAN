import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(users: any[], field: string, value: string): any[] {
    if (!users) return [];
    return users.filter(it => it[field] != value);
  }
}