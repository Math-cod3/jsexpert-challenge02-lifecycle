class ObjectMethodsService {
  // constructor(name, age){
  //   this.name = name;
  //   this.age = age;
  // }
  getEnhancedObject(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    rawObject.valueOf = function (){
      return this.age;
    }
    return rawObject
  }

  getEnhancedObject2(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    const obj = rawObject
    obj.toString = function (){
      const msg = `[name="${rawObject.name}",age=${rawObject.age}]`
      return msg
    }
    return rawObject;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    // TODO: return an enhanced object **WITHOUT** implementing `valueOf` nor `toString`.
    // Note: Implementing `toString` and `valueOf` will NOT be allowed in this function.
    return null;
  }
}

module.exports = ObjectMethodsService;
