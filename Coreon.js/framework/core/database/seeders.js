// This file provides functionality to seed the database with initial data.

const { User, Post, Comment } = require('../models'); // Assuming models are defined in a models directory

const seedUsers = async () => {
    const users = [
        { username: 'user1', email: 'user1@example.com', password: 'password1' },
        { username: 'user2', email: 'user2@example.com', password: 'password2' },
        { username: 'user3', email: 'user3@example.com', password: 'password3' },
    ];

    await User.bulkCreate(users);
};

const seedPosts = async () => {
    const posts = [
        { title: 'First Post', content: 'This is the content of the first post.', userId: 1 },
        { title: 'Second Post', content: 'This is the content of the second post.', userId: 2 },
        { title: 'Third Post', content: 'This is the content of the third post.', userId: 3 },
    ];

    await Post.bulkCreate(posts);
};

const seedComments = async () => {
    const comments = [
        { content: 'Great post!', postId: 1, userId: 2 },
        { content: 'Thanks for sharing!', postId: 1, userId: 3 },
        { content: 'Interesting thoughts.', postId: 2, userId: 1 },
    ];

    await Comment.bulkCreate(comments);
};

const seedDatabase = async () => {
    await seedUsers();
    await seedPosts();
    await seedComments();
    console.log('Database seeded successfully!');
};

module.exports = { seedDatabase };