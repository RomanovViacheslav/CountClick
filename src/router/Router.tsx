import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATHS } from '../constants';
import { MainLayout } from '../ui';
import { MainPage, NotFoundPage } from '../page';

export const Router = () => (
  <Routes>
    <Route path={PATHS.MAIN} element={<MainLayout />}>
      <Route index element={<MainPage />} />
      <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
    </Route>
  </Routes>
);
