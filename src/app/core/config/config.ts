export interface Config {
  mode: string;
  table: Table;
}

export interface Table {
  pagination: number[];
}

export const config: Config = {
  mode: 'dev',
  table: {
    pagination: [5, 10, 15]
  }
};
