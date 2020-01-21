let dataSet = [
  {
    id: 1,
    name: "Lucas",
    age: 20,
    gender: "Male"
  },
  {
    id: 2,
    name: "Ingrid",
    age: 21,
    gender: "Female"
  },
  {
    id: 3,
    name: "Winston",
    age: 29,
    gender: "Male"
  },
  {
    id: 4,
    name: "Amandon",
    age: 24,
    gender: "Female"
  },
  {
    id: 5,
    name: "TFK",
    age: 26,
    gender: "Male"
  },
  {
    id: 6,
    name: "Gavin",
    age: 23,
    gender: "Male"
  },
  {
    id: 7,
    name: "Allen",
    age: 27,
    gender: "Male"
  }
];

let ageElements = document.querySelectorAll(".age_sort a");
let genderElements = document.querySelectorAll(".gender_sort a");
let defaultAgeElement = document.querySelectorAll(".age_sort a")[2];
let defaultGenderElement = document.querySelectorAll(".gender_sort a")[2];
console.log(ageElements);
console.log([...ageElements]);



//render view according to dataset
const render = data => {
  //assemble DOM
  let str = "";
  data.forEach(element => {
    str += `<tr>
        <th>${element.id}</th>
        <th>${element.name}</th>
        <th>${element.age}</th>
        <th>${element.gender}</th>
      </tr>`;
  });
  document.querySelector("tbody").innerHTML = str;
};

render(dataSet);

//Selecting through age
const ageSort = [
    (data) => {
        return data.sort((age1,age2) => age1.age - age2.age);//Ascending
    },
    (data) => {
        return data.sort((age1,age2) => age2.age - age1.age);//Descending
    },
    (data) => data
]

const genderFilter = [
    (data) => data.filter(item => item.gender === 'Male'),
    (data) => data.filter(item => item.gender === 'Female'),
    (data) => data
]


Array.from(ageElements).forEach((ele,index) =>{
    ele.onclick = function(){
        //first remove all the active 
        Array.from(ageElements).forEach((item,idx) => {
            item.classList.remove('active');
        })
        //selected class add 'active'
        this.classList.add('active');

        Array.from(genderElements).forEach((item) => {
            item.classList.remove('active');
        });
        defaultGenderElement.classList.add('active');

        //only can be used when data is not involved any functions. 
        //?Default dataset is affected.
        //深拷贝实现,首先json序列化
        let deepData = JSON.parse(JSON.stringify(dataSet));
        //let deepData = [...dataSet];
        let formData = ageSort[index](deepData);
        console.log(formData);
        render(formData);
    }
})

Array.from(genderElements).forEach((ele,idx) => {
    ele.onclick = function(){
        Array.from(genderElements).forEach((item) => {
            item.classList.remove('active');
        });

        //change the other filter to default
        Array.from(ageElements).forEach((item,idx) => {
            item.classList.remove('active');
        });
        defaultAgeElement.classList.add('active');


        this.classList.add('active');
        const deepData = JSON.parse(JSON.stringify(dataSet));
        const formedData = genderFilter[idx](deepData);
        render(formedData);
    }

})