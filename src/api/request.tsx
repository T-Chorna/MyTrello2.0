
import { BoardProps } from '../common/interfaces/BoardProps';
import { HomePageBoard } from '../common/interfaces/HomePageBoard';
import instance from './instance';
// import { CardProps } from '../common/interfaces/CardProps';
// import { LoginProps } from '../common/interfaces/LoginProps';

const RouteConstance = {
  user: 'user',
  login: 'login',
  refresh: 'refresh',
  board: 'board',
  list: 'list',
  card: 'card',
  users: 'users',
} as const;

// //Создание пользователя / регистрация
// export const postUser = async (data: LoginProps) => {
//   await instance.post(`/${RouteConstance.user}`, data);
// };
// //Поиск пользователей по юзернейму/имейлу
// export const getUser = async (emailOrUsername: string) => {
//   const res: { id: number; username: string }[] = await instance.get(`/${RouteConstance.user}`, {
//     params: {
//       emailOrUsername: emailOrUsername,
//     },
//   });
//   return res;
// };
// //Авторизация
// export const postLogin = async (data: LoginProps) => {
//   const res: { result: string; token: string; refreshToken: string } = await instance.post(
//     `/${RouteConstance.login}`,
//     data
//   );
//   return res;
// };

// //Обновление токенов авторизации
// export const postRefresh = async (refreshToken: string) => {
//   const res: { result: string; token: string; refreshToken: string } = await instance.post(
//     `/${RouteConstance.refresh}`,
//     refreshToken
//   );
//   return res;
// };

//Получение списка всех досок для главной
export const getAllBoards = async () => {
  const res: { boards: HomePageBoard[] } = await instance.get(`/${RouteConstance.board}`);
  return res.boards;
};

//Получение детальных данных про доску
export const getBoard = async (boardId: string) => {
  const res: BoardProps = await instance.get(`/${RouteConstance.board}/${boardId}`);
  return res;
};

// //Создание новой доски
// export const postBoard = async (data: { title: string }) => {
//   await instance.post(`/${RouteConstance.board}`, data);
// };

// //Редактирование существующей доски
// export const putBoard = async (
//   data: { title?: string; custom?: { textColor: string; listColor: string; backgroundImage: string } },
//   boardId: string
// ) => {
//   await instance.put(`/${RouteConstance.board}/${boardId}`, data);
// };

// //Удаление доски
// export const deleteBoard = async (boardId: string) => {
//   await instance.delete(`/${RouteConstance.board}/${boardId}`);
// };

// //Создание списка на доске
// export const postList = async (data: { title: string; position: number }, boardId: string) => {
//   await instance.post(`/${RouteConstance.board}/${boardId}/${RouteConstance.list}`, data);
// };

// //Редактирование группы списков
// export const putLists = async (data: { id: number; position: number }[], boardId: string) => {
//   await instance.put(`/${RouteConstance.board}/${boardId}/${RouteConstance.list}`, data);
// };

// //Редактирование списка на доске
// export const putList = async (data: { title: string; position: number }, boardId: string, listId: number) => {
//   await instance.put(`/${RouteConstance.board}/${boardId}/${RouteConstance.list}/${listId}`, data);
// };

// //Удаление списка на доске
// export const deleteList = async (boardId: string, listId: number) => {
//   await instance.delete(`/${RouteConstance.board}/${boardId}/${RouteConstance.list}/${listId}`);
// };

// //Создание карточки на доске
// export const postCard = async (data: CardProps, boardId: string) => {
//   await instance.post(`/${RouteConstance.board}/${boardId}/${RouteConstance.card}`, data);
// };

// //Редактирование группы карточек
// //listId is id of the list where the card should be moved
// export const putCards = async (
//   data: { id: number; title: string; position: number; listId: number }[],
//   boardId: string
// ) => {
//   await instance.put(`/${RouteConstance.board}/${boardId}/${RouteConstance.card}`, data);
// };

// //Редактирование карточки на доске
// export const putCard = async (data: CardProps, boardId: string, cardId: number) => {
//   await instance.put(`/${RouteConstance.board}/${boardId}/${RouteConstance.card}/${cardId}`, data);
// };

// //Удаление карточки на доске
// export const deleteCard = async (boardId: string, cardId: number) => {
//   await instance.delete(`/${RouteConstance.board}/${boardId}/${RouteConstance.card}/${cardId}`);
// };

// //Assign or remove users to/from card
// export const putUsers = async (data: { add?: number[]; remove?: number[] }, boardId: string, cardId: number) => {
//   await instance.put(
//     `/${RouteConstance.board}/${boardId}/${RouteConstance.card}/${cardId}/${RouteConstance.users}`,
//     data
//   );
// };

// //Получение пользователя по айди
// export const getUserById = async (boardId: string, userId: number) => {
//   const res = await instance.get(`${RouteConstance.board}/${boardId}/${RouteConstance.user}/${userId}`);
//   return res;
// };
