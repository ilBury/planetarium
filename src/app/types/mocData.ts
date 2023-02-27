import { News } from "../shared/types/news.type";
import { RoleUsers } from "../shared/types/role-users.enum";
import { Ticket } from "../shared/types/ticket.type";
import { User } from "../shared/types/user.type";

export const news: News[] = [
  {
    header: 'Планеты',
    picture: [
      'assets/images/newsPlanet1.png',
      'assets/images/newsPlanet2.png',
    ],
    content: [
      'АСТ­РО­НО­МИ­ЧЕ­СКИЕ НАБЛЮ­ДЕ­НИЯ В МОС­КОВ­СКОМ ПЛА­НЕ­ТА­РИИ',
      '3 МАЯ – ВСЕМИРНЫЙ ДЕНЬ СОЛНЦА'
    ]
  },
  {
    header: 'Мероприятия',
    picture: [
      'assets/images/newsEvent1.png',
      'assets/images/newsEvent2.png',
      'assets/images/newsEvent3.png',
      'assets/images/newsEvent4.png'
    ],
    content: [
      '«HANS ZIMMER | SOUNDTRACKS»',
      'ОТКРЫТО БРОНИРОВАНИЕ ШКОЛЬНЫХ ЭКСКУРСИЙ НА МАРТ!',
      'ОТКРЫТО БРОНИРОВАНИЕ ШКОЛЬНЫХ ЭКСКУРСИЙ НА МАРТ!',
      '12 ФЕВРАЛЯ – ОРКЕСТР «НЕОКЛАССИКА»: ФОРТЕПИАНО + СТРУННЫЕ'
    ]
  },
  {
    header: 'Для детей'
  },
  {
    header: 'Ракетостроение'
  }
]


export let users: User[] = [
  {
    login: 'Maloletka',
    password: '1234qwer!',
    email: 'maloletka@gmail.com',
    role: RoleUsers.USER,
    discount: 0,
    interested: [news[2], news[1]],
    avatar: 'assets/images/avatar_1.png',
    avatarBody: 'assets/images/avatar1.png'
   },
   {
    login: 'Katletka',
    password: '1234qwer!',
    email: 'katletka@gmail.com',
    role: RoleUsers.USER,
    discount: 40,
    interested: [news[0], news[1]],
    avatar: 'assets/images/avatar_4.png',
    avatarBody: 'assets/images/avatar4.png'
   },
   {
    login: 'Svetka',
    password: '1234qwer!',
    email: 'svetka@gmail.com',
    role: RoleUsers.USER,
    discount: 0,
    interested: [news[2], news[3]],
    avatar: 'assets/images/avatar_5.png',
    avatarBody: 'assets/images/avatar5.png'
   }
]



export let sessions: Ticket[] = [

  {
    name: 'Интерстеллар',
    discription: 'фантастика, драма, приключения',
    picture: 'assets/images/interstellarPict.png',
    price: 15,
    date: [
      {item: (new Date(2023, 1, 23, 11))},
      {item: (new Date(2023, 1, 23, 16))},
      {item: (new Date(2023, 1, 23, 19))},
      {item: (new Date(2023, 1, 23, 23))},
      {item: (new Date(2023, 1, 25, 11))},
      {item: (new Date(2023, 1, 25, 16))},
      {item: (new Date(2023, 1, 25, 19))},
      {item: (new Date(2023, 1, 25, 23))},

    ],
  },
  {
    name: 'Звездные войны',
    discription: 'фантастика, драма, приключения',
    picture: 'assets/images/starWarsPict.png',
    price: 20,
    date: [
      {item: (new Date(2023, 1, 22, 9))},
      {item: (new Date(2023, 1, 22, 12))},
      {item: (new Date(2023, 1, 22, 16))},
      {item: (new Date(2023, 1, 22, 20))},
      {item: (new Date(2023, 1, 22, 23))},
      {item: (new Date(2023, 1, 23, 11))},
      {item: (new Date(2023, 1, 23, 16))},
      {item: (new Date(2023, 1, 23, 19))},
      {item: (new Date(2023, 1, 23, 23))},
      {item: (new Date(2023, 1, 24, 9))},
      {item: (new Date(2023, 1, 24, 11))},
      {item: (new Date(2023, 1, 24, 15))},
      {item: (new Date(2023, 1, 24, 17))},
      {item: (new Date(2023, 1, 24, 20))},
      {item: (new Date(2023, 1, 24, 23))},
    ],
  },
  {
    name: 'Обливион',
    discription: 'фантастика, боевик, триллер',
    picture: 'assets/images/oblivionPict.png',
    price: 50,
    date: [
      {item: (new Date(2023, 1, 20, 9))},
      {item: (new Date(2023, 1, 20, 12))},
      {item: (new Date(2023, 1, 20, 16))},
      {item: (new Date(2023, 1, 20, 20))},
      {item: (new Date(2023, 1, 20, 22))},
      {item: (new Date(2023, 1, 20, 23))},
      {item: (new Date(2023, 1, 21, 11))},
      {item: (new Date(2023, 1, 21, 16))},
      {item: (new Date(2023, 1, 21, 19))},
      {item: (new Date(2023, 1, 21, 23))},
      {item: (new Date(2023, 1, 24, 9))},
      {item: (new Date(2023, 1, 24, 10))},
      {item: (new Date(2023, 1, 24, 15))},
      {item: (new Date(2023, 1, 24, 17))},
      {item: (new Date(2023, 1, 24, 21))},
      {item: (new Date(2023, 1, 24, 23))},
    ],
  },
  {
    name: 'Маленький принц',
    discription: 'фантастика, боевик, триллер',
    picture: 'assets/images/littlePrincePict.png',
    price: 30,
    date: [
      {item: (new Date(2023, 1, 20, 9))},
      {item: (new Date(2023, 1, 20, 12))},
      {item: (new Date(2023, 1, 20, 16))},
      {item: (new Date(2023, 1, 20, 20))},
      {item: (new Date(2023, 1, 20, 23))},
      {item: (new Date(2023, 1, 23, 11))},
      {item: (new Date(2023, 1, 23, 16))},
      {item: (new Date(2023, 1, 23, 19))},
      {item: (new Date(2023, 1, 23, 23))},
      {item: (new Date(2023, 1, 24, 9))},
      {item: (new Date(2023, 1, 24, 11))},
      {item: (new Date(2023, 1, 24, 15))},
      {item: (new Date(2023, 1, 24, 17))},
      {item: (new Date(2023, 1, 24, 20))},
      {item: (new Date(2023, 1, 24, 23))},
    ],
  },
  {
    name: 'Чужой',
    discription: 'фантастика, боевик, триллер',
    picture: 'assets/images/stranger.png',
    price: 30,
    date: [
      {item: (new Date(2023, 1, 19, 9))},
      {item: (new Date(2023, 1, 19, 12))},
      {item: (new Date(2023, 1, 19, 16))},
      {item: (new Date(2023, 1, 19, 20))},
      {item: (new Date(2023, 1, 19, 23))},
      {item: (new Date(2023, 1, 23, 11))},
      {item: (new Date(2023, 1, 23, 16))},
      {item: (new Date(2023, 1, 23, 19))},
      {item: (new Date(2023, 1, 23, 23))},
      {item: (new Date(2023, 1, 24, 9))},
      {item: (new Date(2023, 1, 24, 11))},
      {item: (new Date(2023, 1, 24, 15))},
      {item: (new Date(2023, 1, 24, 17))},
      {item: (new Date(2023, 1, 24, 22))},
      {item: (new Date(2023, 1, 24, 23))},
    ],
  }
]
