// let my_pet = "Biro";

// if(condition){
//     //block of code
// }


// Due to the corona virus lock down, the Nigeria Goverment have
// decided to give money to citizens to be able to know those that
// would be qualified for this money, a condition has ben set.
// The condition is that for everyone to receive this money, they 
// must have a bank account.

// PROBLEM: You are required to write a program that check if
// a citizen has a bank accout and decide if he/she qualifies for 
// the money.



// SWITCH STATDMENT

// let has_bank_account = "yes";


// switch(has_bank_account){
//     case "no":
//         alert("I am not qualified for the palliative");
//         break;
//     case "yes":
//         alert(" I am qualified for the palliative");
//         break;

//     default:
//         alert("Not interested");
//         break;
// }


//  let real_number = 15;

//  while(real_number>=10){
//     console.log("The number" + " " + real_number + " " + " is less than 10");
//     real_number --
//  }


// let a = 2;
// do{ 
//     console.log(a);
//     a ++ 
// }while(a<10)


// let name = 'my name is Mr Bola\'s';
// console.log(name);




// for(i=10; i>=2; i--){
//     console.log("my value is " + i);
// }

// for(let i=0; i<3; i++){
//     console.log('hello ' + i);
// }

// for(let i = 0; i<10; i++){
//   if(i===5){
//     console.log("This is the sixth loop");
//   }else{
//     console.log("this is the " + i)
//   }
// }


// for(let i = 1; i<=20; i++){
//     // if(i%2===0){
//     //     console.log("The value of " + i + " is even number")
//     // }else{
//     //     console.log("The value of " + i + " is odd number")
//     // }

//     (i%2===0) ? console.log("The value of " + i + " " + "is even number") : console.log("The value of " + i + " is odd number")
// }


// let description =  'This is Ade\'s Book'
// console.log(description);


// let message = 'My name is Tunde and I downloaded Saheed\'s tutorial it\'s belong to hi\'s'
// console.log(message)


// let another_message = "This is Bola tutorial \"Activate 3.0\""
// console.log(another_message)

// let note = `Hello's my there's his's her's`
// console.log(note)


// let message = 'Hello';

// let name_one ='Bola'

// // let result = message + ' ' + name_one;
// // console.log(result);

// message +=  " " + name_one;
// console.log(message.length);






// let course_message = "We are having frontend end course";


// // let result = course_message.lastIndexOf('z');
// // console.log(result);



// let result = course_message.charAt(10);
// console.log(result);



// let name_one = 'Frontend development is cool'

// let result = name_one.split("")
// console.log(result);

// let my_first_array = [1, 2, 6, 9, "Tunde", "Saheed", true, [100, 1]];
// console.log(my_first_array);

//  let multi_dimension = [1, 3, ["Bola", "Tola", ["Yinka", 66, [3, "Tunde"]]], [true, false, 20, ["Kazeem"]], "Willaims"]


// let result = multi_dimension[2][2][2][1];
// console.log(result);

// let result_another = multi_dimension[3][3][0]
// console.log(result_another)




// CONCAT() METHOD
// let arr_one = [5, 200, 50, 80];

// let arr_two = ["Shola", true];

// let combine_arr =  arr_one.concat(arr_two);
// console.log(combine_arr);


// POP() METHOD

// let arr_items = ["Rukayat", "Tunde", "Kazeem"]; 

// // console.log(arr_items[0]);
// // console.log(arr_items[1]);
// // console.log(arr_items[2])


// for (let i = 0; i<arr_items.length; i++){
//     console.log(arr_items[i]);
// }


// let my_array = [
//     2,
//     ["apple", "orange", "mango"],
//     ["rose", "lotus", "lily"],
//     ["cabbage", "carrot", "beans"],
//     [["Bola"]]
// ];
  
// console.log(my_array[4][0][0])


// for (let i = 0; i<my_array.length; i++){
//     for (j = 0; j<my_array[i].length; j++){
//          for (let k = 0; k<my_array[i][j].length; k++){
//             console.log(my_array[i][j][k]);
//          }
        
//     }
// }



// let arr_task =[
//     ["Dog", "Goat", "Lion"],
//     ["Apple", "Mango", "Orange", "Pawpaw"],
//     [2, ["Tunde", "Saheed", "Kazeen"]],
//     "Sodeeq",
//     [["Rukayat"]],
//     [true, ["Halimat", "Williams", "Quadri"]]
// ]

// Using for loop, access item "Tunde", "Saheed", "Kazeen", "Rukayat" Halimat", "Williams", "Quadri

// Using if statement, access Quadri

// Using if statement, access Lion

// Using if statement, access true
 
// using if statement, access 2



//FUNCTION

// function alimat(){
//    console.log("We are just learning javascript function"); //Function Declaration
// }


// alimat();

// function sub_number (){
//    let num1 = 5;
//    let num2 =10;
//    let result = num1 - num2;
//    console.log(result);
// }

// sub_number()


// let first_name = "Tunde";
// let last_name  = "Balogun"
// let full_name = first_name  + " " + last_name;
// console.log(full_name);

// let another_first_name = "Saheed";
// let another_last_name = "Okunlaya";
// let another_full_name = another_first_name + " " + another_last_name;
// console.log(another_full_name)





// function multiply_num (first_name, last_name){ 
//    let full_name = first_name + " " +  last_name;
//    console.log(full_name);  
// }

// multiply_num("Tunde", "Balogun");
// multiply_num("Saheed", "Okunlaya");


// let arr1 = [1, 2, 3];
// let arr2 = ["Bola"];
// let arr_result = arr1.concat(arr2);
// console.log(arr_result)


