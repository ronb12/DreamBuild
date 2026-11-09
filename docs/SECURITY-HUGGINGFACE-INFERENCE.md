# DreamBuild cloud inference secret handling

The old browser VITE_HUGGINGFACE_API_KEY integration exposed a real key
if one were ever configured. The new client uses an authenticated Firebase
callable that reads HUGGINGFACE_API_KEY only from Secret Manager.

The old Git .env.backup value was a placeholder rather than a usable token.
No tokens were rotated, revoked, provisioned, or deployed in this change.

Cloud inference remains inactive until the owner configures the secret,
chooses a cost-appropriate server-side HUGGINGFACE_MODEL if needed, and
deploys only the new callable function. Signed-in users are limited to
20 inference requests per UTC day and bounded prompt and output sizes.
Built-in and template fallback remain the alternative.

Run node --test tests/security/huggingface-transport.test.mjs for source
security regression checks. This is not an end-to-end provider test.
