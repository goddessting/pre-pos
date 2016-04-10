/*function count_same_elements(collection) {

    var collection_count = [{key:collection[0], count:1}];
    var j = 0;

	for(var i = 0; i < collection.length-1; i++)
	{
	    if(collection[i+1].length > 1)
	    {
		var element=collection[i+1].split("-");
		collection_count.push({key:element[0], count:parseInt(element[1])});
		j++;
	    }
	    else
	    {
		if(collection[i+1] === collection[i])
			collection_count[j].count++;
		else
		{
			collection_count.push({key:collection[i+1], count:1});
			j++;
		}
            }

	}
    return collection_count;
}*/
function count_same_elements(collection) {
  var result = [];
  var str=[];

  for (var i = 0; i < collection.length; i++) {

    if (collection[i].length === 1) {
      if (i == 0)
        result.push({key: collection[i], count: 1});
      else {
        for (var j = 0; j < result.length; j++)
          if (collection[i] === result[j].key) {
            result[j].count++;
            break;
          }
        if (j >= result.length)
          result.push({key: collection[i], count: 1});
      }
    }
    else {
      str = collection[i].split('');
      if (i == 0)
        result.push({key: str[0], count:parseInt(str[2])});
      else {
        for (var j = 0; j < result.length; j++)
          if (str[0] === result[j].key) {
            result[j].count = result[j].count +parseInt(str[2]);
            break;
          }
        if (j >= result.length)
          result.push({key: str[0], count:parseInt(str[2])});
      }
    }
  }
  return result;
}



