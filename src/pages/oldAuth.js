import {Auth} from "../components/auth"

function OldAuth() {
    return (
      <div className="App">
        <h1>Recycling App</h1>
        <Auth></Auth>
        <a href = "/admin"><button>Admin Functions</button></a>
        <a href = "/Bins"><button>View Bins</button></a>
        <p><a href = "/"><button>Home</button></a></p>
      </div>
    );
  }

export default OldAuth;