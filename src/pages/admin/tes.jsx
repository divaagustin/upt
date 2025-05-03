import Head from 'next/head';
import Link from 'next/link';

function Layout({ children }) {
  return (
    <div className="container">
      <div className="sidebar">
        <h2 className="panel">Admin Panel</h2>
        <a href="/admin">Dashboard</a>
        <a href="#">Reports</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
      </div>
      <div className="main-content">{children}</div>
      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
        }
        .sidebar {
          width: 250px;
          background-color: #ffee00;
          color: black;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          text-align: center;
        }
        .sidebar a {
          color: white;
          text-decoration: none;
          padding: 10px;
          margin: 5px 0;
          background-color: black;
          border-radius: 5px;
          display: block;
        }
        .sidebar a:hover {
          background-color: #001aff;
        }
        .main-content {
          flex-grow: 1;
          padding: 20px;
          background-color: #f9f9f9;
          display: flex;
          flex-direction: column;
          align-items: center;
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

        
        }
      `}</style>
    </div>
  );
}

function Settings() {
  return (
    <Layout>
      <Head>
        <title>Settings</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="main-content">
          <div className="header">
            <h1>Dashboard</h1>
            <div>Welcome, Admin</div>
          </div>
          </div>

     
    </Layout>
  );
}

export default Settings;
