const mainController = {
    home:(req, res)=>{
        const skills = [
            {name: 'Node.js', img:'/images/node-js.png'},
            {name: 'React.js', img:'/images/react.png'},
            {name: 'JavaScript', img:'/images/js.png'},
            {name: 'HTML5', img:'/images/html.png'},
            {name: 'CSS', img:'/images/css-3.png'},
            {name: 'Express.js', img:'/images/express.png'},
            {name: 'MySQL', img:'/images/mysql.png'},
            {name: 'Sequelize', img:'/images/sequelize.svg'},
            {name: 'API', img:'/images/api.png'},
            {name: 'Git', img:'/images/git.png'},
            {name: 'Git Hub', img:'/images/github.png'},
            {name: 'SCRUM', img:'/images/scrum.png'},
            {name: 'Postman', img:'/images/postman.svg'},
            {name: 'MVC', img:'/images/architecture.png'},
        ]
        
        
        res.render('index',{title:'Portfolio Francisco Lopez Coppari', skills})
    }
}
module.exports = mainController