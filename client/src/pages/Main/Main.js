import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Sidebar from '../../components/Sidebar';
import MainPanel from '../../components/MainPanel';

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

    render() {
        return (
            <section className="content">

      
        <div className="container">
        <Sidebar userCount={this.state.users} />
            <div className="main-content">
             {this.state.boxes.map( (box,i) => (
                <Link className =""
                      to={"/Box/" + box.title + "/" + box.id}>
                  <MainPanel 
                    key={i}
                    id={box.id}
                    createdAt={box.createdAt}
                    description={box.description}
                    sentimentScore={box.sentimentScore}
                    title={box.title}
                  />
                </Link>  
                  ))}
            </div>
           
        </div>
      </section>
        );
    }
}

export default Main;