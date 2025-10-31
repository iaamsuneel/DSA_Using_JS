# Understanding OAuth and JWT

# What Authentication Means (Frontend View)
👉 As a frontend developer, your job in authentication is to:
Collect user credentials (like email/password or Google login).
Send them to the backend API securely.
Receive a token (like JWT) from the backend.
Store it (usually in localStorage or httpOnly cookie).
Attach that token to future API calls (to prove who you are).
Protect routes (show dashboard only when logged in).

2. JWT Authentication (Most Common in React Apps)
🧠 Concept:
After a successful login, the backend gives you a JWT token.
You store it.
For every protected API call, you send it in the header like:
Authorization: Bearer <token>

The backend verifies it and responds

# JWT (JSON Web Token)
1. JWT is a token format used to securely transmit user identity and claims between client and server.
2. It’s stateless, meaning the server doesn’t store session info — everything is inside the token.
Commonly used for authentication (login).

# Summary (JWT)
Used for: Login system you build yourself.
Stores: User info (like id, role).
Frontend role: Save token, send it in headers, protect pages.
Pros: Simple, fast, stateless.
Cons: Token can expire — you’ll need refresh tokens

# Example of a JWT: xxxxx.yyyyy.zzzzz
1. Header: contains token type & signing algorithm (e.g., HS256)
2. Payload: user data (id, role, etc.)
3. Signature: ensures integrity (server validates it using a secret key)


# OAuth 2.0 (Login with Google, GitHub, etc.)
🧠 Concept:
OAuth lets users log in with another app’s identity — like “Login with Google”.
So instead of:
typing email/password → you just click “Login with Google”.
The browser opens Google’s login screen, user allows access,
then Google sends back a token that proves identity.

# Summary (OAuth)
Used for: Third-party login (Google, Facebook, Microsoft).
Frontend role: Use SDK or library to get token from provider.
Backend role: Verify that token with Google.
Pros: Secure, no password handling.
Cons: Setup is a bit more complex.

# OAuth 2.0
1. OAuth is an authorization framework — it lets one app access another app’s data securely, without sharing passwords.
Example:
You log in to a new site using “Login with Google” → that’s OAuth 2.0 in action.
2. OAuth itself does not define tokens — but uses JWT (or similar tokens) as part of its flow.

