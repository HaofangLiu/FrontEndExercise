//1.二维数组的查找
function Find(target, array) {
  let flag = false;
  for (let i = array.length; i > 0; i--) {
    if (array[i - 1][0] <= target) {
      if (array[i - 1].includes(target)) {
        flag = true;
        i = -1;
      }
    }
  }
  return flag;
}

//2. 替换空格
function replaceSpace(str) {
  return str.replace(/ /g, "%20");
}

//3利用栈的思想，颠倒一个链表
function printListFromTailToHead(head) {
  const stack = [];
  while (head) {
    stack.push(head.val);
    head = head.next;
  }
  return stack.reverse();
}
//或用unshift（）
var reversePrint = function(head) {
  let res = [];
  while (head) {
    res.unshift(head.val); //取值加入到第一个
    head = head.next;
  }
  return res;
};

//4.重构二叉树
function reConstructBinaryTree(pre, vin) {
  if (!pre.length || !vin.length) {
    return null;
  }

  let rootValue = pre[0];
  let newTree = new TreeNode(rootValue);

  for (var i = 0; i < vin.length; i++) {
    if (vin[i] === rootValue) {
      break;
    }
  }
  //注意slice从是[)，
  newTree.left = reConstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i));
  newTree.right = reConstructBinaryTree(pre.slice(i + 1), vin.slice(i + 1));

  return newTree;
}

//5.两个栈实现队列
let inStack = [];
let outStack = [];

function push(node) {
  inStack.push(node);
}
function pop() {
  if (outStack.length) {
    return outStack.pop();
  } else {
    while (inStack.length) {
      outStack.push(inStack.pop());
    }
    return outStack.pop();
  }
}

//6.旋转数组最小值
function minNumberInRotateArray(rotateArray) {
  if (!rotateArray.length) {
    return 0;
  }
  return Math.min(...rotateArray);
}

//7.斐波那契数列 8.跳楼梯问题
function jumpFloor(number) {
  let arr = [1, 1]; //注意第一位和第二位
  for (let i = 2; i <= number; i++) {
    let cur = arr[i - 1] + arr[i - 2];
    arr.push(cur);
  }
  return arr[number];
}
//或者递归：耗时大
// function jumpFloor(number){
//     // write code here
//     if(number === 0){
//         return 0;
//     }
//     if(number === 1 || number === 2){
//         return number;
//     }
//     return jumpFloor(number - 1) + jumpFloor(number - 2);
// }

//9. 10. 一次可以跳n个台阶
function jumpFloorII(number) {
  // write code here
  if (number === 0) {
    return 0;
  }
  if (number === 1 || number === 2) {
    return number;
  }
  return 2 * jumpFloorII(number - 1);
}

//11.求二进制有多少个1
function NumberOf1(n) {
  // write code here
  let count = 0;
  while (n) {
    n = n & (n - 1);
    ++count;
  }
  return count;
}

//12.求数字的次方；
function Power(base, exponent) {
  // write code here
  //return Math.pow(base, exponent);//第一种方法

  if (base === 0) {
    return 0;
  }
  if (exponent === 0) {
    return 1;
  }
  if (exponent === 1) {
    return base;
  }

  let result = base;
  let isNegative = exponent < 0;
  let PositiveExponent = Math.abs(exponent);

  for (let i = 1; i < PositiveExponent; i++) {
    result *= base;
  }

  return isNegative ? 1 / result : result;
}

//13. 按奇偶排序不改变顺序
function reOrderArray(array) {
  // write code here
  let odd = [];
  let even = [];

  array.forEach(item => {
    item % 2 ? odd.push(item) : even.push(item);
  });
  return odd.concat(even);
}

//14.链表寻找倒数第k个
function FindKthToTail(head, k) {
  let length = 0;
  let node = head;
  while (node) {
    length += 1;
    node = node.next;
  }

  if (k > length) {
    return null;
  }

  node = head;
  for (let i = 0; i < length - k; i++) {
    node = node.next;
  }
  return node;
}

