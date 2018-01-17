import axios from 'axios';

export default {



    //user count
    getCount: function() {
        return axios.get("/api/usercount");
    },

    // get boxes/forums(main page) ######MAIN

    getBoxMain: function() {
        return axios.get("/api/home");
    },

    //create user
    saveNewUser: function(query) {
        return axios.post("/api/createUser", query);
    },

    loginUser: function(query) {
        return axios.post("/api/login", query);
    },

    checkUser: function() {
        return axios.get("/api/logincheck");
    },

    logoutUser: function() {
        return axios.get("../../api/logout");
    },

    searchUserId: function() {
        return axios.get("api/searchUserId");
    },
    //login user
    // create box/forum             ######MAIN/USERCREATE
    createBox: function(boxQuery) {
        return axios.post("/api/box", boxQuery);
    },
    getBoxInfo: function(bId) {
        return axios.get("/api/boxinfo/" + bId);
    },

    // get posts from individual box page      ######BOX
    getPosts: function(boxId) {
        return axios.get("../../api/posts/" + boxId);
    },
    getPostInfo: function(pId) {
        return axios.get("../../api/postinfo/" + pId);
    },

    // create post for individual box page     ####### BOX/USERCREATE
    createPost: function(postQuery) {
        return axios.post("/api/posts", postQuery);
    },

    getPostId: function(postTitle) {
        return axios.get("../../api/checkPost/" + postTitle)
    },

    //delete post??                         ###### BOX


    //get comments for individual post         ##### POST
    getComments: function(postId) {
        return axios.get("../../../api/comments/" + postId);
    },

    createComment: function(query) {
        return axios.post("../../../api/saveComment", query);
    },

    getUserName: function(authorId) {
        return axios.get("../../../api/Users/" + authorId);
    },

    //create comment                         ###### POST
    getBoxId: function(postQuery) {
        // console.log(postQuery)
        return axios.get("../../api/checkBox/" + postQuery.pBox);
    },

    //delete comment?                       #######POST
    //sentiment grab                         ########USERCREATE

    getSentiment: function(content) {
        // console.log(content);
        return axios.post("../../api/sentiment", content);
    }


};