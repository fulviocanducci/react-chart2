import { useState } from 'react';
import { Bar, Doughnut, HorizontalBar, Line, Pie } from 'react-chartjs-2';

function App() {
  const [data, setData] = useState({
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: [
          'rgba(63, 191, 191, 0.5)',
          'rgba(191, 63, 63, 0.5)',
          'rgba(244,244, 137)',
        ],
      },
    ],
    labels: ['Red', 'Yellow', 'Blue'],
  });
  const random = () => Math.random() * (1000 - 1) + 1;
  const handleRandom = () => {
    const datas = [parseInt(random()), parseInt(random()), parseInt(random())];
    let item = data;
    item.datasets[0].data = datas;
    setData((state) => ({ ...state, ...item }));
  };
  return (
    <div className="App">
      <Pie data={data} redraw={true} />
      <Doughnut data={data} redraw={true} />
      <Bar data={data} redraw={true} />
      <HorizontalBar data={data} />
      <Line data={data} />
      <button onClick={handleRandom}>New Value</button>
    </div>
  );
}

export default App;
