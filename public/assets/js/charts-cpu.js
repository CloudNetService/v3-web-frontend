/*
 *    Copyright 2020 CloudNetService Project and contributors
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

const linecpuConfig = {
  type: 'line',
  data: {
    labels: ['14:00', '14:10', '14:20', '14:30', '14:40', '14:50', '15:00'],
    datasets: [
      {
        label: 'Usage in %',
        backgroundColor: '#5b96f7',
        borderColor: '#5b96f7',
        data: [0, 12, 32, 90, 50, 43, 70],
        fill: false,
      }
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: false,
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
    },
  },
}

const lineId = document.getElementById('cpu')
window.myLine = new Chart(lineId, linecpuConfig)