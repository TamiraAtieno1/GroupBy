function groupBy(array, propertyName) {
    var result = {};
  
    array.forEach(function (object) {
      var propertyValue = object[propertyName];
  
      if (result.hasOwnProperty(propertyValue)) {
        result[propertyValue].push(object);
      } else {
        result[propertyValue] = [object];
      }
    });
  
    return result;
  }
  
  var personalInfo = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Chicago'},
    { name: 'Charlie', age: 35, city: 'New York' },
    { name: 'Dave', age: 40, city: 'Chicago' }
  ];
  
  var groupByCity = groupBy(personalInfo, 'city');
  console.log(groupByCity);
  

 