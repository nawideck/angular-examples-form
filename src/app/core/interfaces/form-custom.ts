/**
 * Describe component form implementation
 *
 * @export
 */
export interface FormCustom {
  /**
   * Create angular formGroup
   *
   */
  createForm(): void;

  /**
   * Populate form with current model
   *
   */
  populateForm(): void;

  /**
   * Send data form to the server
   *
   */
  onSubmit(): void;

  /**
   * Prepare the entity before save
   *
   * @returns  Entity prepared
   */
  prepareSaveEntity(): any;
}
