import { createClient } from "@supabase/supabase-js";

const URL = "https://jmvsuqiovdumgrfxrmgr.supabase.co";
const API_KEY = "sb_publishable_ESrT-VORvVafLe7mdNpZIg_Df09QTF3";

export const supabase = createClient(URL, API_KEY);

