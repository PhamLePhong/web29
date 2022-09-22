alert("Hello word");
console.log("Hiện thị n gì mình đã ghi");
// chuỗi-string
("đây là 1 chuỗi");
("đây là 1 chuỗi");
// số-number
1;
1.5;
-1;
Infinity;
-Infinity;
NaN;
// not a number

// logic-bodien (đúng hoặc sai)
true;
false;
// giá trị đặc biệt
null;
undefined;

// keyword name = 'value'
// keyword: let, const, var
// name: chỉ băt đầu = ký tự, ko chứa các ký tự đặc biệt
// value: string, number, boolean, null undefined
let ten = "Phong";
let tuoi = " 20";
let biuty = "true";
console.log(ten);
console.log(tuoi);
console.log(biuty);
// camelCase từ đầu tiên viết thường , những từ sau viết hoa chữ cái đầu
// homNayNgayGiDo
// hằng số (giá trị mà mình có thể được xác định từ đầu chương trình và không bao giờ thay đổi) thì viết hoa nổi các từ bằng dấu gạch ngang
let NGAY_SINH = "07/10/2002";
console.log(NGAY_SINH);
let x = 1;
let y = 2;
// số học-Arithmectic
// so sánh
//  gán
//  logic
// Binary
// unary

let cong = x + y;
let tru = x - y;
let nhan = x * y;
let chia = x / y;

console.log(x < y);
console.log(x > y);

let z = 123;

-x;

typeof x;

"mười" + "ba";
// mười ba
let X = 1;
console.log(typeof x);

// function
// một đoạn mã được bọc trong khối mã và gán cho một tên biến
// Cho phép tái sử dụng mã nhiều lần nhiều nơi

// sử dụng cú pháp khai báo hàm
function funcName(fen, a, b, c) {
  console.log("hello," + fen + "");
}
funcName("phong");
funcName("fen");
funcName("fen");
funcName("fen");
// biểu thức hàm(giống khai báo biến)
const tambiet = function () {
  console.log("google");
};
tambiet();
function tong(a, b) {
  //   console.log(a + b);
  return a + b;
}
// tong(1, 2);
console.log(tong(1, 2));
console.log(tong(1, 5));
console.log(tong(1, 12));
console.log(tong(12, 2));

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

const currentYear = 2022;

function calcAge(yearOfBirth) {
  //   console.log(currentYear - yearOfBirth);
  return currentYear - yearOfBirth;
}
// calcAge(2002);
console.log("1+2=", add(1, 2));
console.log("3-2=", sub(3, 2));
console.log("10x20=", mul(10, 20));
console.log("12:2=", div(12, 2));
// calcAge("currentYear, calcAge");
console.log("tôi năm nay ", calcAge(2002), "tuổi");

/**
 * Tính chu vi hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Chu vi hình chữ nhật
 */
function findPerimeterOfRectangle(length, breadth) {
  return length + breadth;
}
// length(3);
// breadth(4);
console.log("chu vi hình chữ nhật", findPerimeterOfRectangle(3, 4));
/**
 * Tính diện tích hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Diện tích hình chữ nhật
 */
function findAreaOfRectangle(length, breadth) {
  return 2 * (length + breadth);
}
console.log("S hình chữ nhật", findAreaOfRectangle(3, 4));

/**
 * Tìm đường kính hình tròn
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Đường kính hình tròn
 */
function findDiameterOfCircle(r) {}

/**
 * Tìm chu vi hình tròn
 *
 * Quy ước PI = 3.14
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Chu vi hình tròn
 */
function findCircumferenceOfCircle(r) {}

/**
 * Tìm diện tích hình tròn
 *
 * Quy ước PI = 3.14
 *
 * Bình phương sử dụng toán tử ** hoặc Math.pow()
 *
 * @param {number} r Bán kính hình tròn
 *
 * @return {number} Diện tích hình tròn
 */
function findAreaOfCircle(r) {
  return 3.14 * r * r;
}
console.log("S hình tròn", findAreaOfCircle(4));

/**
 * Tính diện tích hình tam giác theo công thức Heron
 *
 * Link tham khảo công thức Heron: https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {number} Diện tích hình tam giác
 */

function findAreaOfTriangle(a, b, c) {
    return sprt((Math))
}

/**
 * Chuyển đổi nhiệt ở ở thang nhiệt Celsius sang Fahrenheit
 *
 * Tham khảo công thức chuyển đổi trên google
 *
 * @param {number} temp Nhiệt độ ở thang nhiệt Celsius
 *
 * @return {number} Nhiệt độ ở thang nhiệt Fahrenheit
 */
function celsiusToFahrenheit(temp) {}
