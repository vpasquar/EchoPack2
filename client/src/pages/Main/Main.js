import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Sidebar from '../../components/Sidebar';
import BoxPanel from '../../components/BoxPanel';

class Main extends Component {
    //state just includes the articles that will be stored once we contact our API (database)
    state = {
        users: 0,
        boxes: [],
        counter: 0
    };

    componentDidMount() {
        API.getCount()
            .then(res => this.setState({ users: res.data.count }))
            .catch(err => console.log(err));

        API.getBoxMain()
            .then(res => this.setState({ boxes: res.data.box }))
            // .then(res => console.log(res.data.box))
            .catch(err => console.log(err));
    }

    incrementUp = e => {
        e.preventDefault();
        console.log("Adding by One")
        let num = this.state.counter;
        this.setState({counter: this.state.counter +=1});
    };

    incrementDown = e => {
        e.preventDefault();
        console.log("Adding by One")
        this.setState({counter: this.state.counter -= 1});
    };


    render() {
        return (
            <section className="mainpage">

        <button onClick={this.incrementUp}>up</button>
        <button onClick={this.incrementDown}>down</button>

        <p>Counter {this.state.counter} </p>
        <div className="container">
            <div className="main-content">
             {this.state.boxes.map(box => (
                  <BoxPanel 
                    key={box.id}
                    id={box.id}
                    createdAt={box.createdAt}
                    description={box.description}
                    sentimentScore={box.sentimentScore}
                    title={box.title}
                  />
                  ))}
            </div>
           <Sidebar userCount={this.state.users} />
        </div>
      </section>
        );
    }
}

export default Main;