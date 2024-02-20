import {Auth} from "../components/auth"

function Home() {
    return (
      <div className="App">
        <h1>Recycle App</h1>
        <a href = "/createAccount"><button>New Account System</button></a>
        <a href = "oldAuth"><button>Old Account System</button></a>
      </div>
    );
  }
  
  export default Home;
