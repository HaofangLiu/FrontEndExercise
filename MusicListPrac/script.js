const data = [
  {
    id: 0,
    title: "Poker Face",
    checked: true,
    collection: true
  },
  {
    id: 1,
    title: "Talking to Moon",
    checked: true,
    collection: false
  },
  {
    id: 2,
    title: "Crimals",
    checked: true,
    collection: true
  },
  {
    id: 3,
    title: "Roar",
    checked: false,
    collection: true
  },
  {
    id: 4,
    title: "Counting Star",
    checked: false,
    collection: false
  },
  {
    id: 5,
    title: "Evertbody hurts",
    checked: false,
    collection: true
  }
];

const checkall = document.querySelector("#checkAll");
const deleteAll = document.querySelector(".footer #remove");

const deleteMusic = (...musicId) => {
    console.log(musicId);
    const formedData = JSON.parse(JSON.stringify(data))
  for (const idx of musicId) {
    formedData.splice(idx, 1);
  }
  render(formedData);
};

const render = data => {
  let str = "";
  data.forEach(element => {
    str += `<li>
        <input type="checkbox" ${element.checked ? "checked" : ""}/>
        <span>${element.title}</span>
        ${
          element.collection
            ? '<a href="javascript:;" class="cancelCollect">Unsave</a>'
            : '<a href="javascript:;" class="collect">Save</a>'
        }
        <a href="javascript:;" class="remove">Delete</a>
      </li>`;
  });

  document.querySelector("#list").innerHTML = str;

  //if all items are selected:
  const isCheckedAll = data.every(element => element.checked); //this will return a true/false
  //console.log(isCheckedAll);
  checkall.checked = isCheckedAll;
  addEvent();
};

render(data);

function addEvent() {
  const lis = Array.from(document.querySelectorAll("li"));
  lis.forEach((element, idx) => {
    //select music
    const checked = element.querySelector("input");
    checked.onchange = function() {
      //console.log("Checked");
      data[idx].checked = this.checked;
      render(data);
    };
    //select save
    let collection = element.querySelector(".collect");
    collection &&
      (collection.onclick = function() {
        data[idx].collect = true;
        //console.log("Select save");
        render(data);
      });
    //select unsave
    let cancelCollection = element.querySelector(".cancelCollect");
    cancelCollection &&
      (cancelCollection.onclick = function() {
        data[idx].collect = true;
        //console.log("Select Unsave");
        render(data);
      });
    //delete
    const remove = element.querySelector(".remove");
    remove.addEventListener("click", deleteMusic.bind(null, idx));
  });
  //delete selected item
  deleteAll.onclick = function() {
      let listIdx = []
    data.forEach((element,idx) => {
        if(element.checked === true){
            listIdx.push(idx)
        }
    });
    //console.log(listIdx);
    deleteMusic(listIdx);
  };
}

checkall.onchange = function() {
  data.forEach(element => {
    element.checked = this.checked;
  });
  render(data);
};
