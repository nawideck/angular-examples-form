/**
 * Information of a field in error
 *
 * @export
 */
export class FieldErrorInfo {
  /**
   * Name of the error
   */
  public name: string;

  /**
   * Information about the error.
   * The type is any because angular can generate any types.
   * See the angular documentation
   */
  public info: any;

  /**
   * Creates an instance of FieldErrorInfo.
   * @param name name of field
   * @param info information of field
   */
  constructor(name: string, info: any) {
    this.name = name;
    this.info = info;
  }
}
