var Todos = require('../models/todomodel')

module.exports = function(app){

    app.get('/api/setupTodos',function(req, res){

    //seed datbase
       var starterTodos =[
           {
               username:'yash',
               todo:'getup early morning',
               isDone: false,
               hasAttachment: false
           },
           {
               username:'yash',
               todo:'do excercise',
               isDone:false,
               hasAttachment:false
           },
           {
               username:'yash',
               todo:'learn node',
               isDone:false,
               hasAttachment:false
           }
       ]
         Todos.create(starterTodos,function(err,results){
             res.send(results)
         })

    })
}