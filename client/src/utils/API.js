import axios from 'axios';

export default {

  //create user

  //login user

  //user count
  getCount: function(){
    return axios.get("/api/usercount");
  },
 
  // get boxes/forums(main page) ######MAIN

  getBoxMain: function(){
    return axios.get("/api/home");
  }
 
 // create box/forum             ######MAIN/USERCREATE

  // get posts from individual box page      ######BOX

  // create post for individual box page     ####### BOX/USERCREATE

  //delete post??                         ###### BOX

  //get comments for individual post         ##### POST
 
  //create comment                         ###### POST

  //delete comment?                       #######POST
 

  
};
