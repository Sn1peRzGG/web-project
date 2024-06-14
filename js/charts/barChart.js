const barCtx = document.getElementById('barChart').getContext('2d')
new Chart(barCtx, {
	type: 'bar',
	data: {
		labels: labels,
		datasets: [
			{
				label: 'Sales Amount',
				data: data,
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
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
