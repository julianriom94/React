import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// data
import {tareas} from './tareas.json';

// subcomponents
import TareaForm from './components/TareaForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tareas
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      tareas: this.state.tareas.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(tarea) {
    this.setState({
      tareas: [...this.state.tareas, tarea]
    })
  }

  render() {
    // grafica de las tareas guardadas en constante "tareas"
    const tareas = this.state.tareas.map((tarea, i) => {
      return (
        <div className="col-md-3" style={{display:'flex', marginBottom:'20px'}}>
          <div className="card" style={{width:'100%'}}>
              <div className="card-header">
                <div clasName="col-md-12 centrado">
                  <h3  className="text-capitalize"> { tarea.titulo } </h3>
                  <span className="badge badge-pill badge-danger ml-2">
                    { tarea.prioridad }
                  </span>
                </div>

              </div>
              <div className="card-body">
                <div className="col-md-12 centrado">
                    <p className="text-capitalize">{tarea.descripcion}</p>
                </div>
                <hr />
                <div className="col-md-12 centrado">
                  <p className="text-capitalize"><mark>{tarea.responsable}</mark></p>
                </div>
              </div>
              <div className="card-footer centrado">
                <button
                  className="btn btn-danger"
                  onClick={this.removeTodo.bind(this, i)}
                >
                Delete
                </button>
              </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Tareas
          <span className="badge badge-pill badge-light ml-2">
            {this.state.tareas.length}
          </span>
        </a>
      </nav>

        <div className="container-fluid">
          <div className="col-md-12 mt-4" style={{display:'flex'}}>
            <div className="col-md-4">
                <TareaForm onAddTodo={this.handleAddTodo}></TareaForm>
            </div>
            <div className="col-md-8" style={{display:'flex', flexWrap:'wrap'}}>
                { tareas}
            </div>
          </div>

          <div className="row centrado mt-8">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
