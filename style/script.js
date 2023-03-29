// let hotel = [
//   [
//     {
//       room: 1,
//       price: 300,
//       brand: "Luxe",
//       children: false,
//     },
//     {
//       room: 2,
//       price: 4000,
//       brand: "Deluxe",
//       children: true,
//     },
//     {
//       room: 3,
//       price: 1000,
//       brand: "Deluxe",
//       children: false,
//     },
//     {
//       room: 4,
//       price: 900,
//       brand: "Luxe",
//       children: true,
//     },
//   ],
//   [
//     {
//       room: 5,
//       price: 700,
//       brand: "Luxe",
//       children: true,
//     },
//     {
//       room: 6,
//       price: 79000,
//       brand: "President",
//       children: true,
//     },
//     {
//       room: 7,
//       price: 600,
//       brand: "Luxe",
//       children: false,
//     },
//     {
//       room: 8,
//       price: 950,
//       brand: "Luxe",
//       children: true,
//     },
//   ],
//   [
//     {
//       room: 9,
//       price: 1900,
//       brand: "Deluxe",
//       children: false,
//     },
//     {
//       room: 10,
//       price: 5000,
//       brand: "Deluxe",
//       children: true,
//     },
//     {
//       room: 11,
//       price: 1000,
//       brand: "Deluxe",
//       children: false,
//     },
//     {
//       room: 12,
//       price: 250,
//       brand: "Luxe",
//       children: false,
//     },
//   ],
//   [
//     {
//       room: 13,
//       price: 10000,
//       brand: "President",
//       children: true,
//     },
//     {
//       room: 11,
//       price: 8000,
//       brand: "President",
//       children: false,
//     },
//   ],
// ];

// let rooms = {
//   all_roms: [],
//   rooms: 0,
// };
// let brands = {
//   president: [],
//   deluxe: [],
//   luxe: [],
// };

// let room_level = {
//   perviy: 0,
//   vtoroy: 0,
//   tretiy: 0,
//   chetvertiy: 0,
// };

// //1 отфильтровать по категориям
// //2 добавить ключ eting с буленовым значением в каждый номер
// //3 посчитать и красиво раставить все комнаты переменную rooms
// //4 найти самую дорогую комнату
// //5 посчитать сколько стоит каждый этаж
// //6 посчитать сколько стоят все комнаты вместе взятые
// //7 найти все комнаты в которых живут дети 
// let children = []
// let unchildren = []

// // 7 \\
// const setup = () => {
//   for (let item of hotel) {
// for( let itemTwo of item ){
//       if (itemTwo.children === true) {
//         children.push(itemTwo)
//       } else {
//         unchildren.push(itemTwo)
//       }
//       }
//     }
//   }


// console.log(children,unchildren);


// hotel = hotel.flat(Infinity) //можно сказать вытаскивает все илементы до указанной глубины 

// // 1 \\
// brands.president = hotel.filter(item => item.brand == "President")

// brands.deluxe = hotel.filter(item => item.brand == "Deluxe")

// brands.luxe = hotel.filter(item => item.brand == "Luxe")

// // 2 \\
// hotel.forEach(item => {
//   item.eting = 'boolean'
// })
// console.log(brands)


// // 3 \\
// rooms.all_roms = hotel.sort((a, b) => a.price - b.price);
// console.log(rooms);


// // 4 \\ 
// let most = {}
// most = hotel.find(item => item.price > 10000)
// console.log(most);
// // 4 \\ 













// ** ЗАДАЧА 57 - Трансформация массива объектов
//  *
//  * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
//  *
//  * 2. Обратите внимание, что
//  *  - некоторые имена свойств в каждом сообщении изменены
//  *  - ID каждого сообщения увеличен на 1000
//  *
//  * 3. Исходный массив постов должен остаться без изменений
//  */

// const testPosts = [
//   {
//     postId: 234,
//     author: 'robd',
//     commentsQty: 5,
//   },
//   {
//     postId: 823,
//     author: 'sady',
//   },
//   {
//     postId: 161,
//     author: 'merryl',
//     commentsQty: 8,
//   },
// ]

// const processedPosts = processPosts(testPosts)
// console.log(processedPosts)

// [
//   {
//     postId: 1234,
//     postAuthor: 'robd',
//     postCommentsQty: 5
//   },
//   {
//     postId: 1823,
//     postAuthor: 'sady',
//     postCommentsQty: 0
//   },
//   {
//     postId: 1161,
//     postAuthor: 'merryl',
//     postCommentsQty: 8
//   }
// ]

// console.log(testPosts)
// оригинальный массив должен остаться без изменений






