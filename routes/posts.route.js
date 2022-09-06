const router = require("express").Router;
const {
    createPost, 
    deletePost, 
    getPosts, 
    getPost, 
    updatePost
} = require("../controllers/posts.controllers");

const postRouter = router();

postRouter.route("/").post(createPost).get(getPosts);
postRouter.route("/:postId")
            .get(getPost)
            .patch(updatePost)
            .delete(deletePost);

module.exports = postRouter;