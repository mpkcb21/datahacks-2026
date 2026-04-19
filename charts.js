const C = {
  grid:'rgba(255,255,255,0.05)',text:'rgba(200,220,232,0.7)',
  blue:'#378ADD',teal:'#1D9E75',coral:'#D85A30',
  amber:'#BA7517',red:'#E24B4A',purple:'#7F77DD',
};

function baseOpts(yLabel,xLabel){
  return{
    responsive:true,maintainAspectRatio:false,
    plugins:{legend:{display:false}},
    scales:{
      x:{ticks:{color:C.text,font:{size:10},maxTicksLimit:10,maxRotation:0},grid:{color:C.grid},
         title:xLabel?{display:true,text:xLabel,color:C.text,font:{size:10}}:{display:false}},
      y:{ticks:{color:C.text,font:{size:10}},grid:{color:C.grid},
         title:yLabel?{display:true,text:yLabel,color:C.text,font:{size:10}}:{display:false}}
    }
  };
}

function line(id,datasets,yLabel,xLabel){
  const ctx=document.getElementById(id);
  if(!ctx)return;
  return new Chart(ctx,{type:'line',data:{datasets},options:{...baseOpts(yLabel,xLabel),parsing:false}});
}

function initCharts(){
  const D=CHART_DATA;

  line('chartTemp',[
    {label:'Observed',data:D.temp.values.map((v,i)=>({x:D.temp.years[i],y:v})),
     borderColor:C.blue,backgroundColor:C.blue+'18',fill:true,tension:.3,pointRadius:2,borderWidth:2},
    {label:'Forecast',data:D.temp.fc_vals.map((v,i)=>({x:D.temp.fc_years[i],y:v})),
     borderColor:C.blue,borderDash:[5,4],backgroundColor:'transparent',pointRadius:1,borderWidth:1.5},
    {label:'Heatwave',data:[{x:2014,y:1.135},{x:2015,y:1.743},{x:2016,y:0.704}],
     borderColor:C.red,backgroundColor:'transparent',pointRadius:6,pointStyle:'triangle',showLine:false}
  ],'Anomaly (°C)','Year');

  line('chartOxy',[
    {label:'Observed',data:D.oxygen.values.map((v,i)=>({x:D.oxygen.years[i],y:v})),
     borderColor:C.teal,backgroundColor:C.teal+'18',fill:true,tension:.3,pointRadius:2,borderWidth:2},
    {label:'Forecast',data:D.oxygen.fc_vals.map((v,i)=>({x:D.oxygen.fc_years[i],y:v})),
     borderColor:C.teal,borderDash:[5,4],backgroundColor:'transparent',pointRadius:1,borderWidth:1.5}
  ],'Anomaly (ml/L)','Year');

  line('chartAnchovy',[
    {label:'Observed',data:D.anchovy.values.map((v,i)=>({x:D.anchovy.years[i],y:v})),
     borderColor:C.teal,backgroundColor:C.teal+'18',fill:true,tension:.3,pointRadius:3,borderWidth:2},
    {label:'Forecast',data:D.anchovy.fc_vals.map((v,i)=>({x:D.anchovy.fc_years[i],y:v})),
     borderColor:C.teal,borderDash:[5,4],backgroundColor:'transparent',pointRadius:1,borderWidth:1.5}
  ],'Larvae / 10m²','Year');

  line('chartSardine',[
    {label:'Observed',data:D.sardine.values.map((v,i)=>({x:D.sardine.years[i],y:v})),
     borderColor:C.coral,backgroundColor:C.coral+'18',fill:true,tension:.3,pointRadius:3,borderWidth:2},
    {label:'Forecast',data:D.sardine.fc_vals.map((v,i)=>({x:D.sardine.fc_years[i],y:v})),
     borderColor:C.coral,borderDash:[5,4],backgroundColor:'transparent',pointRadius:1,borderWidth:1.5}
  ],'Larvae / 10m²','Year');

  line('chartRockfish',[
    {label:'Observed',data:D.rockfish.values.map((v,i)=>({x:D.rockfish.years[i],y:v})),
     borderColor:C.purple,backgroundColor:C.purple+'18',fill:true,tension:.3,pointRadius:3,borderWidth:2}
  ],'Larvae / 10m²','Year');

  line('chartSeabirdRich',[
    {label:'Species richness',data:D.seabird_richness.values.map((v,i)=>({x:D.seabird_richness.years[i],y:v})),
     borderColor:C.amber,backgroundColor:C.amber+'18',fill:true,tension:.3,pointRadius:3,borderWidth:2}
  ],'Species','Year');

  line('chartSeabirdInd',[
    {label:'Individuals',data:D.seabird_individuals.values.map((v,i)=>({x:D.seabird_individuals.years[i],y:v})),
     borderColor:C.amber,backgroundColor:C.amber+'18',fill:true,tension:.3,pointRadius:3,borderWidth:2}
  ],'Individuals','Year');

  const ctx2075=document.getElementById('chart2075');
  if(ctx2075) new Chart(ctx2075,{type:'line',data:{datasets:[
    {label:'Anchovy (obs)',data:D.anchovy.values.map((v,i)=>({x:D.anchovy.years[i],y:v})),borderColor:C.teal,pointRadius:2,borderWidth:2,tension:.3,backgroundColor:'transparent'},
    {label:'Anchovy (forecast)',data:D.anchovy.fc_vals.map((v,i)=>({x:D.anchovy.fc_years[i],y:v})),borderColor:C.teal,borderDash:[5,4],pointRadius:1,borderWidth:1.5,backgroundColor:'transparent'},
    {label:'Sardine (obs)',data:D.sardine.values.map((v,i)=>({x:D.sardine.years[i],y:v})),borderColor:C.coral,pointRadius:2,borderWidth:2,tension:.3,backgroundColor:'transparent'},
    {label:'Sardine (forecast)',data:D.sardine.fc_vals.map((v,i)=>({x:D.sardine.fc_years[i],y:v})),borderColor:C.coral,borderDash:[5,4],pointRadius:1,borderWidth:1.5,backgroundColor:'transparent'},
  ]},options:{...baseOpts('Larvae / 10m²','Year'),parsing:false,plugins:{legend:{display:true,labels:{color:C.text,font:{size:11},boxWidth:12}}}}});

  const ctxCorr=document.getElementById('chartCorr');
  if(ctxCorr) new Chart(ctxCorr,{type:'scatter',data:{datasets:[{
    label:'O₂ vs Sardine',
    data:D.corr_oxy_sardine.oxy.map((v,i)=>({x:v,y:D.corr_oxy_sardine.sardine[i]})),
    backgroundColor:C.teal+'88',pointRadius:5,pointHoverRadius:7
  }]},options:{...baseOpts('Sardine larvae (/10m²)','O₂ anomaly (ml/L)'),plugins:{legend:{display:false}}}});

  const ctxROC=document.getElementById('chartROC');
  if(ctxROC) new Chart(ctxROC,{type:'line',data:{datasets:[
    {label:'Anchovy (AUC=0.748)',data:D.roc.fpr.map((v,i)=>({x:v,y:D.roc.tpr[i]})),
     borderColor:C.teal,backgroundColor:C.teal+'22',fill:true,tension:.2,pointRadius:0,borderWidth:2},
    {label:'Random',data:[{x:0,y:0},{x:1,y:1}],borderColor:'rgba(255,255,255,0.2)',
     borderDash:[4,4],pointRadius:0,borderWidth:1,backgroundColor:'transparent'}
  ]},options:{...baseOpts('True positive rate','False positive rate'),parsing:false,
    plugins:{legend:{display:true,labels:{color:C.text,font:{size:11},boxWidth:12}}},
    scales:{
      x:{type:'linear',min:0,max:1,ticks:{color:C.text,font:{size:10}},grid:{color:C.grid}},
      y:{type:'linear',min:0,max:1,ticks:{color:C.text,font:{size:10}},grid:{color:C.grid}}
    }}});

  const ctxImp=document.getElementById('chartImp');
  if(ctxImp){
    const sorted=D.feature_importance.labels.map((l,i)=>({label:l,val:D.feature_importance.values[i]})).sort((a,b)=>b.val-a.val);
    new Chart(ctxImp,{type:'bar',data:{
      labels:sorted.map(d=>d.label),
      datasets:[{data:sorted.map(d=>d.val),
        backgroundColor:sorted.map(d=>d.label.includes('MEI')?C.amber+'cc':C.teal+'cc'),borderWidth:0}]
    },options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>`${ctx.parsed.x.toFixed(1)}%`}}},
      scales:{x:{ticks:{color:C.text,font:{size:10},callback:v=>v+'%'},grid:{color:C.grid}},
               y:{ticks:{color:C.text,font:{size:10}},grid:{display:false}}}}});
  }
}

document.addEventListener('DOMContentLoaded',initCharts);