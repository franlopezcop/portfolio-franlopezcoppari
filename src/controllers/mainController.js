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

        const projects =[
            {title: "Blackfe - E-commerce", 
            img:'/images/project1.png',  
            pLink:'https://ecommerce-blackfe-francisco-lopez-coppari.onrender.com', 
            gLink:'https://github.com/franlopezcop/E-commerce_Blackfe', 
            desc:'Web que simula un e-commerce de mi emprendimiento personal Blackfe, dedicado a la venta de muebles estilo industrial', 
            languages:['Node', 'Express', 'Javascript', 'Sequelize', 'EJS', 'MySQL']},

            {title: "Blackfe - API", 
            img:'/images/project2.png', 
            pLink:'https://ecommerce-blackfe-api.onrender.com', 
            gLink:'https://github.com/franlopezcop/E-commerce_Blackfe-API', 
            desc:'Proyecto que provee endpoints para ser consumidos en la app de React', 
            languages:['Node', 'Express', 'Javascript', 'Postman']},

            {title: "Blackfe - React Dashboard", 
            img:'/images/project3.png', 
            pLink:'https://ecommerce-blackfe-reactdashboard.onrender.com', 
            gLink:'https://github.com/franlopezcop/E-commerce_Blackfe-React', 
            desc:'Dashboard para ver estadísticas de mi e-commerce', 
            languages:['Node', 'React', 'Javascript', 'API']},

            {title: "Pimienta & Sal",
            img:'/images/project4.jpg',
            pLink:'https://pimienta-y-sal.onrender.com/', 
            gLink:'https://github.com/franlopezcop/pimienta-sal', 
            desc:'Fine Dining Menu con base de datos harcodeada', 
            languages:['Node', 'EJS', 'Javascript', 'CSS']},

            {title: "Mercado Liebre",
            img:'/images/project5.jpg',
            pLink:'https://mercado-liebre-xmz5.onrender.com', 
            gLink:'https://github.com/franlopezcop/mercado-liebre-LopezCoppari', 
            desc:'Projecto para practicar front-end y CRUD en base de datos', 
            languages:['Node', 'Boostrap', 'Javascript', 'CSS']}
        ]
        
        
        res.render('index',{title:'Portfolio Francisco Lopez Coppari', skills, projects})
    }
}
module.exports = mainController