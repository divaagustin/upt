import connection from '../../db_models/db_connect';

export default function handler(req, res) {
  if (req.method === 'GET') {
    connection.query('SELECT * FROM tb_nama', (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Error querying database' });
        return;
      }
      res.status(200).json(results);
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
