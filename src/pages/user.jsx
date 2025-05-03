import Head from 'next/head';

const Users = () => {
  // Data pengguna (contoh)
  const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'Editor' },
    { id: 3, name: 'Michael Brown', email: 'michaelbrown@example.com', role: 'User' },
    { id: 4, name: 'Emily White', email: 'emilywhite@example.com', role: 'User' },
  ];

  return (
    <>
      <Head>
        <title>User Management</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <div className="header">
          <h1>User Management</h1>
          <input
            type="text"
            placeholder="Search users..."
            className="search-input"
          />
        </div>

        <table className="user-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <style jsx>{`
          .container {
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }

          .header h1 {
            margin: 0;
          }

          .search-input {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            width: 250px;
          }

          .user-table {
            width: 100%;
            border-collapse: collapse;
          }

          .user-table th,
          .user-table td {
            padding: 10px;
            text-align: left;
            border: 1px solid #ddd;
          }

          .user-table th {
            background-color: #f4f4f4;
          }

          .edit-btn,
          .delete-btn {
            padding: 6px 12px;
            margin-right: 5px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .edit-btn {
            background-color: #007bff;
            color: white;
          }

          .delete-btn {
            background-color: #dc3545;
            color: white;
          }

          .edit-btn:hover {
            background-color: #0056b3;
          }

          .delete-btn:hover {
            background-color: #c82333;
          }
        `}</style>
      </div>
    </>
  );
};

export default Users;
