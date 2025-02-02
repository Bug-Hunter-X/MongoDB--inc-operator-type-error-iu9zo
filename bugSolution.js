```javascript
// Correct use of $inc operator
db.collection.updateOne({"_id":ObjectId("65596827627e8a6a699e0001")},{$inc:{likes:NumberInt(1)}});
```