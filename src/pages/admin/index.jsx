import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <div className="sidebar">
          <h2>Admin Panel</h2>
         
          <a href="#">Dashboard</a>
         
          <a href="admin/tes">Reports</a>
          <a href="admin/setting">Settings</a>
          <a href="#">Logout</a>
        </div>

        <div className="main-content">
          <div className="header">
            <h1>Dashboard</h1>
            <div>Welcome, Admin</div>
          </div>

          <div className="card-container">
            <div className="card">
              <h3>Total Users</h3>
              <p>1,245</p>
            </div>
            <div className="card">
              <h3>Revenue</h3>
              <p>$34,567</p>
            </div>
            <div className="card">
              <h3>New Orders</h3>
              <p>123</p>
            </div>
            <div className="card">
              <h3>Feedbacks</h3>
              <p>87</p>
            </div>
          </div>

          <div className="chart">
            <h2>Sales Overview</h2>
            <p>(Placeholder for chart)</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          display: flex;
          height: 100vh;
        }

        .container {
          display: flex;
          height: 100vh;
        }

        .sidebar {
          width: 250px;
          background-color: #ffee00f1;
          color: rgb(0, 0, 0);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
         
        }

        .sidebar h2 {
          text-align: center;
        }

        .sidebar a {
          color: white;
          text-decoration: none;
          padding: 10px;
          margin: 5px 0;
          background-color: #000000ec;
          border-radius: 5px;
        }

        .sidebar a:hover {
          background-color: #001afff1;
        }

        .dropdown {
          position: relative;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          left: 0;
          background-color:#ffee00f1;
          min-width: 200px;
          box-shadow: 0 2px 5px rgb(0, 0, 0);
          z-index: 1;
          padding: 10px 0;
           margin: 5px 0;
        }

        .dropdown-content a {
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          display: block;
          
         
        }

        .dropdown-content a:hover {
          background-color: #f1f1f1;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        .main-content {
          flex-grow: 1;
          background-color: #ecf0f1;
          padding: 20px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #ffee00f1;
          color: rgb(0, 0, 0);
          padding: 10px 20px;
        }

        .header h1 {
          margin: 0;
        }

        .card-container {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .card {
          flex: 1 1 calc(25% - 20px);
          background-color: white;
          border: 1px solid #000000;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.514);
          text-align: center;
        }

        .card h3 {
          margin: 0 0 10px;
        }

        .chart {
          margin-top: 20px;
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          border: 1px solid #000000;
        }
      `}</style>
    </>
  );
}

export default Home;
