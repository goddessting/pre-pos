function create_collection_C(item, collection_C) {

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


function create_collection_BC(collection_C, object) {
  for (var i = 0; i < collection_C.length; i++) {
    for (var j = 0; j < 4; j++) {
      if (collection_C[i].key === object.value[j]) {
        collection_C[i].count = collection_C[i].count - parseInt(collection_C[i].count / 3);
      }
    }
  }
}

function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
  var collection_C = [{key: collection_a[0], count:1}];

  for (var i = 1; i < collection_a.length; i++) {
    create_collection_C(collection_a[i], collection_C);
    }
    create_collection_BC(collection_C, object_b);


  return collection_C;

}
