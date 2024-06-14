const lineCtx = document.getElementById('lineChart').getContext('2d')
new Chart(lineCtx, {
	type: 'line',
	data: {
		labels: labels,
		datasets: [
			{
				label: 'Sales Amount',
				data: data,
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
})
