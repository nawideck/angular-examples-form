import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { config, Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  /**
   * Creates an instance of ConfigService.
   * @param httpClient Angular HttpClient
   */
  constructor(private httpClient: HttpClient) {}

  /**
   * Factory wich return
   *
   * @param appLoadService instance of Config Service
   * @returns function loadExternalConfig of this service
   */
  static factory(appLoadService: ConfigService): () => Promise<any> {
    return () => appLoadService.loadExternalConfig();
  }

  /**
   * Load external configuration file and store values in local Config object
   *
   * @returns Promise with configuration
   */
  loadExternalConfig(): Promise<any> {
    if (!environment.loadExternalConfig) {
      return Promise.resolve({});
    }

    const promise = this.httpClient
      .get('assets/config/config.json')
      .toPromise()
      .then((settings) => {
        // Store values in local config object
        Object.keys(settings || {}).forEach((k) => {
          config[k] = settings[k];
        });
        return settings;
      })
      .catch((error) => {
        return 'ko, no external configuration';
      });

    return promise;
  }

  /**
   * Get values from Config object
   *
   * @returns Config object
   */
  getValues(): Config {
    return config;
  }
}
