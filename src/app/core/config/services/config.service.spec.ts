import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ConfigService } from './config.service';
import { config, Config } from '../config';

describe('ConfigService', () => {
  let configService: ConfigService;
  let http: HttpTestingController;
  let baseUrl: string;
  let hardcodedConfig: Config;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  beforeEach(() => {
    configService = TestBed.get(ConfigService);
    http = TestBed.get(HttpTestingController);
    baseUrl = 'assets/config/config.json';
    hardcodedConfig = {
      mode: 'test',
      table: { pagination: [5, 10, 200] }
    };
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(configService).toBeTruthy();
  });

  it('HTTP: loadExternalConfig()', async () => {
    let actualSettings: Config;

    const promise = configService.loadExternalConfig().then((settings) => {
      actualSettings = settings;

      expect(actualSettings.mode).toBe('test');
      expect(configService.getValues().mode).toBe('test');
      return settings;
    });

    http.expectOne(baseUrl).flush(hardcodedConfig);
    return promise;
  });
});
