console.log('Hi')

// const MarksMass = 78;
// const MarksHeight = 1.69;
// const JohnsMass = 92;
// const JohnsHeight = 1.95;

// const MarksMass = 95;
// const MarksHeight = 1.88;
// const JohnsMass = 85;
// const JohnsHeight = 1.76;

// const MarksBMI = MarksMass/ (MarksHeight * MarksHeight);
// const JohnsBMI = JohnsMass / (JohnsHeight * JohnsHeight);
// // const HigherBMI = MarksBMI > JohnsBMI;\

// // console.log( 'MarksBMI = ' +MarksBMI + '\n\JohnsBMI = ' + JohnsBMI+ "\n\Mark has a Higher BMI than John"+' '+ HigherBMI )

// if (MarksBMI > JohnsBMI){
//     console.log(  "Mark Bmi " + MarksBMI+ " has a Higher BMI than John Bmi "+ JohnsBMI)
// }
// else{
//     console.log( "John Bmi "+ JohnsBMI+ " has a Higher BMI than Mark Bmi " + MarksBMI)
  
// }




// let DM1 = Number(prompt("please enter the score of dolphin's first match:"));
// let DM2 = Number(prompt("please enter the score of dolphin's second match:")); 
// let DM3 = Number(prompt("please enter the score of dolphin's third match:"));
// let KM1 = Number(prompt("please enter the score of koala's first match"));
// let KM2 = Number(prompt("please enter the score of koala's second match"));
// let KM3 = Number(prompt("please enter the score of koala's third match"));
// let DMavg = (DM1+DM2+DM3)/(3);
// let KMavg = (KM1+KM2+KM3)/(3);

// console.log(DMavg);
// console.log(KMavg)
// if ((DMavg <= 100.00) || (KMavg <= 100.00)){
//     console.log("the score is less than what is required");
// } else {
//     if(DMavg>KMavg) {
//         console.log("Dolphin's have won the Match!!");
//     }
//     else if(DMavg === KMavg){
//         console.log("The Match is drawn!!");
//     }
    
    
//     else {
//         console.log("Koala's have won the Match!!");
//     }
// }

// let value = '';
// switch(value){
//     case 'shyam':
//         console.log('Hello')
//         break;
//     case 'adil':
//         console.log('hi')
//         break;
//     case 'rk' :
//         console.log('welcome')
//         break;
//     default :
//         console.log('default')            
// }

// const Bill = Number(prompt("Enter the Restrant Bill : "));
// const Tip = ((Bill >=50) && (Bill <= 300)) ? (Bill * 0.15) : (Bill * 0.2)
// const TotalBill= Bill + Tip;
// console.log(`The Restrant Bill was = ${Bill} , The Tip was = ${Tip} ,and the total value =  ${TotalBill}`)

// //  Functions
// // running   //calling  // invocating function
//  function first(){
//      console.log('hello function')
//      const print = 'hello world'
//      return print
//  }

//  const out3=first();
//  console.log(out3)
//  const out4 =first();
//  console.log(out4)


//  function data(Bick, car){
//      console.log(`list of bicks ${Bick} and cars ${car}`)
//      const print = `list of bicks ${Bick} and cars ${car}`
//     return print;
//  }

//  const out = data(10, 12)
//  console.log(out)

//  const out1 = data(12, 11)
//  console.log(out1)


// // function Declaration
// function list(books){
//     return books + 260;
// }

// const out=list(40);
// console.log(out)


// // function Expression 
// // anonymous function
// const list1 = function (books){
//     return books + 350
// }

// const out1= list1(50);
// console.log(out1 , out)

// //Arrow Functions
// const age = birthYear => 2021 - birthYear;
// const out= age(1991);
// console.log(out)

// const age1 = () => 2021 - 1996;
// console.log(age1())

// // Calling Function
// function dept (section) {
//     return section * 30;
// }
// function students (inst, mech){
    
//         const inststu=dept(inst);
//  const mechstu=dept(mech);
//     const out= `no. of students at instrumentation ${inststu},
//     and No. of students at Mech ${mechstu}`;
//      return out;
 
// }
// console.log(students(6,4))
// console.log(students(5,3))
// console.log(students(4,8))


// const calcaveragea = (p1, p2, p3) => {
//      const calc = (p1+p2+p3)/3;
//      return calc;
// }
//  const team1 =calcaveragea(44 ,23, 71);
//  const team2 =calcaveragea(65 ,54, 49);
// console.log(team1, team2)

// function checkWinner(team1, team2){
//     if(team1 >= 2*team2){
//         console.log(`Dolphins win ${team1}`)
//     }
//     else if (team2 >= 2*team1){
//         console.log(`Koalas win ${team2}`)
//     }
//     else if (team2 === team1){
//         console.log(`Both Dolphins ${team1}  and Koalas ${team2} got Draw `)
//     }
//     else{
//         console.log('No team has won....')
//     }
  
// }
// checkWinner(team1, team2)
// checkWinner(10, 400);
// checkWinner(400, 10);
// checkWinner(100,100)


// const Mark = {
//     Name: 'Mark Miller',
//     Mass :78,
//     Height :1.69,
//     calcBMI : function (){
//         this.BMI =(this.Mass / (this.Height ** 2))
//         return this.BMI
//     } 
// }

// const John = {
//     Name: 'John Smith',   
//     Mass :92,
//     Height :1.95,
//     calcBMI : function(){
//        this.BMI = (this.Mass / (this.Height ** 2))
//        return this.BMI
//     } 
// }
// console.log(Mark.calcBMI(), John.calcBMI())
// console.log(Mark, John)
// if (Mark.BMI > John.BMI) {
// console.log(  `"${Mark.Name}'s BMI (${Mark.BMI}) is higher than ${John.Name}'s (${John.BMI})"`)
// }else{

//     console.log(`"${John.Name}'s BMI (${John.BMI}) is higher than ${Mark.Name}'s (${Mark.BMI})"`)
// }

// for (let num = 1; num <= 9 ; num++){
//     console.log(`Number of ${num}`)
// }


// coding challenge #4


const calcTip = function (bills){
    const bill= (bills >= 50 && bills <= 300 ) ? (bills * 0.15) : (bills * 0.2)
    return bill;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips =[];
const totals= [];

for(var i = 0; i < bills.length ; i++ ){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
}
console.log( tips, totals, bills)