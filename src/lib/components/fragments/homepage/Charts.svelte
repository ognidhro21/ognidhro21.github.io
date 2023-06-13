<script>
  import Chart from 'svelte-frappe-charts';

  let data = {
    labels: ["L1S1","L1S2","L2S1"],
    datasets: [
      {
        name: "1901141",
        values: [3.443,3.532,3.639]
      },
      {
        name: "1901143",
        values: [3.743,3.432,3.5]
      },
      {
        name: "1901120",
        values: [4,3.932,4]
      }
    ]
  };
</script>

<Chart data={data} type="line" />