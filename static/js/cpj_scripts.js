// ****************************************************************************************

// Bar Chart - Jop Openings based the degree 

// ****************************************************************************************

let trace1 = {
    x: degreeData.degrees_list,
    y: degreeData.degree_counts,
    marker: {color: 'rgb(171,34,105)'},
    type: "bar"
  };

  let layout = {
  title: "Jobs vs Degree",
  
};

  let traceData = [trace1];

  Plotly.newPlot("degreebar", traceData, layout);



// **********************************************************************************************

//  Bar Chart for Job Openings in each State

// **********************************************************************************************

let trace2 = {
      x: regionData.regions_us, 
      y: regionData.regions_count, 
      marker: {color: 'rgb(250, 128, 114)'},
      type: "bar"

  };

  let layout1 = {
  title: "Jobs Available in Each State"
};

let traceRegions = [trace2];

Plotly.newPlot("regionsbar",traceRegions, layout1);



// **********************************************************************************************

//  Bar Chart - Masters Degree and Doctors Degree openings in each state

// **********************************************************************************************


var trace3 = {
  x: ['CA', 'GA', 'FL', 'TX', 'IL', 'NJ', 'MO', 'PA', 'MA', 'NY', 'MD', 'VA', 'IN', 'TN', 'OH', 'MI', 'NC', 'OR', 'AL', 'MN', 'NH', 'CO', 'SC', 'ID', 'OK', 'AZ', 'DC', 'IA', 'NM' , 'PR', 'WA', 'LA'],
  y: [5,0,0,2,4,2,0,1,1,0,1,0,0,0,2,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1],
  name: 'Doctorate Openings',
  type: 'bar'
};

var trace4 = {
  x: ['CA', 'GA', 'FL', 'TX', 'IL', 'NJ', 'MO', 'PA', 'MA', 'NY', 'MD', 'VA', 'IN', 'TN', 'OH', 'MI', 'NC', 'OR', 'AL', 'MN', 'NH', 'CO', 'SC', 'ID', 'OK', 'AZ', 'DC', 'IA', 'NM' , 'PR', 'WA', 'LA'],
  y: [18, 17, 12, 8, 5, 5,7, 6,   5, 6, 4, 5, 4, 3, 1, 2, 3, 3, 2, 1, 2, 2, 2, 1, 0, 1, 1, 0, 1, 0, 1,  0],
  name: "Master's Openings",
  type: 'bar'
};

var data = [trace3, trace4];

var layoutbar = {barmode: 'group', title: "Job Openings for Master's and Doctorate Degree Holders"};

Plotly.newPlot('mastersbar', data, layoutbar);


