import { createClient } from "contentful"
// initializing the right identifier(spaceID, accessToken) for contenful with .env.local
export const client = createClient({
	space: 'ljphob4tkl1j',
	accessToken: 'uR5r2XKTlmMWCBjOsPL7GcFc5juxsZTYvQ_r8TyI18c',
  })

