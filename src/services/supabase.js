import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://snagwldqfuujpjfdhequ.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuYWd3bGRxZnV1anBqZmRoZXF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2MzIzNDEsImV4cCI6MjAwODIwODM0MX0.cfy8ObKqIOvjt9a2wPfCk-U4hqxMoG4U9jCOHhOADZk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
