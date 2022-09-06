const getPosts = (req, res) => {
    res.status(200).send(`Get All Posts filtered by "${req.query.title}"`);
};

const getPost = (req, res) => {
    res.status(200).send("Get Single Post with ID 555")
};

const createPost = (req, res) => {
    res.status(201).send("Post created on 6/9/22")
};

const updatePost = (req, res) => {
    res.status(200).send(`Post with ID ${req.params.postId} has been updated`)
};

const deletePost = (req, res) => {
    res.
    status(200)
    .send(`Post with ID ${req.params.postId} has been deleted`)
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
}; 