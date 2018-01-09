import axios from 'axios';

export default {



  //user count
  getCount: function(){
    return axios.get("/api/usercount");
  },
 
  // get boxes/forums(main page) ######MAIN

  getBoxMain: function(){
    return axios.get("/api/home");
  },
 
   //create user
  saveNewUser: function(query) {
    return axios.post("/api/createUser", query);
  },

  loginUser: function(query) {
    return axios.post("/api/login", query);
  },
  //login user
 // create box/forum             ######MAIN/USERCREATE
 createBox: function(){
   return axios.post("/api/box");
 },

  // get posts from individual box page      ######BOX
  getPosts:function(boxId){
    return axios.get("../../api/posts/" + boxId);
  },

  // create post for individual box page     ####### BOX/USERCREATE
  createPost: function(){
    return axios.post("/api/checkbox");
  },

  //delete post??                         ###### BOX


  //get comments for individual post         ##### POST
  getComments: function(postId) {
    return axios.get("../../../api/comments/" + postId)
  },

  createComment: function(query) {
    return axios.post("../../../api/saveComment", query)
  }
 
  //create comment                         ###### POST

  //delete comment?                       #######POST
 

  
};
