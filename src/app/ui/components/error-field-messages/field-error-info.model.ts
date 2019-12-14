/**
 * Information of a field in error
 *
 * @export
 * @class FieldErrorInfo
 * @implements {FieldErrorInfoInterface}
 */
export class FieldErrorInfo {
  /**
   * Name of the error
   *
   * @type {string}
   * @memberof FieldErrorInfo
   */
  public name: string;

  /**
   * Information about the error.
   * The type is any because angular can generate any types.
   * See the angular documentation
   *
   * @type {*}
   * @memberof FieldErrorInfo
   */
  public info: any;

  /**
   * Creates an instance of FieldErrorInfo.
   * @param {string} name
   * @param {*} info
   * @memberof FieldErrorInfo
   */
  constructor(name: string, info: any) {
    this.name = name;
    this.info = info;
  }
}
