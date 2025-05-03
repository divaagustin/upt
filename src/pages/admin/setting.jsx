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
         
        }
        .sidebar h2{
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
          color: rgb(5, 5, 5);
          padding: 10px 20px;
        }

        .header h1 {
          margin: 0;
        }
        
       .settings-section{
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
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
      <div className="header">
            <h1>Setting</h1>
            <div>Welcome, Admin</div>
          </div>

          <div className="settings-container">
        <div className="settings-section">
          <h2>Profile Settings</h2>
          <p>Update your profile information.</p>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <button>Save Changes</button>
        </div>
        
        <div className="settings-section">
          <h2>Security</h2>
          <p>Change your password and enable two-factor authentication.</p>
          <input type="password" placeholder="Current Password" />
          <input type="password" placeholder="New Password" />
          <button>Update Password</button>
        </div>
        
        <div className="settings-section">
          <h2>Notifications</h2>
          <p>Manage your notification preferences.</p>
          <label><input type="checkbox" /> Email Notifications</label>
          <label><input type="checkbox" /> SMS Notifications</label>
          <button>Save Preferences</button>
        </div>
      </div>
      
     
    </Layout>
  );
}

export default Settings;
