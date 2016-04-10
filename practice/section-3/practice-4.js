function create_updated_collection(collection_a, object_b)
{
  var collection_C = [];
  for (var i = 0; i < collection_a.length; i++) {
    create_collection_C(collection_a[i], collection_C);
  }
  create_collection_BC(collection_C, object_b);
  return collection_C;
}

function create_collection_C(item, collection_C)
{
  if (item.length > 1) {
    var element = item.split('-');

    if (collection_C.length === 0)
      collection_C.push({key: element[0], count: parseInt(element[1])});
    else {
      for (var j = 0; j < collection_C.length; j++) {
        if (element[0] === collection_C[j].key) {
          collection_C[j].count += parseInt(element[1]);
          break;
        }
      }
      if (j >= collection_C.length) {
        collection_C.push({key: element[0], count: parseInt(element[1])});
      }
    }
  }
  else {
    for (var j = 0; j < collection_C.length; j++) {
      if (item === collection_C[j].key) {
        collection_C[j].count++;
        break;
      }
    }
    if (j >= collection_C.length) {
      collection_C.push({key: item, count: 1});
    }
  }
}

function create_collection_BC(collection_C, object_b)
{
  for (var i = 0; i < collection_C.length; i++) {
    for (var j = 0; j < object_b.value.length; j++) {
      if (collection_C[i].key === object_b.value[j]) {
        collection_C[i].count = collection_C[i].count - parseInt(collection_C[i].count / 3);
      }
    }
  }
}