let courses = [
  {
    title: 'SMM',
    howLong: 3
  },
  {
    title: 'Dev',
    howLong: 6
  },
  {
    title: 'Graph',

    howLong: 4

  },

]

let earnings = {

  total: 0,

  max: 0,

  min: 0

}

let m = 0

let w = 0

let average_age = 0

let smm = 0

let dev = 0

let graph = 0

let students = [

  {

    sex: 'm',

    age: 14,

    payment: 1220000,

    course: {

      title: 'SMM',

    }

  },

  {

    sex: 'm',

    age: 24,

    payment: 1883000,

    course: {

      title: 'Graph'

    }

  },

  {

    sex: 'w',

    age: 16,

    payment: 2190000,

    course: {

      title: 'Dev'

    }

  },

  {

    sex: 'm',

    age: 19,

    payment: 718000,

    course: {

      title: 'Graph'

    }

  },

  {

    sex: 'w',

    age: 15,

    payment: 2195000,

    course: {

      title: 'Dev'

    }

  },

  {

    sex: 'm',

    age: 24,

    payment: 460000,

    course: {

      title: 'SMM'

    }

  },

  {

    sex: 'w',

    age: 14,

    payment: 560000,

    course: {

      title: 'SMM'

    }

  },

  {

    sex: 'w',

    age: 22,

    payment: 160000,

    course: {

      title: 'Dev'

    }

  },

  {

    sex: 'm',

    age: 26,

    payment: 883000,

    course: {

      title: 'Graph'

    }

  },

  {

    sex: 'w',

    age: 26,

    payment: 750000,

    course: {

      title: 'Dev'

    }

  },

  {

    sex: 'm',

    age: 23,

    payment: 212000,

    course: {

      title: 'Graph',

    }

  },

  {

    sex: 'w',

    age: 24,

    payment: 883000,

    course: {

      title: 'Graph'

    }

  },

  {

    sex: 'w',

    age: 27,

    payment: 190000,

    course: {

      title: 'Dev'

    }

  },

  {

    sex: 'w',

    age: 19,

    payment: 210000,

    course: {

      title: 'Graph'

    }

  },

  {

    sex: 'w',

    age: 21,

    payment: 770000,

    course: {

      title: 'Dev'

    }

  },

  {

    sex: 'm',

    age: 18,

    payment: 1200000,

    course: {

      title: 'SMM'

    }

  },

  {

    sex: 'w',

    age: 51,

    payment: 880000,

    course: {

      title: 'SMM'

    }

  },

  {

    sex: 'm',

    age: 51,

    payment: 2430000,

    course: {

      title: 'Dev'

    }

  },

  {

    sex: 'w',

    age: 33,

    payment: 1277000,

    course: {

      title: 'Graph'

    }

  },

  {

    sex: 'w',

    age: 21,

    payment: 2750000,

    course: {

      title: 'Dev'

    }

  },

]

// В этом примере перед вами учебный центр, в котором учиться несколько студентов. Каждый из них учиться на каком-то курсе и платит за обучение. У студентов мы видим пол, возраст, оплату, а также курс, которые они выбрали.*
// 1. Добавить студентам ключ howLong внутри ключа course, рядом с title. HowLong - цифра, означающая сколько месяцев длиться курс*
// 2. Сохранить количество девочек и мальчиков внутри переменных m и w*
// 3. Сохранить заработок учебного центра в earning.total*
// 4. Узнать кто больше всех платит за обучение в earning.max*
// 5. Узнать кто меньше всех платит за обучение в earning.min*
// 6. Посчитать сколько студентов учиться на курсах внутри dev, smm и graph*
// 7. Посчитать средний возраст студентов в average_age*

const setup = () => {

  for (let item of students) {
    let course = courses.filter(c => c.title === item.course.title)[0]
    item.course.howLong = course.howLong

    switch (item.sex) {
      case 'm':
        m++
        break;
      case 'w':
        w++
        break;
    }

    earnings.total += (item.payment * item.course.howLong)


    if (item.payment * item.course.howLong > earnings.max) {
      earnings.max = item.payment * item.course.howLong
    } else if (earnings.min != 0 && item.payment * item.course.howLong < earnings.min) {
      earnings.min = item.payment * item.course.howLong
    }

    switch (item.course.title) {
      case 'Dev':
        smm++
        break;
      case 'SMM':
        dev++
        break;
      case 'Graph':
        graph++
        break;
    }






  }

}

setup()

console.log(students);
console.log(m, w);
console.log(earnings);
console.log(average_age);
console.log(smm);
console.log(dev);
console.log(graph);


