import {Auth} from "../components/auth"

function Home() {
    return (
      <div className="App">
        <h1>Recycle App</h1>
        <Auth></Auth>
        <a href = "/createAccount"><button>Create Account</button></a>
        <a href = "/Bins"><button>View Bins</button></a>
        <p><a href = "/admin"><button>Admin Functions</button></a></p>
      </div>
    );
  }
  
  export default Home;
