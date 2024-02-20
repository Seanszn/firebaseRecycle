function Admin() {
    return (
      <div className="App">
        <h1>Admin Functions</h1>
        <a href = "/userManage"><button>Manage Users</button></a>
        <a href = "/binManage"><button>Manage Bins</button></a>
        <p><a href = "/"><button>Log-in Page</button></a></p>
      </div>
    );
  }
  
  export default Admin;