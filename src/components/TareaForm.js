import React, { Component } from 'react';

// Formulario para agregar nueva tarea
class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      titulo: '',
      responsable: '',
      descripcion: '',
      prioridad: 'low'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body" id="formAdd">
        <div className="col-md-12 centrado mb-2">
          <h3>Nueva tarea</h3>
        </div>
          <div className="form-group">
            <input
              type="text"
              name="titulo"
              className="form-control text-capitalize"
              value={this.state.titulo}
              onChange={this.handleInputChange}
              placeholder="Título"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsable"
              className="form-control text-capitalize"
              value={this.state.responsable}
              onChange={this.handleInputChange}
              placeholder="Responsable"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="descripcion"
              className="form-control text-capitalize"
              value={this.state.descripcion}
              onChange={this.handleInputChange}
              placeholder="Descripción"
              />
          </div>
          <div className="form-group">
            <select
                name="prioridad"
                className="form-control"
                value={this.state.prioridad}
                onChange={this.handleInputChange}
              >
              <option>baja</option>
              <option>media</option>
              <option>alta</option>
            </select>
          </div>

          <div style={{display:'flex', justifyContent:'flex-end'}}>
            <button type="submit" className="btn btn-success">
              Save
            </button>

          </div>

        </form>
      </div>
    )
  }

}

export default TodoForm;
