import React, { useState } from 'react';
import SubjectForm from '../components/SubjectForm';
import PlanGenerator from '../components/PlanGenerator';
import PlanView from '../components/PlanView';

const Dashboard = () => {
  const [subjects, setSubjects] = useState([]);
  const [plan, setPlan] = useState(null);

  const handleAddSubject = subject => {
    setSubjects([...subjects, { ...subject, id: Date.now().toString() }]);
  };

  const handleGenerate = totalTime => {
    const totalWeight = subjects.reduce((sum, s) => sum + (s.weightage || s.difficulty), 0);
    const planSubjects = subjects.map(s => ({
      subjectId: s.id,
      allocatedTime: ((s.weightage || s.difficulty) / totalWeight) * totalTime
    }));
    setPlan({ totalTime, subjects: planSubjects });
  };

  return (
    <div className="container">
      <h2>Add Subjects</h2>
      <SubjectForm onAdd={handleAddSubject} />
      <div style={{ marginTop: '24px' }}>
        <h3>Subjects:</h3>
        <ul>
          {subjects.map(s => (
            <li key={s.id}>{s.name} (Difficulty: {s.difficulty}{s.weightage ? `, Weightage: ${s.weightage}` : ''})</li>
          ))}
        </ul>
        <PlanGenerator subjects={subjects} onGenerate={handleGenerate} />
        <PlanView plan={plan} subjects={subjects} />
      </div>
    </div>
  );
};

export default Dashboard;
