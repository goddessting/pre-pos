function count_same_elements(collection) {
  //在这里写入代码
    var collection_count = [{key:collection[0], count:0}];
    for(var i = 0; i < collection.length; i++)
    {
        for(var j = 0; j <= collection_count.length; j++)
        {
            if(collection[i] === collection_count[j].key)
            {
                collection_count[j].count++;
            }
            else
            {
                collection_count.push({key:collection[i], count:1});
            }
        }
    }
    return collection_count;
}
