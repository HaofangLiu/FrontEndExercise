class Vue extends EventTarget {
  constructor(options) {
    super();
    this.options = options;
    this._data = this.options.data;
    this.observer(this._data);
    this.compile();
  }
  compile() {
    let ele = document.querySelector(this.options.el);
    // console.log(ele)
    this.compileNode(ele);
  }

  observer(data) {
    for (let key in data) {
      let value = data[key];
      let dep = new Dep();
      const _this = this;
      Object.defineProperty(data, key, {
        configurable: true,
        enumerable: true, //for循环靠枚举属性（遍历所有的property）
        get() {
          console.log("get...");
          //收集订阅者
          if (Dep.target) {
            dep.addSub(Dep.target);
          }
          return value;
        },
        set(newValue) {
          console.log("set...");
          //发布订阅者
          dep.notify(newValue);
          //   触发自定义事件
          //   let event = new CustomEvent(key,{
          //       detail:newValue
          //   });
          //   _this.dispatchEvent(event);
          value = newValue;
        }
      });
    }
  }

  compileNode(ele) {
    let childNode = ele.childNodes;
    console.log(childNode);
    //因为有换行所以最后会出现有文本节点
    // NodeList(3) [text, div, text]
    // length: 3
    // 0: text
    // 1: div
    // 2: text
    // __proto__: NodeList
    [...childNode].forEach(node => {
      //判断是文本还是节点
      if (node.nodeType === 3) {
        console.log("文本节点"); //文本节点--> 元素节点--> 文本节点
        let textContent = node.textContent;
        console.log(textContent); //123{{message}}123
        let reg = /\{\{\s*(\S+)\s*\}\}/g;
        if (reg.test(textContent)) {
          console.log("found!!!!", RegExp.$1); //拿到正则分组的第一组: found!!!! message
          const $1 = RegExp.$1; //message
          node.textContent = textContent.replace(reg, this._data[$1]);
          //  绑定自定义事件
          //   this.addEventListener($1,e=> {
          //       console.log(e.detail)
          //       const newValue = e.detail;
          //       const oldValue = this._data[$1];
          //       const reg = new RegExp(oldValue,'g');
          //       node.textContent = node.textContent.replace(reg,newValue);
          //   })
          new Watcher(this._data, $1, newValue => {
            console.log(newValue);
            //渲染视图的逻辑
            const oldValue = this._data[$1];
            const reg = new RegExp(oldValue, "g");
            node.textContent = node.textContent.replace(reg, newValue);
          });
        } else {
          console.log("cannot find"); //cannot find
        }
      } else if (node.nodeType === 1) {
        console.log("元素节点"); //元素节点
        if (node.childNodes.length > 0) {
          console.log(node.childNodes.length);
          this.compileNode(node);
        } else {
          console.log("empty node");
        }
      }
    });
  }
}

//收集器：
class Dep {
  constructor() {
    this.subs = [];
  }
  //增加订阅者
  addSub(sub) {
    this.subs.push(sub);
  }
  //通知
  notify(newValue) {
    this.subs.forEach(sub => {
      sub.update(newValue);
    });
  }
}

//订阅者
class Watcher {
  constructor(data, key, cb) {
    this.cb = cb;
    Dep.target = this;
    //手动触发get方法
    data[key];
    Dep.target = null;
  }
  update(newValue) {
    console.log("updating..");
  }
}
