import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hero from '../presentationComponents/heroesList/hero/Hero';
import HeroesList from '../presentationComponents/heroesList/Heroes-list';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/hero" render={() => <Hero />} />
    <Route path="/search-list" render={() => <HeroesList />} />
    <Route path="/" render={() => <HeroesList />} />
  </Switch>
);

export default Routes;
