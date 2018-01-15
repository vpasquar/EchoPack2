import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Sidebar from '../../components/Sidebar';
import BoxPanel from '../../components/BoxPanel';
import Nav from '../../components/Nav';

class Main extends Component {
    //state just includes the articles that will be stored once we contact our API (database)
    state = {
        users: 0,
        boxes: [],
        counter: 0,
        activeUser: ""
    };

    componentWillMount() {

    }

    componentDidMount() {
        API.checkUser()
            .then(res => {
                if (res.data.user) {

                    console.log(res.data.user);
                    this.setState({ activeUser: res.data.user.userName })
                    //success, user exists do something
                } else {

                    console.log("user not logged in");
                    //user not loggined in do something
                }
            })
            .catch(err => console.log(err));
        API.getCount()
            .then(res => this.setState({ users: res.data.count }))
            .catch(err => console.log(err));

        API.getBoxMain()
            .then(res => {
                console.log(res.data);
                this.setState({ boxes: res.data.box })
            })

            // .then(res => console.log(res.data.box))
            .catch(err => console.log(err));
    }

    handleLogout = () => {
        API.logoutUser()
            .then(res => {
                console.log(res.data);
                this.setState({ activeUser: "" });
            });

    }

    render() {
        return (
            <div>
    <Nav active={this.state.activeUser} handleLogout={this.handleLogout}/>
    <section className="content">  
    <div className="container">
        <Sidebar userCount={this.state.users} />
            <div className="main-content">
                <div className="container clean">
                 {this.state.boxes.map((box,i) => (
                    <Link className =""
                          to={"/Box/" + box.title} key={i}>
                      <BoxPanel 
                        key={i}
                        id={box.id}
                        createdAt={box.createdAt}
                        description={box.description}
                        sentimentScore={box.sentimentScore}
                        title={box.title}
                        userName={box.userName}
                      />
                    </Link>  
                      ))}
                </div>
            </div>
           
        </div>
      </section>
      </div>
        );
    }
}

export default Main;