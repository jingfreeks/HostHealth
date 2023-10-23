import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://jvwsefqafnqsekwdachn.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2d3NlZnFhZm5xc2Vrd2RhY2huIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3MzI5ODEsImV4cCI6MjAxMjMwODk4MX0.hSpjGa3C-qph7_nLjLKoKA3Kggjn5AfXVoLHqoFAyU4';

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
export default supabase;
