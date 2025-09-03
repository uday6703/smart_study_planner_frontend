import React from 'react';
// Only import jsPDF if available, otherwise instruct user to install it
// import jsPDF from 'jspdf';


const PlanView = ({ plan, subjects }) => {
  if (!plan) return null;



  const handleDownloadPDF = async () => {
    let jsPDF;
    try {
      jsPDF = (await import('jspdf')).default;
    } catch (e) {
      alert('Please install jsPDF ');
      return;
    }
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Study Plan', 14, 18);
    doc.setFontSize(12);
    let y = 30;
    doc.text('Subject', 14, y);
    doc.text('Time Allocated (hours)', 80, y);
    y += 8;
    plan.subjects.forEach(s => {
      const subj = subjects.find(sub => sub._id === s.subjectId || sub.id === s.subjectId);
      doc.text(subj ? subj.name : 'Unknown', 14, y);
      doc.text(s.allocatedTime.toFixed(2), 80, y);
      y += 8;
    });
    y += 4;
    doc.text(`Total Time: ${plan.totalTime} hours`, 14, y);
    doc.save('study_plan_by_uday.pdf');
  };

  return (
    <div style={{ marginTop: '24px' }}>
      <h2>Generated Study Plan</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Time Allocated (hours)</th>
          </tr>
        </thead>
        <tbody>
          {plan.subjects.map((s, idx) => {
            const subj = subjects.find(sub => sub._id === s.subjectId || sub.id === s.subjectId);
            return (
              <tr key={idx}>
                <td>{subj ? subj.name : 'Unknown'}</td>
                <td>{s.allocatedTime.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ marginTop: '12px' }}>Total Time: <b>{plan.totalTime}</b> hours</div>
      <div style={{ marginTop: '18px', display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={handleDownloadPDF}>
          Download Plan (PDF)
        </button>
      </div>
    </div>
  );
};

export default PlanView;
