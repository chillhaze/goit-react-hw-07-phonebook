import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { filteredReducer } from './contacts/contacts-reducer';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import { contactsApi } from './contacts/contacts-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filtered: filteredReducer,
  },
  middleware: [...middleware, contactsApi.middleware],
  devTools: process.env.NODE_ENV === 'development',
});

// Code without RTK-----------------------------------
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

//Просмотр фунций-прослоек в console.log
// console.log(middleware);

//-----------------------------------------
// стейт в localstorage, без phoneBookReducer.filtered(добавил blacklist)
// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filtered'],
// };

// export const store = configureStore({
//   reducer: {
//     // вариант объекта с local storage, также раскоментировать PersistGate в index.js
//     // phonebook: persistReducer(contactsPersistConfig, phoneBookReducer),
//     phonebook: phoneBookReducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development', //по умолчанию true, можно не указывать их в объекте, включаем только в режиме разработки через NODE_ENV
// });
//-----------------------------------------

//----------------------------------------- весь стейт в localstorage
// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
// };
// const rootReducer = combineReducers({
//   phonebook: phoneBookReducer, //объект из rootReducer
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware,
//   devTools: process.env.NODE_ENV === 'development', //по умолчанию true, можно не указывать их в объекте, включаем только в режиме разработки через NODE_ENV
// });
//-----------------------------------------

// export const persistor = persistStore(store);
