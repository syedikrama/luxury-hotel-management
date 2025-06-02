// src/components/Charts.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export function WorldwideSalesChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef} style={{ height: '300px' }}></canvas>;
}

export function SalesRevenueChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Revenue',
          data: [3, 10, 13, 15, 22],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef} style={{ height: '300px' }}></canvas>;
}
