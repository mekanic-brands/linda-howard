'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/Studio.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import textBlock from '@//sanity/schemas/objects/textBlock'
import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import * as resolve from '@/sanity/plugins/resolve'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
import page from '@/sanity/schemas/documents/page'
import genericHeaderBlock from '@/sanity/schemas/objects/genericHeaderBlock'
import home from '@/sanity/schemas/singletons/home'
import settings from '@/sanity/schemas/singletons/settings'

import testimonials from './sanity/schemas/documents/testimonials'
import aboutBlock from './sanity/schemas/objects/aboutBlock'
import accordionBlock from './sanity/schemas/objects/accordionBlock'
import ctaBlock from './sanity/schemas/objects/ctaBlock'
import fullWidthContentBlock from './sanity/schemas/objects/fullWidthContentBlock'
import logoBlock from './sanity/schemas/objects/logoBlock'
import morphologyBlock from './sanity/schemas/objects/morphologyBlock'
import pairingBlock from './sanity/schemas/objects/pairingBlock'
import testimonialBlock from './sanity/schemas/objects/testimonialBlock'
import twoColContentBlock from './sanity/schemas/objects/twoColContentBlock'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Maia Evercrisp'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,
      // Documents
      testimonials,
      page,
      // Objects
      ctaBlock,
      aboutBlock,
      accordionBlock,
      twoColContentBlock,
      textBlock,
      genericHeaderBlock,
      pairingBlock,
      morphologyBlock,
      fullWidthContentBlock,
      logoBlock,
      testimonialBlock,
    ],
  },
  plugins: [
    structureTool({
      structure: pageStructure([home, settings]),
    }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft',
        },
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
