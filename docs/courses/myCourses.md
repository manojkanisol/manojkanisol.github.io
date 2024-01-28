---
sidebar_position: 1
---

The Api will retrive all courses for particular user

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
          pageNumber: '',
          pageSize: '',
          sortKey: '',
          ordering: '',
          searchKey: '',
          featureId: '',
          authorId: '',
          categoryId: '',
          subcategoryId: '',
          userId: **Number**,
          price: '',
        }
```