import React, { useState } from 'react';

const PlanGenerator = ({ subjects, onGenerate }) => {
  const [totalTime, setTotalTime] = useState('');

  const handleGenerate = e => {
    e.preventDefault();
    if (!totalTime || subjects.length === 0) return;
    onGenerate(Number(totalTime));
  };

  return (
    <form onSubmit={handleGenerate}>
      <input
        type="number"
        className="input"
        placeholder="Total Available Study Time (hours)"
        value={totalTime}
        onChange={e => setTotalTime(e.target.value)}
        required
      />
      <button type="submit">Generate Plan</button>
    </form>
  );
};

export default PlanGenerator;
