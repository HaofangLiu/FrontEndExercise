//buffer创建，new Buffer（）
let buffer = Buffer.alloc(10);
console.log(buffer);

let buffer1 = Buffer.from("hello");
console.log(buffer1);

let buffer2 = Buffer.from([0x68,0x65,0x6c,0x6c,0x6f]);//<Buffer 68 65 6c 6c 6f>
console.log(buffer2.toString());

let buffer3 = Buffer.from([0x68,0x65,0x6c]);
let buffer4 = Buffer.from([0x6c,0x6f]);
console.log(buffer3.toString(),buffer4.toString());

let newBuffer = Buffer.concat([buffer3,buffer4]);
console.log(newBuffer);

let {StringDecoder} = require('string_decoder');
let decoder = new StringDecoder;
let res1 = decoder.write(buffer3);
let res2 = decoder.write(buffer4);
console.log(res1);
console.log(res2);
console.log(res1 + res2);
