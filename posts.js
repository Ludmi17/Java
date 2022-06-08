'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        this.text = prompt("Введите текст")
    }
}

const Post1 = new Post('Иванова', text, '5');
Product1.edit();

console.log(Post1);



function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function () {
    this.text = prompt("Введите текст")
};


class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date)
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}


function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

const Attached1 = new AttachedPost('name', 'text txt', new Date());
console.log(Attached1);
Attached1.makeTextHighlighted();
Attached1.edit('Lorem Ipsum');
console.log(Attached1);