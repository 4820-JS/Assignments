//console.log("Whatever")

//errors are your best friend
//let 2number = 456;
// Always go to your error, as it will tell you exactly where you went wrong.

//Booleans: when we comprare one to another, we get a true or false answer.

//let num = 4
//const nume = `4`
//console.log(num===nume)
//console.log(num==nume)

//console.log(5 < 4)
//console.log(5 <= 4)
//console.log(5 < 5.0)
//console.log(5 <= 5.0)
//console.log(5 == 4)
//double equals compare value ONLY
//console.log("Double equals")
//console.log(5 == "5.0")
//console.log(5 == "5")
//triple equals compares type an value
//console.log("Triple equals")
//console.log(5 === "5")
//console.log(5 === "5.0")

//Variable have two keywords, let and const.
//Variable naming is by convention "camel case"
//fisrt word is lowercase, and all subsequent words are title case:
//for example:
//let superSecretPassword
//Pytohn is snake case hello_world
// let my-super-secret-password = 1234 kabab case won't work

//==================================================================
//NEW STUFF. Logic
//==================================================================

//if/else statements help the computer make a decision.
//IF somenting is true, then run step by step instructions.

//let weather = 'sunny';

//if(weather === "Raining"){
//    console.log("I'll wear my coat")
//}else if(weather === "sunny"){
//    console.log("I'll wear my sunglasses")
//}else{
//    console.log("I'll go naked")
//}

//conditionals rn ONE time only.

//AND and OR
//AND only runs if both sides of && are true
//OR runs if any one side is true ||


//Switch statements
//let fruit1 = "apple"
//let fruit1 = "coco"
//let fruit1 = "plum"

//switch(fruit1){
//    case "apple":
//        console.log("This is an apple")
//        break
//    case "coco":
//        console.log("This is a coco")
//        break        
//    case "plum":
//        console.log("This is a plum")
//        break
//    default :
//        console.log("This is not a fruit")
//    }

    switch(true){
        case (5 > 6):
            console.log("This is an apple")
            break
        case (5 === "5"):
            console.log("This is a coco")
            break        
        case (4 >= 4):
            console.log("This is a plum")
            break
        default :
            console.log("This is not a fruit")
        }