// function our_array(arr1, arr2){
//     let arr_result = arr1.concat(arr2);
//     return arr_result;
// }

// console.log(our_array([1, 3, 6], ["Bola"]));


// Write a function and name the function "ourDivision" that take two value as paramter 
// and perform division on them.

// Also do for Multiplication and addition



// function comapre_names (name1, name2){
//      let out_put ="";
//      if(name1===name2){
//        return out_put = "You have the same name"
//      }else{
//        return out_put = "You have different name"
//      }
// }

// console.log(comapre_names("Saheed", "Otunba"));
// console.log(comapre_names("Kazeem", "Kazeem"))


// function comapre_num(num1, num2){
//    let our_value =  "";
//    if(num1===num2){
//       return  our_value = num1 + " equal " + num2
//    }else{
//       return our_value = num1 + " Not equal " + num2
//    }
// }

//    console.log(comapre_num(3, "3"))




//Write a function to test range of value, if the number<=3 "It is low", if the number
// is <=7 we say "It is medium", if the number is <=10 we say "It is high"


// function test(num){
//    let output = "";
//    if(num<=3){
//       return output ="The number is low"
//    }else if(num<=7){
//       return output = "The number is medium"
//    }else if(num<=10){
//       return output = "The number is high"
//    }else{
//       return output ="Out of range"
//    }
// }


//    console.log(test(11))


// function test(num){
//    let out_put = ""
//    switch(num){
//       case 0:
//       case 1:
//       case 2:
//       case 3:
//          return out_put ="The number is low";
//          break;

//       case 4:
//       case 5:
//       case 6:
//       case 7:
//          return out_put = "The number is medium";
//          break;
//       case 8:
//       case 9:
//       case 10:
//          return out_put =  "The number is high";
//          break;
//       default:
//          return out_put = "Out of range"
//    }
//    return out_put;
// }


// console.log(test (11))


// let color = "red";

// switch(color){
//    case "red":
//       console.log("red color");
//       break;
//    case "yellow":
//       console.log("yellow color");
//       break;
//    case "white":
//       console.log("white color");
//       break;
//    default:
//       console.log("color does not exist");
//       break;

// }


// let bola = 100;

// switch(bola){  // 0-3 low, 4-7 medium, 8-10 high
//    case 0:
//    case 1:
//    case 2:
//    case 3:
//       console.log(`The number ${bola} is low`); 
//       break;
//    case 4:
//    case 5:
//    case 6:
//    case 7:
//       console.log(`The number ${bola} is medium`); 
//       break;
//    case 8:
//    case 9:
//    case 10:
//       console.log(`The number ${bola} is high`); 
//       break;
//    default:
//       console.log(`Number does not exist`); 
  
     
// }


// // function test_tenary(num){
// //    let out_put ="";
// //     (num<=3) ? out_put= "low"  : (num<=7) ? out_put= "medium" :  (num<=10) ? out_put="high" : out_put="our of range";
// //     return out_put;
// // }
// // console.log(test_tenary(11))


// // //   






// // Template literal


//  Write a function that sum all items in an array;


// function sum_array (finn){
//    let sum = 0;
//    for(let i=0; i<finn.length; i++){
//       sum = sum + finn[i]
//    }
//    return sum;
// }

// console.log(sum_array([3, 4, 6])) 

// console.log(sum_array([3, 4, 6, 100, 200, 5000]))


// Write a function that multply the whole items in an array



// function multiply_num(arr){
//    let mult = 1;
   
//    for (let i=0; i<arr.length; i++){
//       mult += arr[i]
//    }
//    return mult;
// }

// console.log(multiply_num([10, 5, 2, 3]))



// function my_function(){
//    console.log("This is regular way of writing function");
// }


                                        

 let my_function = ()=>{
   let result ="This is arrow function";
   console.log(result);
 }

//  my_function()



//  ARRAY METHODS

// 1)   FOREACH
// 2)   MAP
// 3)   FILTER

// 4)   FIND

// 5)  REDUCE


let arr = [3, 4, 6, 11];


   //  arr.forEach((bola)=>{
   //      console.log(bola)
   //  })


   // for(let i = 0; i<arr.length; i++){
   //    console.log(arr[i])
   // }



   // let our_function = (arr)=>{
   //      let sum =1;
   //      arr.forEach((item)=>{
   //            sum *= item;
   //      })
   //      return sum;
   // }



   // console.log(our_function([3, 5, 10, 18]))


// let map_function = (arr)=>{
//    let map_item = arr.map((element)=>{
//           return element * element
//    })
//    return map_item;
// }


// console.log(map_function([1, 2, 3]))




// let map_function = (arr)=>{
   
//     let array_map = arr.map((item)=>{
//       return item
//     })
//     return array_map;
// }


// console.log(map_function(["Bola", "Saheed", "Rukayat", "Kazeem", "Sodeeq", "Tunde"]))



// let filter_function = (arr)=>{
//        let array = arr.filter((item)=>{
//          return item <=100
//        })
//        return array;
// }


// console.log(filter_function([20, 40, 60, 80, 100, 120, 140]))


let ourNumber = [2, 3.5, 20, 30.6, 50.9, 8];

let filter_interger_square = (arr)=>{
       let result = arr.filter((item)=>{
            return Number.isInteger(item)
       }).map((item)=>{
            return item *item
       }).filter((item)=>{
           return item > 100
       }).map((item)=>{
           return item * 2
       })
       return result;
}


// console.log(filter_interger_square(ourNumber))





// let figure = "3"

// let actual = parseInt(figure);   // 3



// console.log(figure===actual)

let new_change = "NEW STUFF"




























































































 












































































































