// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'

// export default defineConfig({
//   name: 'default',
//   title: 'shareme',

//   projectId: 'xbhige8w',
//   dataset: 'shareme',

//   plugins: [structureTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
// })

const { defineConfig } = require('sanity');
const { structureTool } = require('sanity/structure');
const { visionTool } = require('@sanity/vision');
const { schemaTypes } = require('./schemas');

module.exports = defineConfig({
  name: 'default',
  title: 'shareme',

  projectId: 'xbhige8w',
  dataset: 'shareme',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});

