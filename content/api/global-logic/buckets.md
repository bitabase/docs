---
id: buckets
title: Buckets
path: API / Global Logic / Buckets
---

## Buckets
Buckets are collections of documents that are stored in a database. They are used to group documents together based on a common theme or purpose.

For example, to create a bucket called `example` you would make the following call:

```javascript
fetch('https://api.bitabase.net/buckets', {
  method: 'post',
  headers: {
    'Authorization': 'Bearer {get this from your account dashboard}',
  }
  body: {
    id: 'example',
    isPublic: true
  }
})
```

This will return an object containing information about your user and your session details.

```javascript
{
  "id": "example",
  "isPublic": true,
}
```

## Making requests
When accessing any of the Bitabase Management API's you must provide an authorization token. You can manage these in your account settings.
