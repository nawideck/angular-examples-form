import { Component, OnInit, Input } from '@angular/core';

/**
 * Convert object to json and display it pretty
 *
 * @export
 * @class JsonViewerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss']
})
export class JsonViewerComponent implements OnInit {
  /**
   * Object to print in json format
   *
   * @type {object}
   * @memberof JsonViewerComponent
   */
  @Input() object: object;

  /**
   * Creates an instance of JsonViewerComponent.
   * @memberof JsonViewerComponent
   */
  constructor() {}

  /**
   * Angular ngOnInit native function
   *
   * @memberof JsonViewerComponent
   */
  ngOnInit() {}
}
