---
id: your-first-database
title: Your First Database
sidebar_label: Your First Database
lastModified: 2024-12-18
---

# Step 1: Create an account
Navigate over to <a target="_new" href="https://app.bitabase.com">app.bitabase.com</a> and enter your email address to signup/login.

# Step 2: Create a new bucket
Click the "Buckets" menu item then at the bottom of the screen you will see a text field called "New bucket name". Enter any bucket name you want. Note that your bucket name must be a valid sub domain, as it will become https://example.bitabase.net, where you will access your database.

# Step 3: Create a document
Now your database has been created, it's time to get techy. Open your Chrome (or other browsers) DevTools and we'll paste some code to create our first collection:

> You will need to replace YOURDATABASE with the actual name of your database, and put your authorization token from the information in the my account page

```javascript
fetch('https://YOURDATABASE.bitabase.net/my-first-doc', {
  method: 'put',
  body: JSON.stringify({
    hello: 'world',
  }),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer {get token from your my account page}',
  }
}).then(r => r.json()).then(console.log)
```

# Step 4: Go see your collection
Great, you now have a collection. Let's go over and see what's in there. In a new tab goto:
https://YOURDATABASE.bitabase.net/my-first-doc

If all went well you should see the following:

```json
{
    "hello": "world",
}
```
