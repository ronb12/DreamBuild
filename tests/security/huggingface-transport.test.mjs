import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const client = readFileSync(new URL('../../src/services/cloudAIService.js', import.meta.url), 'utf8')
const backend = readFileSync(new URL('../../functions/src/index.js', import.meta.url), 'utf8')
const env = readFileSync(new URL('../../env.example', import.meta.url), 'utf8')

test('Hugging Face private tokens cannot be supplied through Vite', () => {
  assert.doesNotMatch(client, /VITE_HUGGINGFACE_API_KEY/)
  assert.doesNotMatch(client, /api-inference\.huggingface\.co/)
  assert.match(client, /httpsCallable\(/)
  assert.doesNotMatch(env, /^VITE_HUGGINGFACE_API_KEY=/m)
})
test('backend is authenticated, quota-limited, and uses Secret Manager', () => {
  assert.match(backend, /defineSecret\('HUGGINGFACE_API_KEY'\)/)
  assert.match(backend, /secrets: \[huggingFaceApiKey\]/)
  assert.match(backend, /!request\.auth\?\.uid/)
  assert.match(backend, /resource-exhausted/)
  assert.match(backend, /router\.huggingface\.co/)
})
