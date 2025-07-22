import { defineConfig } from "sanity";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: 'default',
  title: 'Blog-site', // <-- Isse apne project ka naam do
  projectId:"ksggt659",// <-- Replace with actual project ID
  dataset: 'production',
  schema: {
    types: schemaTypes,
  },
});
