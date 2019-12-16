import { Pipe, PipeTransform } from '@angular/core';
/**
 * Transform objet to pretty json string
 *
 * @export
 */
@Pipe({
  name: 'prettyJsonPipe'
})
export class PrettyJsonPipePipe implements PipeTransform {
  /**
   * Angular "transform" native method
   *
   * @param value value to transform
   * @returns value transformed
   */
  transform(value: any): string {
    return JSON.stringify(value, null, '\t');
  }
}
