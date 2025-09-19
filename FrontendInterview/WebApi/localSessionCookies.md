1.  # Local Storage
1. Stores data in the browser with no expiration.
2. Data persists even after closing/reopening the browser.
3. Storage capacity is around 5–10 MB depending on browser.
4. Accessible via JavaScript:
   localStorage.setItem("key", "value");
   localStorage.getItem("key");
   localStorage.removeItem("key");


2. # Session Storage
1. Stores data per browser tab/session
2. Data is cleared when the tab or browser is closed.
3. Storage capacity similar to localStorage (~5 MB).
   sessionStorage.setItem("key", "value");
   sessionStorage.getItem("key");


3. # Cookies
1. Small pieces of data (around 4 KB) stored in the browser
2. Can have an expiration date set.
3. Sent automatically with each HTTP request to the server.
4. Useful for authentication, tracking, preferences.

document.cookie = "username=John; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";

