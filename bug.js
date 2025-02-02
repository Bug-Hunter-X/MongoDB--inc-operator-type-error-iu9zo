```javascript
// Incorrect use of $inc operator
db.collection.updateOne({"_id":ObjectId("65596827627e8a6a699e0001")},{$inc:{likes:1}});
// Correct use of $inc operator, only numbers are supported
db.collection.updateOne({"_id":ObjectId("65596827627e8a6a699e0001")},{$inc:{likes:NumberInt(1)}});
```