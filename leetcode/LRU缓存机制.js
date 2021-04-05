/**
 * @param {number} capacity
 * 
 * 实现最近最少使用的缓存机制
 * 
 * 
 */
 var LRUCache = function(capacity) {
     this.LRUCache = new Map
     this.capacity = capacity
};

LRUCache.prototype.get = function(key) {
    if (this.LRUCache.has(key)) {
        var tem = this.LRUCache.get(key)
        this.LRUCache.delete(key)
        this.LRUCache.set(key,tem)
        return tem
    }else{
        return -1
    }
};

LRUCache.prototype.put = function(key, value) {
    if (this.LRUCache.has(key)) {
        this.LRUCache.delete(key)
    }
    this.LRUCache.set(key,value)
    if (this.LRUCache.size>this.capacity) {
        //entries 返回一个对象 { value: [ 23, '23' ], done: false }
        //删除时注意格式
        this.LRUCache.delete(this.LRUCache.entries().next().value[0])
    }
};


  var obj = new LRUCache(2)
 // var param_1 = obj.get(2)
obj.put(2223,"28888883")
obj.get(2223)
 