// Code your solution in this file!

 function returnFirstTwoDrivers (array) {
   const newarr = []
   newarr.push(array[0])
   newarr.push(array[1])
   return newarr
}

 function returnLastTwoDrivers (array) {
   const newarr = []
   newarr.push(array[array.length - 1])
   newarr.push(array[array-2])
   return newarr
}
