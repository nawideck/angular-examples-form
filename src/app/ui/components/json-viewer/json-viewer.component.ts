import { Component, OnInit, Input } from '@angular/core';

/**
 * Convert object to json and display it pretty
 *
 * @export
 */
@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss']
})
export class JsonViewerComponent implements OnInit {
  /**
   * Object to print in json format
   */
  @Input() object: object;

  /**
   * Creates an instance of JsonViewerComponent.
   */
  constructor() {}

  /**
   * Angular ngOnInit native function
   */
  ngOnInit() {}
}
