const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Gain",
        data: [20, 40, 60, 80, 60, 40, 80, 60],
        backgroundColor: "#FECE76",
        borderWidth: 1,
      },
      {
        label: "Lost",
        data: [-20, -40, -20, -40, 0, -10, -20, -40],
        backgroundColor: "#D03C55",
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
});