//15.反转链表
function ReverseList(pHead) {
  // write code here
  if (pHead == null) return null;
  let pre = pHead.next;
  pHead.next = null;
  let temp = null;
  while (pre) {
    temp = pre.next;
    pre.next = pHead;
    pHead = pre;
    pre = temp;
  }
  return pHead;
}

//16.合并链表，输出递增的链表
function Merge(pHead1, pHead2) {
  if (pHead1 == null) return pHead2;
  if (pHead2 == null) return pHead1;

  if (pHead1.val < pHead2) {
    pHead1.next = Merge(pHead1.next, pHead2);
    return pHead1;
  } else {
    pHead2.next = Merge(pHead1, pHead2.next);
    return pHead2;
  }
}

//17.b是否是a的子子树
function HasSubtree(pRoot1, pRoot2) {
  if (!pRoot2 || !pRoot1) return false;
  return (
    isSubTRee(pRoot1, pRoot2) ||
    isSubTRee(pRoot1.left, pRoot2) ||
    isSubTRee(pRoot1.right, pRoot2)
  );
}
function isSubTRee(rootValue1, rootValue2) {
  if (!rootValue2) return true;

  if (!rootValue1) return false;

  if (rootValue1.val !== rootValue2.val) return false;

  return (
    isSubTRee(rootValue1.left, rootValue2.left) &&
    isSubTRee(rootValue1.right, rootValue2.right)
  );
}

//18.镜像子树
function Mirror(root)
{
    // write code here
    if(!root) return null;
    
    const nodeleft = root.left;
    root.left = root.right;
    root.right = nodeleft;
    
    Mirror(root.left);
    Mirror(root.right);
    
}


//19.反转矩形
function printMatrix(matrix)
{
    if(!matrix.length) return [];
    let arr = [];
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    let columnStart = 0;
    let columnEnd = matrix[0].length - 1;
    
    while(rowStart <= rowEnd && columnStart <= columnEnd){
        for(let i = columnStart;i <= columnEnd; i++){
            arr.push(matrix[rowStart][i])
        }
        rowStart++;
        for(let i=rowStart;i <=rowEnd;i++){
            arr.push(matrix[i][columnEnd]);
        }
        columnEnd--;
        if(rowStart <= rowEnd){
            for(let i = columnEnd;i>=columnStart;i--){
                arr.push(matrix[rowEnd][i]);
            }
            rowEnd--;
        }
        if(columnStart <= columnEnd){
            for(let i = rowEnd;i >= rowStart;i--){
                arr.push(matrix[i][columnStart]);
            }
            columnStart++
        }
    }
    return arr;
}

//20.栈的min取出
let minStack = [];
let allStack = [];

function push(node)
{
    if(!minStack.length){
        minStack.push(node);
    }else if(minStack[minStack.length - 1] >= node){
        minStack.push(node);
    }
    allStack.push(node);
}
function pop()
{
    // write code here
    if(minStack[minStack.length - 1] === allStack[allStack.length - 1]){
        minStack.pop();
    }
    allStack.pop();
}
function top()
{
    // write code here
    while(allStack.length){
        return allStack[allStack.length - 1];
    }
}
function min()
{
    // write code here
    while(minStack.length){
        return minStack[minStack.length - 1];
    }
    
}

//21. 判断能不能出栈
function IsPopOrder(pushV, popV){
    let stack = [];

    pushV.forEach((item) => {
        if(item === popV[0]){
            popV.shift();
            for(var i = 0;i < popV.length;i++){
                if(popV[0] === stack[stack.length - 1]){
                    stack.pop();
                }else{
                    break;
                }
            }
        }else{
            stack.push(item);
        }
    })

    return !stack.length;
}

//22.从上到下打印根节点
function PrintFromTopToBottom(root)
{
    // write code here
    if(!root){
        return [];
    }
    let arr = [];
    let queue = [root];
    while(queue.length){
        const node = queue.shift();
        arr.push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return arr;
}

//23.
