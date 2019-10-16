import React, { Component } from "react";
// const s = require('./App.module.scss');
import s from './App.module.scss';

const App: React.FC = () => {
	return (
		<div className={s.head}>
		<h1>My React App!</h1>
	</div>
	);
  };

export default App;