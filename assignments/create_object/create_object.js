function CreateObject(arr) {
    // Write your code here
    arrToObj ={}
    for (var i=0 ;i<arr.length-1;i+=2)
    {
      arrToObj[arr[i]]=arr[i+1]
    }
    return arrToObj

}

module.exports = CreateObject;
