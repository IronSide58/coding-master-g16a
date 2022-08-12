import React from "react"
import "../styles/Badge.css"
import logo from "../images/devf-white.png"

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={logo} alt="Devf"></img>
                </div>
                <div className="Badge__section-name">
                    <img src="https://www.gravatar.com/avatar?d=identicon
                    " className="Badge__avatar" alt="avatar"></img>
                    <h1>
                        {this.props.firstName} <br/>
                        {this.props.lastName}
                    </h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.userName}</div>
                </div>
                <div className="Badge__footer">
                    #Devf
                </div>
            </div>
        )
    }
}

export default Badge;