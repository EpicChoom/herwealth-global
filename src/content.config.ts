import { defineCollection } from "astro:content";
import { z } from "astro:schema";
import { glob } from "astro/loaders";

const eventsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    time: z.string(),
    location: z.string(),
    category: z.string(),
    registrationUrl: z.string().url().optional(),
    whoCanAttend: z.string().optional(),
    whatToBring: z.string().optional(),
    dressCode: z.string().optional(),
    cost: z.string().optional(),
    contactPerson: z.string().optional(),
    skillLevel: z.string().optional(),
    status: z.enum(["upcoming", "coming-soon", "past"]).default("coming-soon"),
    featured: z.boolean().default(false),
  }),
});

const academyCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/academy" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    shortDescription: z.string(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
    order: z.number().optional(),
  }),
});

const resourcesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    url: z.string().optional(),
    skillLevel: z.string().optional(),
    relatedTrack: z.string().optional(),
    status: z.enum(["available", "coming-soon"]).default("coming-soon"),
  }),
});

export const collections = {
  events: eventsCollection,
  academy: academyCollection,
  resources: resourcesCollection,
};
