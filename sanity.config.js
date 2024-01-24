import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'shareme',

  projectId: 'xbhige8w',
  dataset: 'shareme',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
