---
sidebar_position: 3
---

The Api will make the purchase of the course

---------------------------------

##### Method
POST

##### Headers
```
   {
    'Content-type': 'application/json',
    'token': `Bearer ${token}`, 
    'userId': **Number**
    }
```

##### Request Body
```
       {
          seqno: **Number**,
          userId: **Number**,
          type: 1,
        }
```