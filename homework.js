// Remove a specific Element from an array ( no predefined functions allowed)

var arr = ["maria","aicha","assia","manal","maria"];
function DeleteFromArray(arr,x){
   arr2 =[];
   var k=0;
   for(let i=0;i<arr.length;i++){
       if(arr[i] != x){
           arr2[k]=arr[i];
           k++;
       }
   }
    return(arr2) ;
}

console.log(DeleteFromArray(arr,"maria"));
// Remove Duplicates from Sorted Array( no predefined functions allowed) For the Monday 14th 
function DeleteDouble(tab){
    for(let i=0;i<tab.length;i++){
        for(let j=i+1;j<tab.length;j++){
            if (tab[i]==tab[j]){
                for(let k=j;k<tab.length;k++){
                    tab[k]=tab[k+1];
                }
            }
        }
    }
    
     return(tab);
}
tab =[1,2,3,4,5,5,6,7,5,8,5,9];
console.log(DeleteDouble(tab));
