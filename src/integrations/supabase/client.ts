
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://piufckgtnbcrwvlavqll.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdWZja2d0bmJjcnd2bGF2cWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1NTc3OTksImV4cCI6MjA1ODEzMzc5OX0.5HtnSoYARxZIoTUaUn5pexuZeCgy7i3YIp5O3iftPb0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Fonction utilitaire pour obtenir l'URL publique d'une image
export const getImageUrl = (path: string): string => {
  // Si c'est déjà une URL externe complète
  if (path.startsWith('http')) {
    return path;
  }
  
  // Si c'est un chemin qui commence par un slash, c'est une image dans le bucket
  if (path.startsWith('/')) {
    const fileName = path.substring(1); // Enlever le slash initial
    const { data } = supabase.storage.from('images').getPublicUrl(fileName);
    return data.publicUrl;
  }
  
  // Sinon, c'est un chemin local dans le dossier public
  return path;
};
