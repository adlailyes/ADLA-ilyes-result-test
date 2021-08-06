var data = [
  {
    "Cheese": 22.2,
    "CHOCOLATE": 10.3,
    "Impulse": 1.5,
    "period": "2021_26"
  },
  {
    "Cheese": 21.8,
    "CHOCOLATE": 9.8,
    "Impulse": 1.5,
    "period": "2021_27"
  },
  {
    "Cheese": 21.2,
    "CHOCOLATE": 9.7,
    "Impulse": 1.4,
    "period": "2021_28"
  }
];
/*
function generateGraph() {
  var dataWithTotal = [];
  
  for (var i = 0; i < data.length; i++) {
    var temp = data[i];
    total = 0;
    for (var key in data[i]) {
      if(key !== "period") {
        total += data[i][key];
        console.log("total :" +total);
      }
    }
    temp.total = total / 3;

    console.log("temp.total:"+temp.total);
    console.log("temp:"+temp);
    dataWithTotal.push(temp);
    console.log("dataWithTotal:"+dataWithTotal);
  }
  
  var labels = [];
  
  for (var i = 0; i < dataWithTotal.length; i++) {
    labels.push(dataWithTotal[i]['period']);
  }
  
  var graphValues = [];
  var keys = Object.keys(dataWithTotal[0]);
  
  for (var i = 0; i < keys.length; i++) {
    if(keys[i] !== "period") {
      var temp = {
        label: keys[i], 
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ], 
      };
  
      for (var n = 0; n < dataWithTotal.length; n++) {
        temp.data.push(dataWithTotal[n][keys[i]])
      }
      
      graphValues.push(temp);
    }
  }
  
  var ctx = document.getElementById('myChartopex2').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: graphValues
    }
  });

  console.log("temp: "+temp);


  console.log("dataWithTotal :"+dataWithTotal);

  console.log("graphValues:"+graphValues);
}

generateGraph();

*/


    var ctx = document.getElementById('myChartopex2');
        var myChartopex2 = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [data[0]['period'],data[1]['period'],data[2]['period']],
                datasets: [{
                    label: 'cheese',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor:'rgba(255, 99, 132, 1)',
                     showLine: true,
                    
                    
                    data: [data[0]['Cheese'],data[1]['Cheese'],data[2]['Cheese']]
                }, {
                    label: 'CHOCOLATE',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                      borderColor:'rgba(54, 162, 235, 1)',
                  showLine: true,
                    data: [data[0]['CHOCOLATE'],data[1]['CHOCOLATE'],data[2]['CHOCOLATE']]
                },
                 {
                    label: 'Impulse',
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                      borderColor:'rgba(255, 206, 86, 1)',
                  showLine: true,
                    data: [data[0]['Impulse'],data[1]['Impulse'],data[2]['Impulse']]
                }
                , {
                    label: 'Total',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                      borderColor:'rgba(75, 192, 192, 1)',
                  showLine: true,
                    data: [(data[0]['Cheese']+data[0]['CHOCOLATE']+data[0]['Impulse'])/3,(data[1]['Cheese']+data[1]['CHOCOLATE']+data[1]['Impulse'])/3,(data[2]['Cheese']+data[2]['CHOCOLATE']+data[2]['Impulse'])/3]
                }]
            },
            options: {
                title: {
                    display: true

                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        
                    }],
                    yAxes: [{

                    }]
                }


            }





        });
