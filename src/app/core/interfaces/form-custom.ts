export interface FormCustom {
  /**
   * Create angular formGroup
   *
   * @memberof Form
   */
  createForm(): void;

  /**
   * Populate form with current model
   *
   * @memberof Form
   */
  populateForm(): void;

  /**
   * Send data form to the server
   *
   * @memberof Form
   */
  onSubmit(): void;

  /**
   * Prepare the entity before save
   *
   * @returns {*} Entity prepared
   * @memberof Form
   */
  prepareSaveEntity(): any;
}
