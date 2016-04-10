function count_same_elements(collection) {
  var temp = [];

  for (var i = 0; i < collection.length; i++) {
    var item = collection[i];
    split_item(item, temp);
  }

  return temp;
}


function split_item(item, temp) {
  var element = [];

  if (item.length > 1) {
    element = item.split("");
    var e = 0;
    for (var j = 1; j < element.length; j++) {
      if (parseInt(element[j]) >= 0 && parseInt(element[j]) <= 9)
        e = e * 10 + parseInt(element[j]);
    }
    for (var i = 0; i < temp.length; i++) {
      if (element[0] === temp[i].name) {
        temp[i].summary += e;
        break;
      }
    }

    if (i >= temp.length) {
      temp.push({name: element[0], summary: e});
    }
  }
  else
    slipt_item_1(item,temp);
}


function slipt_item_1(item,temp) {

  if (temp.length == 0) {
    temp.push({name: item, summary: 1});
  }
  else {
    for (var i = 0; i < temp.length; i++) {
      if (item === temp[i].name) {
        temp[i].summary++;
        break;
      }
    }
    if (i >= temp.length)

      temp.push({name: item, summary: 1});

  }
}
