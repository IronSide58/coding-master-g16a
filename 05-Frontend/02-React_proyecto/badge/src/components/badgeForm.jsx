import React from "react";

class BadgeForm extends React.Component {
    render() {
        return (
            <div className="col Badge">
                <h1>Crear Card</h1>
                <form>
                    <div className="form-group">
                        <label>Primer Nombre</label>
                        <input onChange={this.props.handleChange} type="text" className="form-control" name="firstName"/>
                    </div>
                    <div className="form-group">
                        <label>Apellido</label>
                        <input onChange={this.props.handleChange} type="text" className="form-control" name="lastName"/>
                    </div>
                    <div className="form-group">
                        <label>Ocupación</label>
                        <input onChange={this.props.handleChange} type="text" className="form-control" name="jobTitle"/>
                    </div>
                    <div className="form-group">
                        <label>Usuario</label>
                        <input onChange={this.props.handleChange} type="text" className="form-control" name="userName"/>
                    </div>
                    <button type="submit" className="form-control btn btn-primary">Enviar</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;