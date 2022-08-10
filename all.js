//．透過 axios 實做註冊 post 網路請求
/*let obj = {
    email: 'ooo1992xxx@gmail.com',
    password: '12345678'
  }

  axios.post('https://hexschool-tutorial.herokuapp.com/api/signup' , obj)
  .then(function (response) {
    console.log(response.data); 
  })

  .catch(function (error){
    console.log(error);
  })
*/

// 註冊功能
const accountReg = document.querySelector('.accountReg');
const passwordReg = document.querySelector('.passwordReg');
const sendReg = document.querySelector('.sendReg');

sendReg.addEventListener('click', function (e) {
  callSingUp(); //callSingUp 等到被呼叫才會執行
})

// 登入功能
const accountLog = document.querySelector('.accountLog');
const passwordLog = document.querySelector('.passwordLog');
const sendLog = document.querySelector('.sendLog');

sendLog.addEventListener('click', function (e) {
  callSingIn();
})

// 註冊函式
function callSingUp() {
  if (accountReg.value.trim() == "" || passwordReg.value.trim() == "") {
    alert("請輸入正確資訊");
    return;
  }
  let obj = {};
  obj.email = accountReg.value;
  obj.password = passwordReg.value;
  console.log(obj);
  //判斷是否註冊成功
  axios.post('https://hexschool-tutorial.herokuapp.com/api/signup', obj)
    .then(function (response) {
      if (response.data.message == "帳號註冊成功") {
        alert("恭喜帳號註冊成功");
      } else {
        alert("帳號註冊失敗，此帳號已有人使用");
      }
      // 資料庫儲存資料後，將欄位設為空字串做清空動作
      accountReg.value = "";
      passwordReg.value = "";
    })
    .catch(function (error) {
      console.log(error);
    });
}
// 登入函式
function callSingIn() {
  if (accountLog.value.trim() == "" || passwordLog.value.trim() == "") {
    alert("請輸入正確資訊");
    return;
  }

  let obj = {};
  obj.email = accountLog.value;
  obj.password = passwordLog.value;
  console.log(obj);
  //判斷是否登入成功
  axios.post('https://hexschool-tutorial.herokuapp.com/api/signin', obj)
    .then(function (response) {
      if (response.data.message == "登入成功") {
        alert("恭喜帳號登入成功");
      } else {
        alert("帳號登入失敗，請再次確認資料是否正確");
      }
      // 資料庫儲存資料後，將欄位設為空字串做清空動作
      accountLog.value = "";
      passwordLog.value = "";
    })
    .catch(function (error) {
      console.log(error);
    });
}

// 陣列資料操作 練習
// let arr=[1,2,3,4,5];
// let newArr = arr.map(function(item){
//   console.log(item);
//   return item >3;
// })
// console.log(arr);
// console.log(newArr);

// 函式陳述式
// function numA (x){
//   return x*x;
// }
// console.log(numA(3));

// // 函式表達式
// const numB = function(x){
//   return x*x ;
// }
// console.log(numB(3));

// // 箭頭函式
// const numC = (X) => {
//   return x*X;
// }

// 箭頭函式 & 函式陳述式對照
// const numA = function (x) {
//   return x * x;
// }

// const numB = (x , y) => {
//   const a = 3;
//   const b = 4;
//   return a * b * x * y;
// }

// console.log(numA(3));
// console.log(numB(4, 5));

// // 箭頭函式
// const num =(x) => {
//   return `數字相乘 ${x*x} `;
// }  
// console.log(num(3));

// // 箭頭函式再縮寫
// const num2 =(x) =>  `數字相乘 ${x*x} `;
// console.log(num(4));

//陣列 map 搭配箭頭函式寫法
// const data = [1, 8, 13, 20];
// const newData = data.map(function (item) {
//   return item + 2;
// })
// console.log(newData);

// //map搭配箭頭函式寫法，保留return跟大括號。(範例如下)
// const data2 = [1, 8, 13, 20];
// const newData2 = data.map((item) => {
//   return item + 2;
// })
// console.log(newData);

// //map搭配箭頭函式，並且移除return。只適合一行的寫法(範例如下)
// const data3 = [1, 8, 13, 20];
// const newData3 = data.map((item) => item + 2) //參數如果只有一個也可以寫成data.map(item => item + 2)
// console.log(newData);

// let arr = [1,2,3,4,5];
// let newArr = arr.map((item) => {
// return item *3;
// });
// const num = () => 9;
// num();

// const numC =() =>9;
// console.log(numC());

// let data = [1,2,3,4,5];
// const dataD = data.map((item) => {const a =2; return item *a});
// console.log(dataD)

// const dataE = data.map((item) => item *2);
// console.log(dataE);

// map filtrer 範例比較
let data = [20, 30, 40, 50, 80];

// 使用 Map 產生的陣列與原陣列長度相同，不影響原陣列的值
let newData = data.map((item) => {
  if (item > 40) {
    return item;
  }
  //   item<40 的情況下，沒有 return 任何東西會填入 undefined
});
console.log(newData); //[false,false,false,true,true]

// filter產生的陣列由符合條件的值所組成，不影響原陣列的值
let filterData = data.filter((item) => {
  return item > 40;
  //   item < 40，不填入任何東西到新陣列中
});
console.log(filterData);

// forEach 方法不會產生新陣列，需要額外宣告一個陣列進行儲存
let forEachData = [];
data.forEach((item) => {
  if (item > 40) {
    forEachData.push(item);
  }
});
console.log(forEachData);
