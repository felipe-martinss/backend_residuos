const db = require('../db');

const listar = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM ocorrencia');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const buscarPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM ocorrencia WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ erro: 'Registro não encontrado' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const criar = async (req, res) => {
  const { usuarioId, local, tipoResiduo, nivelRisco, data, status } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO ocorrencia (usuarioId, local, tipoResiduo, nivelRisco, data, status) VALUES (?, ?, ?, ?, ?, ?)',
      [usuarioId, local, tipoResiduo, nivelRisco, data, status]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const atualizar = async (req, res) => {
  const { id } = req.params;
  const { usuarioId, local, tipoResiduo, nivelRisco, data, status } = req.body;
  try {
    await db.query(
      'UPDATE ocorrencia SET usuarioId = ?, local = ?, tipoResiduo = ?, nivelRisco = ?, data = ?, status = ? WHERE id = ?',
      [usuarioId, local, tipoResiduo, nivelRisco, data, status, id]
    );
    res.json({ mensagem: 'Atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const deletar = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM ocorrencia WHERE id = ?', [id]);
    res.json({ mensagem: 'Removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const resumo = async (req, res) => {
    try {
        const [resumo] = await db.query(
            'SELECT COUNT(*) AS Total FROM ocorrencia'
        );
        const [ocorrencia] = await db.query(
            'SELECT * FROM ocorrencia'
        );
        res.json({
            resumo: resumo,
            eventos: ocorrencia
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: err.message });
    }
};

module.exports = { listar, buscarPorId, criar, atualizar, deletar, resumo };
