import React from 'react';
import NavBar from './components/navBar';
import Badge from './components/badge';
import BadgeForm from './components/badgeForm';
import CharacterItem from './components/CharacterItem';
import axios from 'axios';

class App extends React.Component {
  state = {
    character: [],
    form: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      userName: '',
    }
  };
  componentDidMount() {
    this.fetchApi();
  }
  componentDidUpdate() {

  }
  componentWillUnmount() {

  }
  fetchApi = () => {
    axios.get("https://rickandmortyapi.com/api/character")
    .then(res => {
      const character = res.data.results;
      
      this.setState({
        ...this.state,
        character
      })
    })
  };
  handleChange = e => {
    this.setState({ 
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      } 
    });
  }
  render() {
    return (
      <>
        <NavBar/> 
        <BadgeForm handleChange = {this.handleChange}/>
        <Badge state={this.state}/>
        <div className="container">
          <div className="row align-items-start">
            {/* <ul className="row"> */}
              {/* <li className="col-6 col-md-3"> */}
                {
                  this.state.character.map(character => (
                    <div className='col-md-3'>
                      <CharacterItem character = {character} key = {character.id} />
                    </div>))
                }
              {/* </li>
            </ul> */}
          </div>
        </div>
      </>
    );
  }
}

export default App;
