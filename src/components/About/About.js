import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div>
        <h3>Приложение "Список дел"</h3>
        <p className='flow-text'>
          <b>Инструменты</b>: <a href='https://reactjs.org'>React</a>
          ,&nbsp;Redux,&nbsp;React-router,&nbsp;
          <a href='https://materializecss.com/'>Materialize CSS</a>.
        </p>
      </div>
    );
  }
}

export default About;
