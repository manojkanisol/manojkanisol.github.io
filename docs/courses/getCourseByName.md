---
sidebar_position: 2
---


The Api will retrive course Details for particular course

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
          courseId: **Number**,
          userId: **Number**,
          searchKey: **String**,
        }
```