import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas/utils'
import {media} from 'sanity-plugin-media'

export const projectId = 'egeioo87'
export const dataset = 'production'

export default defineConfig({
  name: 'meubelherstel',
  title: 'meubelherstel',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(), media()],
  schema: {
    types: schemaTypes,
  },
})
