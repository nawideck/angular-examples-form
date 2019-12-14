import { Pipe, PipeTransform } from '@angular/core';
/**
 *
 * Transform objet to pretty json string
 *
 * @export
 * @class PrettyJsonPipePipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'prettyJsonPipe'
})
export class PrettyJsonPipePipe implements PipeTransform {
  /**
   * Angular "transform" native method
   *
   * @param {*} value
   * @returns {string}
   * @memberof PrettyJsonPipePipe
   */
  transform(value: any): string {
    return JSON.stringify(value, null, '\t');
  }
}
