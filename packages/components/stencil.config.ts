import { Config } from '@stencil/core';
import fs from 'fs'

export const config: Config = {
  namespace: 'telements-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'docs-json',
      file: 'dist/telements.json'
    },
    {
      type: 'docs-custom',
      generator: ((jsonDocs: any) => {
        fs.writeFileSync('dist/telements-docs.json', JSON.stringify(jsonDocs, null, 4))
      })
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
