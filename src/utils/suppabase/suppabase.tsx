import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

import {createClient} from '@supabase/supabase-js';
  
const supabase = createClient(Config.SUPPABASE_URL as string, Config.SUPPABASE_KEY as string, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
export default supabase;
