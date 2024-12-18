---
title: Next Edition
author: Mark Wylde
authorURL: https://markwylde.com
---

I have been on a mission for the last five years to create a simple, scalable, distributed nosql database and so far it has taken many shapes.

The current, and hopefully soon ready for release version, scraps most of the previous work.

I really struggled with the Raft consensus algorithm. I was trying to build a lot of it from scratch and it was just too much.

Finally I decided to pivot this project to use Nats JetStream as a write ahead log, using it's event source queue as an ordered list of transactions.

Having it take care of the distributed state has freed up my time to focus on the actual database experience.

## Launched

I've deployed the current version onto bitabase.com and it's running well.

There is a warning for now that the data can and probably will be lost frequently until beta launch.
