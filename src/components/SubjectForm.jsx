import React, { useState } from 'react';

const SubjectForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState(1);
  const [weightage, setWeightage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) return;
    onAdd({ name, difficulty: Number(difficulty), weightage: weightage ? Number(weightage) : undefined });
    setName('');
    setDifficulty(1);
    setWeightage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="Subject Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <div>
        <label>Difficulty:</label>
        <input
          type="number"
          min="1"
          max="5"
          className="input"
          style={{ width: '60px', marginLeft: '8px', marginRight: '16px' }}
          value={difficulty}
          onChange={e => setDifficulty(e.target.value)}
        />
        <label>Weightage (optional):</label>
        <input
          type="number"
          className="input"
          style={{ width: '80px', marginLeft: '8px' }}
          value={weightage}
          onChange={e => setWeightage(e.target.value)}
        />
      </div>
      <button type="submit">Add Subject</button>
    </form>
  );
};

export default SubjectForm;
