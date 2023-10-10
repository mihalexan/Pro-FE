//Создать четыре кнопки с одинаковыми стилями
//Добавить на каждую онклик который будет менять цвет только кнопки по который нажали
//Если пользователь нажал на другую кнопку стили должны обнулиться у кнопок, но у кнопки по которой кликнули измениться.
//Реализовать обнуление с помощью обращение к parentElement.children который возвращает HTMLCollection, у которого нет forEach
//Добавить к прототипу HTMLCollection свой forEach, map, filter, reduce. И воспользоваться одним из этих методов чтобы решить задачу.
//Реализовать переключение кнопок:

const parent = document.querySelector("#root");
const btnChild = parent.children;

//myForEach

HTMLCollection.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; ++i) {
    callback(this[i], i, this);
  }
};

btnChild.myForEach((elem) => {
  const collectionOfBtns = elem.parentElement.children;

  elem.onclick = () => {
    const currentBtn = collectionOfBtns.myReduce((acc, el, ind, arr) => {
      el.style.backgroundColor = "rbg(240, 240, 240)";
      if (elem.classList.value == el.classList.value) return arr[ind];
      return acc;
    }, 1);

    currentBtn.style.backgroundColor = "red";
  };
});

//myMap

HTMLCollection.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return {
    result,
  };
};

// const res = btnChild.myMap((elem) => {
// elem.innerText = "ChangeName";
// console.log(elem);
// });

// myReduce

HTMLCollection.prototype.myReduce = function (callback, initialValue) {
  let i = 0;

  if (!initialValue) {
    initialValue = this[0];
    i = 1;
  }
  for (; i < this.length; i++) {
    initialValue = callback(initialValue, this[i], i, this);
  }
  return initialValue;
};

// const btns = btnChild.myReduce((acc, carr) => acc + carr, []);

// MyFilter

HTMLCollection.prototype.myFilter = function (callback) {
  const newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
