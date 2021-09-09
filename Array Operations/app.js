//1)Initialize an array with 10 elements and print only the even among them
let arr = [13, 34, 45, 56, 99, 42, 6, 15, 22, 101];
for (let i=0; i<arr.length; i++) {
    if(arr[i] % 2  == 0){
        console.log(arr[i]);
    }
}


//2)Create an array with 5 city names and print them in reverse order
let cityNames = ["Pune", "Mumbai", "Kolkata", "Kanpur", "Chennai"];
for(let j=4; j>=0; j--){
    console.log(cityNames[j]);
}