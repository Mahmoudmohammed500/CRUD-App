import '../CSS/home.css';
function Home() {
    return (
     <>
   <h1 className="text-center">Home page</h1>
<br></br><br></br><br></br>
   <div className="container">
   <h3 className="mb-2">Crud App</h3>
   <div className="mb-4">Create, Read, Update, and Delete (CRUD) are the four basic functions that models should be able to do, at most.</div>
   <h4 className="mb-2">Create, Read, Update, Delete</h4>
   <div className="info">When we are building APIs, we want our models to provide four basic types of functionality. The model must be able to Create, Read, Update, and Delete resources. Computer scientists often refer to these functions by the acronym CRUD. A model should have the ability to perform at most these four functions in order to be complete. If an action cannot be described by one of these four operations, then it should potentially be a model of its own.</div>
   </div>
     </>
    );
  }
  
  export default Home;
  