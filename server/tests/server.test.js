const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('../server.js');
const {Todo} = require('./../models/todo.js');

const todos = [{
  _id: new ObjectID(),
  text: "first test todo"
}, {
  _id: new ObjectID(),
  text: "second test todo"
}];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if(err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create a todo if data is wrong', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if(err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
    });
  });

  describe('GET /todos', () => {
    it('should fetch all todos', (done) => {
      request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
    });
  });


  describe('GET /todos/:id', () => {
    it('should fetch a todo from db', (done) => {
      request(app)
        .get(`/todos/${todos[0]._id}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.todo.text).toBe(todos[0].text);
        })
        .end(done);
    });

    it('should return a 404 if todo not found', (done) => {
      var hexId = new ObjectID().toHexString();
      request(app)
        .get('/todos/' + hexId)
        .expect(404)
        .end(done);
    });

    it('should return 404 with invalid id', (done) => {
      var hexId = '12344jdskfjd';
      request(app)
        .get('/todos/' + hexId)
        .expect(404)
        .expect((res) => {

        })
        .end(done);
    });

  });



//fdsf
































//







































//
