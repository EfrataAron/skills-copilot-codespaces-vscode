// Create web server
// Create web server for comment
//==============================

// Import module
const express = require('express');
const router = express.Router();
const commentController = require('./controllers/commentController');  // Adjust the path as necessary

// Handle request
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.post('/create', commentController.comment_create_post);
router.get('/:id/delete', commentController.comment_delete_get);
router.post('/:id/delete', commentController.comment_delete_post);
router.get('/:id/update', commentController.comment_update_get);
router.post('/:id/update', commentController.comment_update_post);
router.get('/:id', commentController.comment_detail);

// Create the Express application
const app = express();

// Use the router
app.use('/comments', router);

// Start the server and listen on a specified port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

