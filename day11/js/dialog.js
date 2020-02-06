class Dialog extends EventTarget {
  constructor(options) {
    super();
    //合并默认配置
    //use assign 来合并对象，若key相同，则以后边的为准
    this.opts = Object.assign(
      {
        width: "30%",
        height: "250px",
        title: "测试标题",
        content: "测试内容",
        dragable: true, //是否可拖拽
        maskable: true, //是否有遮罩
        isCancel: false, //是否有取消
        cancel() {},
        success() {}
      },
      options
    );
    this.init();
  }

  init() {
    this.createHTML();
    if (!this.opts.maskable) {
      this.div.querySelector(".k-wrapper").style.display = "none";
    }
    //调用拖拽方法
    if (this.opts.dragable) {
      this.drag();
    }

    // this.div.querySelector('.k-close').onclick = () => {
    //     this.close();
    // }
    // this.div.querySelector('.k-default').onclick = () => {
    //     this.close();
    // }

    //绑定事件
    this.addEventListener("close", this.close);
    this.addEventListener("close", () => {
      console.log("closed");
    });
    // this.addEventListener('success',this.success)

    //事件委托
    this.div.onclick = event => {
      console.log(event.target.className);
      switch (event.target.className) {
        case "k-close":
          this.close();
          break;
        case "k-default":
          //取消
          //   this.close();
          const close = new CustomEvent("close");
          this.dispatchEvent(close);
          //回调封装
          this.opts.cancel();
          break;
        case "k-primary":
          //确认
          this.close();
          this.opts.success();
          break;
        default:
          console.log("nonthing click");
          break;
      }
    };
  }

  //show window
  open() {
    //错误表示，如果有多个弹窗则无法控制单个弹窗
    //document.querySelector('.container').style.display = 'block';
    this.div.style.display = "block";
  }

  //close pop window
  close() {
    this.div.style.display = "none";
  }

  //generate DOM structure
  createHTML() {
    this.div = document.createElement("div");
    //div.classList.add("container");
    this.div.innerHTML = `<div class="k-wrapper"></div>
      <div class="k-dialog" style="width=${this.opts.width},height=${
      this.opts.height
    }">
          <div class="k-header">
              <span class="k-title">${
                this.opts.title
              }</span><span class="k-close">X</span>
          </div>
          <div class="k-body">
              <span>${this.opts.content}</span>
          </div>
          <div class="k-footer">
          ${this.opts.isCancel ? '<span class="k-default">cancel</span>' : ""}
              <span class="k-primary">confirm</span>
          </div>
      </div>`;
    this.div.style.display = "none";
    document.querySelector("body").appendChild(this.div);
  }

  //drag

  drag() {
    // 拖拽对话框；
    let kDialog = this.div.querySelector(".k-dialog");
    kDialog.onmousedown = e => {
      let x = e.clientX - kDialog.offsetLeft;
      let y = e.clientY - kDialog.offsetTop;
      kDialog.onmousemove = e => {
        let xx = e.clientX - x;
        let yy = e.clientY - y;
        kDialog.style.left = xx + "px";
        kDialog.style.top = yy + "px";
      };
      kDialog.onmouseup = e => {
        kDialog.onmousemove = "";
      };
    };
  }
}

//在原有基础上扩展带对话框的弹窗
class ExtendDialog extends Dialog{
    constructor(options){
        super(options);
    }
    createHTML(){
        super.createHTML();
        const myInput = document.createElement('input');
        myInput.type = 'text';
        myInput.classList.add('input-inner');
        this.div.querySelector('.k-body').appendChild(myInput);
    }
}