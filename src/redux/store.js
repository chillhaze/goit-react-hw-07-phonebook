import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { phoneBookReducer } from './contacts/contacts-reducer';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

//Просмотр фунций-прослоек в console.log
// console.log(middleware);

//--------------стейт в localstorage, без phoneBookReducer.filtered (добавил blacklist)
const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filtered'],
};

export const store = configureStore({
  reducer: {
    phonebook: persistReducer(contactsPersistConfig, phoneBookReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development', //по умолчанию true, можно не указывать их в объекте, включаем только в режиме разработки через NODE_ENV
});
//-----------------------------------------

//--------------весь стейт в localstorage
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

export const persistor = persistStore(store);
