$(document).ready(function() {


    $('.body-container').on('click', function() {
        let pID = $(this).children()[0].dataset.id;

        window.location.href = "/post?id=" + pID;

    });

    // if (window.location.href.includes("?t=")) {
    //     let boxName = window.location.href;
    //     boxName = window.location.href.substring(boxName.indexOf("?t=") + 3);
    //     console.log(boxName);
    //     $.ajax('/api/boxinfo', { type: 'GET', data: boxName }).then(function(data) {
    //         console.log(data);
    //         // console.log("Forum Created");
    //         // location.reload();
    //     });
    // }


    // // The code below handles the case where we want to get posts for a specific box
    //   // Looks for a query param in the url for box_id
    //   var url = window.location.search;
    //   var boxId;
    //   if (url.indexOf("?box_id=") !== -1) {
    //     boxId = url.split("=")[1];
    //     getPosts(boxId);
    //   }
    //   // If there's no boxId we just get all posts as usual
    //   else {
    //     getPosts();
    //   }

    //  // This function grabs posts from the database and updates the view
    //   function getPosts(box) {
    //     boxId = box || "";
    //     if (boxId) {
    //       boxId = "/?box_id=" + boxId;
    //     }
    //     $.get("/api/posts" + boxId, function(data) {
    //       console.log("Posts", data);
    //       posts = data;
    //       if (!posts || !posts.length) {
    //         console.log(box);
    //       }
    //       else {
    //         initializeRows();
    //       }
    //     });
    //   }

    //   // InitializeRows handles appending all of our constructed post HTML inside blogContainer

    //   //REPLACE blogContainer with whatever html elemet will hold posts

    //   function initializeRows() {
    //     blogContainer.empty();
    //     var postsToAdd = [];
    //     for (var i = 0; i < posts.length; i++) {
    //       postsToAdd.push(createNewRow(posts[i]));
    //     }
    //     blogContainer.append(postsToAdd);
    //   }



}) //end of document.ready