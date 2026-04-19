const GAME_DATA=[{day:1,year:1990,quarter:1,quarter_name:"Winter",season_desc:"Cold upwelling season begins. Nutrients rising from depth.",temp_anom:-1.036,oxy_anom:0.056,mei:0.41,chlora_anom:0.963,shannon:0.739,richness:74,enso:"Weak El Niño",enso_detail:"Slightly warm conditions",collapse_prob:0.008,actual_collapse:0,actual_larvae:2081.0,threshold:64.5,zones:[{name:"Santa Barbara Channel",stress:0.012,oxy_anom:0.061,temp_anom:-0.98},{name:"San Pedro Basin",stress:0.008,oxy_anom:0.048,temp_anom:-1.1},{name:"San Diego Trough",stress:0.015,oxy_anom:0.072,temp_anom:-0.89},{name:"Outer Banks",stress:0.004,oxy_anom:0.041,temp_anom:-1.21}],fleet_size:142,econ_baseline_M:2.8},{day:2,year:1990,quarter:2,quarter_name:"Spring",season_desc:"Peak upwelling. Highest productivity of the year.",temp_anom:0.153,oxy_anom:0.183,mei:0.06,chlora_anom:-0.729,shannon:0.847,richness:72,enso:"Weak El Niño",enso_detail:"Slightly warm conditions",collapse_prob:0.006,actual_collapse:0,actual_larvae:491.4,threshold:187.9,zones:[{name:"Santa Barbara Channel",stress:0.01,oxy_anom:0.19,temp_anom:0.12},{name:"San Pedro Basin",stress:0.005,oxy_anom:0.21,temp_anom:0.08},{name:"San Diego Trough",stress:0.008,oxy_anom:0.17,temp_anom:0.19},{name:"Outer Banks",stress:0.003,oxy_anom:0.22,temp_anom:0.05}],fleet_size:158,econ_baseline_M:3.1},{day:3,year:1990,quarter:3,quarter_name:"Summer",season_desc:"Warm surface waters. Larvae abundance peaks.",temp_anom:0.609,oxy_anom:0.107,mei:0.125,chlora_anom:0.112,shannon:1.677,richness:68,enso:"Weak El Niño",enso_detail:"Slightly warm conditions",collapse_prob:0.002,actual_collapse:0,actual_larvae:45.3,threshold:45.3,zones:[{name:"Santa Barbara Channel",stress:0.03,oxy_anom:0.09,temp_anom:0.58},{name:"San Pedro Basin",stress:0.01,oxy_anom:0.12,temp_anom:0.55},{name:"San Diego Trough",stress:0.02,oxy_anom:0.08,temp_anom:0.72},{name:"Outer Banks",stress:0.005,oxy_anom:0.15,temp_anom:0.48}],fleet_size:171,econ_baseline_M:2.9},{day:4,year:1990,quarter:4,quarter_name:"Fall",season_desc:"Conditions stabilize. El Niño effects most visible.",temp_anom:0.279,oxy_anom:0.141,mei:0.123,chlora_anom:0.014,shannon:2.585,richness:68,enso:"Weak El Niño",enso_detail:"Slightly warm conditions",collapse_prob:0.038,actual_collapse:0,actual_larvae:80.7,threshold:55.5,zones:[{name:"Santa Barbara Channel",stress:0.04,oxy_anom:0.13,temp_anom:0.31},{name:"San Pedro Basin",stress:0.03,oxy_anom:0.15,temp_anom:0.24},{name:"San Diego Trough",stress:0.05,oxy_anom:0.11,temp_anom:0.38},{name:"Outer Banks",stress:0.02,oxy_anom:0.18,temp_anom:0.21}],fleet_size:139,econ_baseline_M:2.6},{day:5,year:1991,quarter:1,quarter_name:"Winter",season_desc:"Cold upwelling season begins. Nutrients rising from depth.",temp_anom:0.136,oxy_anom:0.057,mei:0.167,chlora_anom:0.036,shannon:1.464,richness:91,enso:"Weak El Niño",enso_detail:"Slightly warm conditions",collapse_prob:0.003,actual_collapse:0,actual_larvae:1306.0,threshold:64.5,zones:[{name:"Santa Barbara Channel",stress:0.005,oxy_anom:0.06,temp_anom:0.15},{name:"San Pedro Basin",stress:0.002,oxy_anom:0.08,temp_anom:0.09},{name:"San Diego Trough",stress:0.004,oxy_anom:0.05,temp_anom:0.21},{name:"Outer Banks",stress:0.001,oxy_anom:0.09,temp_anom:0.07}],fleet_size:163,econ_baseline_M:3.2},{day:6,year:1991,quarter:2,quarter_name:"Spring",season_desc:"Peak upwelling. Highest productivity of the year.",temp_anom:0.065,oxy_anom:0.175,mei:0.36,chlora_anom:-0.523,shannon:1.384,richness:80,enso:"Weak El Niño",enso_detail:"Slightly warm conditions",collapse_prob:0.005,actual_collapse:0,actual_larvae:638.0,threshold:187.9,zones:[{name:"Santa Barbara Channel",stress:0.008,oxy_anom:0.18,temp_anom:0.04},{name:"San Pedro Basin",stress:0.004,oxy_anom:0.19,temp_anom:0.09},{name:"San Diego Trough",stress:0.006,oxy_anom:0.16,temp_anom:0.12},{name:"Outer Banks",stress:0.002,oxy_anom:0.21,temp_anom:0.01}],fleet_size:177,econ_baseline_M:3.4},{day:7,year:1991,quarter:3,quarter_name:"Summer",season_desc:"Warm surface waters. Larvae abundance peaks.",temp_anom:0.498,oxy_anom:0.122,mei:0.67,chlora_anom:0.089,shannon:1.821,richness:75,enso:"Weak El Niño",enso_detail:"Slightly warm conditions",collapse_prob:0.012,actual_collapse:0,actual_larvae:88.2,threshold:45.3,zones:[{name:"Santa Barbara Channel",stress:0.015,oxy_anom:0.11,temp_anom:0.52},{name:"San Pedro Basin",stress:0.009,oxy_anom:0.14,temp_anom:0.44},{name:"San Diego Trough",stress:0.018,oxy_anom:0.09,temp_anom:0.61},{name:"Outer Banks",stress:0.005,oxy_anom:0.17,temp_anom:0.38}],fleet_size:168,econ_baseline_M:2.7},{day:8,year:1991,quarter:4,quarter_name:"Fall",season_desc:"Conditions stabilize. El Niño effects most visible.",temp_anom:-0.237,oxy_anom:0.107,mei:0.973,chlora_anom:-0.198,shannon:2.241,richness:65,enso:"Moderate El Niño",enso_detail:"Warmer than average, reduced productivity",collapse_prob:0.048,actual_collapse:0,actual_larvae:112.5,threshold:55.5,zones:[{name:"Santa Barbara Channel",stress:0.055,oxy_anom:0.09,temp_anom:-0.18},{name:"San Pedro Basin",stress:0.042,oxy_anom:0.12,temp_anom:-0.29},{name:"San Diego Trough",stress:0.061,oxy_anom:0.08,temp_anom:-0.14},{name:"Outer Banks",stress:0.031,oxy_anom:0.15,temp_anom:-0.33}],fleet_size:144,econ_baseline_M:2.4},{day:9,year:1992,quarter:1,quarter_name:"Winter",season_desc:"Cold upwelling season begins. Nutrients rising from depth.",temp_anom:0.643,oxy_anom:0.054,mei:1.59,chlora_anom:0.441,shannon:0.975,richness:58,enso:"Strong El Niño",enso_detail:"Warm water, weak upwelling, high collapse risk",collapse_prob:0.721,actual_collapse:1,actual_larvae:28.3,threshold:64.5,zones:[{name:"Santa Barbara Channel",stress:0.74,oxy_anom:0.04,temp_anom:0.71},{name:"San Pedro Basin",stress:0.69,oxy_anom:0.07,temp_anom:0.58},{name:"San Diego Trough",stress:0.78,oxy_anom:0.03,temp_anom:0.82},{name:"Outer Banks",stress:0.65,oxy_anom:0.09,temp_anom:0.51}],fleet_size:128,econ_baseline_M:1.8},{day:10,year:1992,quarter:2,quarter_name:"Spring",season_desc:"Peak upwelling. Highest productivity of the year.",temp_anom:0.612,oxy_anom:0.102,mei:1.515,chlora_anom:-0.891,shannon:1.103,richness:62,enso:"Strong El Niño",enso_detail:"Warm water, weak upwelling, high collapse risk",collapse_prob:0.698,actual_collapse:0,actual_larvae:242.8,threshold:187.9,zones:[{name:"Santa Barbara Channel",stress:0.71,oxy_anom:0.08,temp_anom:0.64},{name:"San Pedro Basin",stress:0.67,oxy_anom:0.11,temp_anom:0.55},{name:"San Diego Trough",stress:0.75,oxy_anom:0.07,temp_anom:0.71},{name:"Outer Banks",stress:0.62,oxy_anom:0.14,temp_anom:0.48}],fleet_size:141,econ_baseline_M:1.9},{day:11,year:1992,quarter:4,quarter_name:"Fall",season_desc:"Conditions stabilize. El Niño effects most visible.",temp_anom:0.017,oxy_anom:0.035,mei:0.673,chlora_anom:-0.056,shannon:2.088,richness:40,enso:"Moderate El Niño",enso_detail:"Warmer than average, reduced productivity",collapse_prob:0.914,actual_collapse:1,actual_larvae:45.1,threshold:55.5,zones:[{name:"Santa Barbara Channel",stress:0.92,oxy_anom:0.02,temp_anom:0.08},{name:"San Pedro Basin",stress:0.89,oxy_anom:0.04,temp_anom:-0.04},{name:"San Diego Trough",stress:0.94,oxy_anom:0.01,temp_anom:0.12},{name:"Outer Banks",stress:0.87,oxy_anom:0.06,temp_anom:-0.08}],fleet_size:115,econ_baseline_M:1.4},{day:12,year:1993,quarter:1,quarter_name:"Winter",season_desc:"Cold upwelling season begins. Nutrients rising from depth.",temp_anom:0.238,oxy_anom:0.092,mei:0.787,chlora_anom:0.328,shannon:1.241,richness:55,enso:"Moderate El Niño",enso_detail:"Warmer than average, reduced productivity",collapse_prob:0.523,actual_collapse:0,actual_larvae:178.4,threshold:64.5,zones:[{name:"Santa Barbara Channel",stress:0.54,oxy_anom:0.08,temp_anom:0.27},{name:"San Pedro Basin",stress:0.49,oxy_anom:0.11,temp_anom:0.19},{name:"San Diego Trough",stress:0.58,oxy_anom:0.07,temp_anom:0.34},{name:"Outer Banks",stress:0.44,oxy_anom:0.14,temp_anom:0.15}],fleet_size:132,econ_baseline_M:2.1},{day:13,year:1993,quarter:2,quarter_name:"Spring",season_desc:"Peak upwelling. Highest productivity of the year.",temp_anom:0.134,oxy_anom:0.043,mei:0.9,chlora_anom:-0.412,shannon:1.552,richness:68,enso:"Moderate El Niño",enso_detail:"Warmer than average, reduced productivity",collapse_prob:0.087,actual_collapse:0,actual_larvae:412.7,threshold:187.9,zones:[{name:"Santa Barbara Channel",stress:0.09,oxy_anom:0.05,temp_anom:0.16},{name:"San Pedro Basin",stress:0.07,oxy_anom:0.07,temp_anom:0.09},{name:"San Diego Trough",stress:0.11,oxy_anom:0.04,temp_anom:0.21},{name:"Outer Banks",stress:0.06,oxy_anom:0.09,temp_anom:0.07}],fleet_size:165,econ_baseline_M:2.9},{day:14,year:1993,quarter:3,quarter_name:"Summer",season_desc:"Warm surface waters. Larvae abundance peaks.",temp_anom:0.192,oxy_anom:0.025,mei:0.607,chlora_anom:0.187,shannon:1.934,richness:71,enso:"Weak El Niño",enso_detail:"Slightly warm conditions",collapse_prob:0.043,actual_collapse:0,actual_larvae:55.8,threshold:45.3,zones:[{name:"Santa Barbara Channel",stress:0.05,oxy_anom:0.03,temp_anom:0.22},{name:"San Pedro Basin",stress:0.03,oxy_anom:0.05,temp_anom:0.14},{name:"San Diego Trough",stress:0.06,oxy_anom:0.02,temp_anom:0.28},{name:"Outer Banks",stress:0.02,oxy_anom:0.07,temp_anom:0.11}],fleet_size:172,econ_baseline_M:2.8},{day:15,year:1993,quarter:4,quarter_name:"Fall",season_desc:"Conditions stabilize. El Niño effects most visible.",temp_anom:0.088,oxy_anom:0.004,mei:0.27,chlora_anom:0.095,shannon:2.312,richness:62,enso:"Neutral",enso_detail:"Normal Pacific conditions",collapse_prob:0.062,actual_collapse:0,actual_larvae:68.4,threshold:55.5,zones:[{name:"Santa Barbara Channel",stress:0.07,oxy_anom:0.01,temp_anom:0.11},{name:"San Pedro Basin",stress:0.05,oxy_anom:0.02,temp_anom:0.04},{name:"San Diego Trough",stress:0.08,oxy_anom:0.009,temp_anom:0.14},{name:"Outer Banks",stress:0.04,oxy_anom:0.03,temp_anom:0.02}],fleet_size:148,econ_baseline_M:2.5},{day:16,year:1994,quarter:1,quarter_name:"Winter",season_desc:"Cold upwelling season begins. Nutrients rising from depth.",temp_anom:0.195,oxy_anom:0.124,mei:-0.01,chlora_anom:0.256,shannon:1.338,richness:61,enso:"Neutral",enso_detail:"Normal Pacific conditions",collapse_prob:0.019,actual_collapse:0,actual_larvae:398.5,threshold:64.5,zones:[{name:"Santa Barbara Channel",stress:0.02,oxy_anom:0.13,temp_anom:0.21},{name:"San Pedro Basin",stress:0.015,oxy_anom:0.15,temp_anom:0.14},{name:"San Diego Trough",stress:0.025,oxy_anom:0.11,temp_anom:0.27},{name:"Outer Banks",stress:0.01,oxy_anom:0.18,temp_anom:0.11}],fleet_size:159,econ_baseline_M:3.0},{day:17,year:1994,quarter:2,quarter_name:"Spring",season_desc:"Peak upwelling. Highest productivity of the year.",temp_anom:0.18,oxy_anom:0.079,mei:0.02,chlora_anom:-0.334,shannon:1.621,richness:70,enso:"Neutral",enso_detail:"Normal Pacific conditions",collapse_prob:0.015,actual_collapse:0,actual_larvae:538.2,threshold:187.9,zones:[{name:"Santa Barbara Channel",stress:0.018,oxy_anom:0.09,temp_anom:0.19},{name:"San Pedro Basin",stress:0.012,oxy_anom:0.11,temp_anom:0.12},{name:"San Diego Trough",stress:0.021,oxy_anom:0.08,temp_anom:0.24},{name:"Outer Banks",stress:0.008,oxy_anom:0.14,temp_anom:0.09}],fleet_size:181,econ_baseline_M:3.5},{day:18,year:1994,quarter:3,quarter_name:"Summer",season_desc:"Warm surface waters. Larvae abundance peaks.",temp_anom:0.352,oxy_anom:0.041,mei:0.96,chlora_anom:0.234,shannon:1.789,richness:66,enso:"Moderate El Niño",enso_detail:"Warmer than average, reduced productivity",collapse_prob:0.067,actual_collapse:0,actual_larvae:72.1,threshold:45.3,zones:[{name:"Santa Barbara Channel",stress:0.07,oxy_anom:0.05,temp_anom:0.38},{name:"San Pedro Basin",stress:0.055,oxy_anom:0.07,temp_anom:0.29},{name:"San Diego Trough",stress:0.082,oxy_anom:0.04,temp_anom:0.45},{name:"Outer Banks",stress:0.041,oxy_anom:0.09,temp_anom:0.24}],fleet_size:169,econ_baseline_M:2.8},{day:19,year:1994,quarter:4,quarter_name:"Fall",season_desc:"Conditions stabilize. El Niño effects most visible.",temp_anom:0.311,oxy_anom:0.009,mei:1.52,chlora_anom:-0.123,shannon:2.156,richness:58,enso:"Strong El Niño",enso_detail:"Warm water, weak upwelling, high collapse risk",collapse_prob:0.312,actual_collapse:0,actual_larvae:229.4,threshold:55.5,zones:[{name:"Santa Barbara Channel",stress:0.33,oxy_anom:0.02,temp_anom:0.35},{name:"San Pedro Basin",stress:0.28,oxy_anom:0.03,temp_anom:0.27},{name:"San Diego Trough",stress:0.37,oxy_anom:0.01,temp_anom:0.42},{name:"Outer Banks",stress:0.24,oxy_anom:0.05,temp_anom:0.22}],fleet_size:138,econ_baseline_M:2.2},{day:20,year:1995,quarter:1,quarter_name:"Winter",season_desc:"Cold upwelling season begins. Nutrients rising from depth.",temp_anom:-0.378,oxy_anom:0.082,mei:0.83,chlora_anom:0.412,shannon:1.184,richness:68,enso:"Moderate El Niño",enso_detail:"Warmer than average, reduced productivity",collapse_prob:0.024,actual_collapse:0,actual_larvae:1042.3,threshold:64.5,zones:[{name:"Santa Barbara Channel",stress:0.028,oxy_anom:0.09,temp_anom:-0.34},{name:"San Pedro Basin",stress:0.019,oxy_anom:0.11,temp_anom:-0.42},{name:"San Diego Trough",stress:0.033,oxy_anom:0.07,temp_anom:-0.28},{name:"Outer Banks",stress:0.014,oxy_anom:0.14,temp_anom:-0.47}],fleet_size:156,econ_baseline_M:3.0},{day:21,year:1995,quarter:2,quarter_name:"Spring",season_desc:"Peak upwelling. Highest productivity of the year.",temp_anom:-0.412,oxy_anom:0.041,mei:0.14,chlora_anom:-0.187,shannon:1.843,richness:78,enso:"Neutral",enso_detail:"Normal Pacific conditions",collapse_prob:0.008,actual_collapse:0,actual_larvae:724.8,threshold:187.9,zones:[{name:"Santa Barbara Channel",stress:0.01,oxy_anom:0.05,temp_anom:-0.38},{name:"San Pedro Basin",stress:0.006,oxy_anom:0.07,temp_anom:-0.45},{name:"San Diego Trough",stress:0.012,oxy_anom:0.04,temp_anom:-0.32},{name:"Outer Banks",stress:0.004,oxy_anom:0.09,temp_anom:-0.49}],fleet_size:183,econ_baseline_M:3.6},{day:22,year:1995,quarter:3,quarter_name:"Summer",season_desc:"Warm surface waters. Larvae abundance peaks.",temp_anom:-0.267,oxy_anom:-0.012,mei:-0.85,chlora_anom:0.098,shannon:2.012,richness:73,enso:"La Niña",enso_detail:"Cool water, strong upwelling, low collapse risk",collapse_prob:0.031,actual_collapse:0,actual_larvae:52.4,threshold:45.3,zones:[{name:"Santa Barbara Channel",stress:0.035,oxy_anom:-0.008,temp_anom:-0.24},{name:"San Pedro Basin",stress:0.025,oxy_anom:-0.004,temp_anom:-0.31},{name:"San Diego Trough",stress:0.041,oxy_anom:-0.011,temp_anom:-0.18},{name:"Outer Banks",stress:0.018,oxy_anom:0.002,temp_anom:-0.36}],fleet_size:174,econ_baseline_M:2.9},{day:23,year:1995,quarter:4,quarter_name:"Fall",season_desc:"Conditions stabilize. El Niño effects most visible.",temp_anom:-0.198,oxy_anom:-0.032,mei:-1.23,chlora_anom:-0.076,shannon:2.445,richness:60,enso:"La Niña",enso_detail:"Cool water, strong upwelling, low collapse risk",collapse_prob:0.042,actual_collapse:1,actual_larvae:42.1,threshold:55.5,zones:[{name:"Santa Barbara Channel",stress:0.048,oxy_anom:-0.028,temp_anom:-0.17},{name:"San Pedro Basin",stress:0.037,oxy_anom:-0.024,temp_anom:-0.24},{name:"San Diego Trough",stress:0.054,oxy_anom:-0.031,temp_anom:-0.12},{name:"Outer Banks",stress:0.028,oxy_anom:-0.018,temp_anom:-0.28}],fleet_size:146,econ_baseline_M:2.4},{day:24,year:1997,quarter:2,quarter_name:"Spring",season_desc:"Peak upwelling. Highest productivity of the year.",temp_anom:0.287,oxy_anom:0.021,mei:1.525,chlora_anom:-0.654,shannon:1.487,richness:59,enso:"Strong El Niño",enso_detail:"Warm water, weak upwelling, high collapse risk",collapse_prob:0.745,actual_collapse:1,actual_larvae:98.4,threshold:187.9,zones:[{name:"Santa Barbara Channel",stress:0.76,oxy_anom:0.03,temp_anom:0.31},{name:"San Pedro Basin",stress:0.72,oxy_anom:0.05,temp_anom:0.24},{name:"San Diego Trough",stress:0.79,oxy_anom:0.02,temp_anom:0.38},{name:"Outer Banks",stress:0.68,oxy_anom:0.08,temp_anom:0.21}],fleet_size:122,econ_baseline_M:1.7},{day:25,year:1997,quarter:3,quarter_name:"Summer",season_desc:"Warm surface waters. Larvae abundance peaks.",temp_anom:0.891,oxy_anom:0.012,mei:2.235,chlora_anom:-0.432,shannon:1.623,richness:52,enso:"Strong El Niño",enso_detail:"Warm water, weak upwelling, high collapse risk",collapse_prob:0.834,actual_collapse:1,actual_larvae:32.1,threshold:45.3,zones:[{name:"Santa Barbara Channel",stress:0.85,oxy_anom:0.008,temp_anom:0.94},{name:"San Pedro Basin",stress:0.81,oxy_anom:0.018,temp_anom:0.82},{name:"San Diego Trough",stress:0.88,oxy_anom:0.005,temp_anom:1.01},{name:"Outer Banks",stress:0.77,oxy_anom:0.028,temp_anom:0.74}],fleet_size:108,econ_baseline_M:1.4},{day:26,year:1997,quarter:4,quarter_name:"Fall",season_desc:"Conditions stabilize. El Niño effects most visible.",temp_anom:0.934,oxy_anom:-0.034,mei:2.103,chlora_anom:-0.567,shannon:1.891,richness:48,enso:"Strong El Niño",enso_detail:"Warm water, weak upwelling, high collapse risk",collapse_prob:0.921,actual_collapse:1,actual_larvae:28.7,threshold:55.5,zones:[{name:"Santa Barbara Channel",stress:0.93,oxy_anom:-0.028,temp_anom:0.98},{name:"San Pedro Basin",stress:0.90,oxy_anom:-0.022,temp_anom:0.89},{name:"San Diego Trough",stress:0.95,oxy_anom:-0.034,temp_anom:1.04},{name:"Outer Banks",stress:0.88,oxy_anom:-0.014,temp_anom:0.82}],fleet_size:98,econ_baseline_M:1.2},{day:27,year:1998,quarter:1,quarter_name:"Winter",season_desc:"Cold upwelling season begins. Nutrients rising from depth.",temp_anom:1.123,oxy_anom:-0.089,mei:2.447,chlora_anom:-0.712,shannon:0.834,richness:41,enso:"Strong El Niño",enso_detail:"Warm water, weak upwelling, high collapse risk",collapse_prob:0.967,actual_collapse:1,actual_larvae:18.2,threshold:64.5,zones:[{name:"Santa Barbara Channel",stress:0.97,oxy_anom:-0.078,temp_anom:1.18},{name:"San Pedro Basin",stress:0.95,oxy_anom:-0.071,temp_anom:1.08},{name:"San Diego Trough",stress:0.98,oxy_anom:-0.088,temp_anom:1.24},{name:"Outer Banks",stress:0.94,oxy_anom:-0.058,temp_anom:0.99}],fleet_size:91,econ_baseline_M:1.0},{day:28,year:1998,quarter:2,quarter_name:"Spring",season_desc:"Peak upwelling. Highest productivity of the year.",temp_anom:0.789,oxy_anom:-0.056,mei:1.365,chlora_anom:-0.489,shannon:1.234,richness:55,enso:"Strong El Niño",enso_detail:"Warm water, weak upwelling, high collapse risk",collapse_prob:0.612,actual_collapse:0,actual_larvae:201.3,threshold:187.9,zones:[{name:"Santa Barbara Channel",stress:0.63,oxy_anom:-0.048,temp_anom:0.82},{name:"San Pedro Basin",stress:0.59,oxy_anom:-0.041,temp_anom:0.73},{name:"San Diego Trough",stress:0.67,oxy_anom:-0.055,temp_anom:0.89},{name:"Outer Banks",stress:0.55,oxy_anom:-0.031,temp_anom:0.65}],fleet_size:129,econ_baseline_M:1.8},{day:29,year:2011,quarter:2,quarter_name:"Spring",season_desc:"Peak upwelling. Highest productivity of the year.",temp_anom:-0.934,oxy_anom:0.145,mei:-1.69,chlora_anom:0.523,shannon:2.134,richness:82,enso:"La Niña",enso_detail:"Cool water, strong upwelling, low collapse risk",collapse_prob:0.865,actual_collapse:1,actual_larvae:22.4,threshold:187.9,zones:[{name:"Santa Barbara Channel",stress:0.87,oxy_anom:0.13,temp_anom:-0.98},{name:"San Pedro Basin",stress:0.84,oxy_anom:0.15,temp_anom:-1.04},{name:"San Diego Trough",stress:0.89,oxy_anom:0.12,temp_anom:-0.89},{name:"Outer Banks",stress:0.82,oxy_anom:0.18,temp_anom:-1.12}],fleet_size:103,econ_baseline_M:1.3},{day:30,year:2013,quarter:2,quarter_name:"Spring",season_desc:"Peak upwelling. Highest productivity of the year.",temp_anom:-0.812,oxy_anom:-0.043,mei:-1.14,chlora_anom:0.234,shannon:1.987,richness:71,enso:"La Niña",enso_detail:"Cool water, strong upwelling, low collapse risk",collapse_prob:0.946,actual_collapse:1,actual_larvae:45.2,threshold:187.9,zones:[{name:"Santa Barbara Channel",stress:0.95,oxy_anom:-0.038,temp_anom:-0.86},{name:"San Pedro Basin",stress:0.93,oxy_anom:-0.033,temp_anom:-0.92},{name:"San Diego Trough",stress:0.96,oxy_anom:-0.041,temp_anom:-0.78},{name:"Outer Banks",stress:0.91,oxy_anom:-0.028,temp_anom:-0.98}],fleet_size:96,econ_baseline_M:1.1},{day:31,year:2015,quarter:2,quarter_name:"Spring",season_desc:"Peak upwelling. Highest productivity of the year.",temp_anom:1.432,oxy_anom:-0.035,mei:1.425,chlora_anom:-0.678,shannon:1.456,richness:54,enso:"Strong El Niño",enso_detail:"Warm water, weak upwelling, high collapse risk",collapse_prob:0.043,actual_collapse:1,actual_larvae:125.4,threshold:187.9,zones:[{name:"Santa Barbara Channel",stress:0.05,oxy_anom:-0.028,temp_anom:1.51},{name:"San Pedro Basin",stress:0.038,oxy_anom:-0.022,temp_anom:1.38},{name:"San Diego Trough",stress:0.058,oxy_anom:-0.034,temp_anom:1.59},{name:"Outer Banks",stress:0.029,oxy_anom:-0.015,temp_anom:1.28}],fleet_size:152,econ_baseline_M:2.3},{day:32,year:2015,quarter:3,quarter_name:"Summer",season_desc:"Warm surface waters. Larvae abundance peaks.",temp_anom:1.743,oxy_anom:-0.034,mei:2.095,chlora_anom:-0.834,shannon:1.321,richness:48,enso:"Strong El Niño",enso_detail:"Warm water, weak upwelling, high collapse risk",collapse_prob:0.812,actual_collapse:1,actual_larvae:38.9,threshold:45.3,zones:[{name:"Santa Barbara Channel",stress:0.82,oxy_anom:-0.028,temp_anom:1.81},{name:"San Pedro Basin",stress:0.79,oxy_anom:-0.022,temp_anom:1.69},{name:"San Diego Trough",stress:0.85,oxy_anom:-0.034,temp_anom:1.88},{name:"Outer Banks",stress:0.76,oxy_anom:-0.015,temp_anom:1.61}],fleet_size:104,econ_baseline_M:1.3},{day:33,year:2016,quarter:1,quarter_name:"Winter",season_desc:"Cold upwelling season begins. Nutrients rising from depth.",temp_anom:0.987,oxy_anom:-0.045,mei:1.48,chlora_anom:-0.521,shannon:1.123,richness:51,enso:"Strong El Niño",enso_detail:"Warm water, weak upwelling, high collapse risk",collapse_prob:0.734,actual_collapse:0,actual_larvae:124.8,threshold:64.5,zones:[{name:"Santa Barbara Channel",stress:0.75,oxy_anom:-0.038,temp_anom:1.04},{name:"San Pedro Basin",stress:0.71,oxy_anom:-0.031,temp_anom:0.94},{name:"San Diego Trough",stress:0.78,oxy_anom:-0.045,temp_anom:1.11},{name:"Outer Banks",stress:0.68,oxy_anom:-0.022,temp_anom:0.87}],fleet_size:119,econ_baseline_M:1.6},{day:34,year:2020,quarter:1,quarter_name:"Winter",season_desc:"Cold upwelling season begins. Nutrients rising from depth.",temp_anom:0.412,oxy_anom:-0.374,mei:0.24,chlora_anom:-0.234,shannon:1.234,richness:58,enso:"Neutral",enso_detail:"Normal Pacific conditions",collapse_prob:0.075,actual_collapse:1,actual_larvae:21.8,threshold:64.5,zones:[{name:"Santa Barbara Channel",stress:0.08,oxy_anom:-0.361,temp_anom:0.44},{name:"San Pedro Basin",stress:0.065,oxy_anom:-0.348,temp_anom:0.37},{name:"San Diego Trough",stress:0.092,oxy_anom:-0.372,temp_anom:0.51},{name:"Outer Banks",stress:0.051,oxy_anom:-0.335,temp_anom:0.31}],fleet_size:135,econ_baseline_M:2.0}];
// ── CONSTANTS ─────────────────────────────────────────────────────────────────
const LAUNCH = new Date('2026-04-18');

// ── STATE ─────────────────────────────────────────────────────────────────────
function getDayNum() {
  const t = new Date(); t.setHours(0,0,0,0);
  const d = Math.floor((t - LAUNCH) / 86400000);
  return ((d % GAME_DATA.length) + GAME_DATA.length) % GAME_DATA.length;
}
function getPuzzle() { return GAME_DATA[getDayNum()]; }
function getState() { try { return JSON.parse(localStorage.getItem('pp_stq') || '{}'); } catch { return {}; } }
function saveState(s) { try { localStorage.setItem('pp_stq', JSON.stringify(s)); } catch {} }
function initState() {
  const s = getState();
  if (!s.streak) s.streak = 0; if (!s.best) s.best = 0;
  if (!s.played) s.played = 0; if (!s.won) s.won = 0;
  if (!s.lastPlayed) s.lastPlayed = null;
  if (!s.lastResult) s.lastResult = null;
  if (!s.history) s.history = [];
  return s;
}
function playedToday(s) { return s.lastPlayed === new Date().toISOString().slice(0, 10); }

// ── SCORING ENGINE ────────────────────────────────────────────────────────────
function calcScores(pz, d) {
  const cp = pz.collapse_prob;

  // Population Health
  const quotaStress = (d.quota / 100) * (0.5 + cp * 1.5);
  const zonesBenefit = (d.zones_closed / 4) * (0.1 + cp * 0.3);
  const recallBenefit = (d.recall / 100) * 0.15;
  const monitorBenefit = (d.monitoring / 100) * 0.08;
  const commsPop = d.comms === 'emergency' && cp < 0.3 ? -0.05 : d.comms === 'emergency' && cp > 0.75 ? 0.05 : 0;
  let pop = Math.max(0, Math.min(100,
    100 - quotaStress * 60 + zonesBenefit * 100 + recallBenefit * 100 + monitorBenefit * 100 + commsPop * 100 - cp * 30
  ));
  if (cp > 0.6 && d.quota < 30 && d.zones_closed >= 2) pop = Math.min(100, pop + 10);
  if (cp < 0.2 && d.quota > 50) pop = Math.min(100, pop + 5);

  // Economic Viability
  const overConservative = cp < 0.2 && d.quota < 20 && d.zones_closed >= 3 ? 15 : 0;
  let econ = Math.max(0, Math.min(100,
    50
    + (d.quota / 100) * 40
    - (d.recall / 100) * 20
    - (d.monitoring / 100) * 10
    - (d.zones_closed / 4) * 15
    - (d.comms === 'emergency' ? 8 : d.comms === 'advisory' ? 3 : 0)
    - overConservative
  ));

  // Public Trust
  const wolfPenalty = d.comms === 'emergency' && cp < 0.3 ? 25 : 0;
  const silencePenalty = d.comms === 'nothing' && cp > 0.7 ? 20 : 0;
  const advisoryBonus = d.comms === 'advisory' && cp > 0.4 && cp < 0.75 ? 10 : 0;
  const emergencyBonus = d.comms === 'emergency' && cp > 0.75 ? 12 : 0;
  let trust = Math.max(0, Math.min(100, 65 - wolfPenalty - silencePenalty + advisoryBonus + emergencyBonus));

  // Budget
  const spent = (d.recall / 100) * 20 + (d.monitoring / 100) * 10 + (d.zones_closed / 4) * 15 + (d.comms === 'emergency' ? 8 : d.comms === 'advisory' ? 3 : 0);
  let budget = Math.max(0, Math.min(100, 100 - spent * 2));

  // Survival
  const survival = Math.round(pop * 0.45 + econ * 0.2 + trust * 0.2 + budget * 0.15);

  // Archetype
  let archetype = '🏆 Optimal Manager';
  if (d.quota < 15 && d.zones_closed >= 3 && d.recall > 60) archetype = '🌿 Over-Conservationist';
  else if (d.quota > 75 && d.zones_closed <= 1 && d.recall < 20) archetype = '💰 Over-Exploiter';
  else if (d.comms === 'emergency' && cp < 0.3) archetype = '😱 Alarmist';
  else if (d.monitoring < 20 && d.zones_closed === 0 && d.comms === 'nothing') archetype = '😴 Negligent';

  return { pop: Math.round(pop), econ: Math.round(econ), trust: Math.round(trust), budget: Math.round(budget), survival, archetype };
}

// ── HELPERS ───────────────────────────────────────────────────────────────────
function ensoStyle(e) {
  if (e.includes('Strong El')) return 'background:rgba(255,80,80,.15);color:#ff6b6b;border:1px solid rgba(255,80,80,.3)';
  if (e.includes('El Ni')) return 'background:rgba(255,150,0,.12);color:#ffaa44;border:1px solid rgba(255,150,0,.25)';
  if (e.includes('Strong La')) return 'background:rgba(0,180,255,.12);color:#44aaff;border:1px solid rgba(0,180,255,.25)';
  if (e.includes('La Ni')) return 'background:rgba(0,150,220,.1);color:#66bbff;border:1px solid rgba(0,150,220,.2)';
  return 'background:rgba(100,180,180,.1);color:#88cccc;border:1px solid rgba(100,180,180,.2)';
}
function an(v, inv = false) {
  const p = inv ? '#44cc88' : '#ff6b6b', n = inv ? '#ff8844' : '#44aaff';
  if (v > 0) return `<span style="color:${p}">+${v.toFixed(3)}</span>`;
  if (v < 0) return `<span style="color:${n}">${v.toFixed(3)}</span>`;
  return `<span style="color:var(--text2)">0.000</span>`;
}
function scoreColor(v) {
  if (v >= 70) return '#44ee88';
  if (v >= 50) return '#ffcc00';
  if (v >= 30) return '#ff8800';
  return '#ff5555';
}
function scoreBar(v, color) {
  return `<div style="background:rgba(255,255,255,0.05);border-radius:4px;height:8px;width:100%;margin-top:4px;overflow:hidden;">
    <div style="background:${color};border-radius:4px;height:8px;width:${v}%;transition:width 0.4s ease;"></div>
  </div>`;
}

// ── MINI CHART REGISTRY ───────────────────────────────────────────────────────
const MC = {};
function mkMini(id, type, data, opts) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  if (MC[id]) MC[id].destroy();
  MC[id] = new Chart(ctx, { type, data, options: { responsive: true, maintainAspectRatio: false, ...opts } });
}

const RADAR_OPTS = {
  plugins: { legend: { display: false } },
  scales: {
    r: {
      min: 0, max: 100, ticks: { display: false },
      grid: { color: 'rgba(255,255,255,0.08)' },
      pointLabels: { color: 'rgba(200,220,232,0.7)', font: { size: 11 } },
      angleLines: { color: 'rgba(255,255,255,0.06)' }
    }
  }
};

const MINI_SCALE = {
  x: { ticks: { color: 'rgba(200,220,232,0.45)', font: { size: 8 } }, grid: { display: false } },
  y: { min: 0, max: 100, ticks: { color: 'rgba(200,220,232,0.45)', font: { size: 8 }, callback: v => v + '%' }, grid: { color: 'rgba(255,255,255,0.04)' } }
};

function drawRadar(id, scores) {
  mkMini(id, 'radar', {
    labels: ['Population', 'Economy', 'Trust', 'Budget'],
    datasets: [{ data: [scores.pop, scores.econ, scores.trust, scores.budget], backgroundColor: 'rgba(0,180,216,0.15)', borderColor: '#00b4d8', borderWidth: 2, pointBackgroundColor: '#00b4d8', pointRadius: 4 }]
  }, RADAR_OPTS);
}

function drawZoneBar(id, pz, closedList) {
  const colors = pz.zones.map((z, i) =>
    closedList.includes(i) ? 'rgba(0,180,216,0.75)'
    : z.stress > 0.6 ? '#E24B4Acc' : z.stress > 0.3 ? '#BA7517cc' : '#1D9E75cc'
  );
  mkMini(id, 'bar', {
    labels: pz.zones.map(z => z.name.split(' ')[0]),
    datasets: [{ data: pz.zones.map(z => Math.round(z.stress * 100)), backgroundColor: colors, borderWidth: 0, borderRadius: 4 }]
  }, { plugins: { legend: { display: false } }, scales: MINI_SCALE });
}

function drawQuotaImpact(pz, quota) {
  const pts = Array.from({ length: 11 }, (_, i) => {
    const q = i * 10;
    return Math.round(Math.max(0, 100 - (q / 100) * (0.5 + pz.collapse_prob * 1.5) * 60 - pz.collapse_prob * 30));
  });
  mkMini('quotaImpactChart', 'line', {
    labels: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    datasets: [{
      data: pts, borderColor: '#1D9E75', backgroundColor: '#1D9E7522', fill: true, tension: 0.4, pointRadius: 0, borderWidth: 2,
    }, {
      data: pts.map((_, i) => i === Math.round(quota / 10) ? pts[Math.round(quota / 10)] : null),
      borderColor: '#00b4d8', backgroundColor: '#00b4d8', pointRadius: 7, pointStyle: 'circle', showLine: false,
    }]
  }, { plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => `Pop Health: ${c.parsed.y}%` } } }, scales: MINI_SCALE });
}

function drawRecallImpact(pz, recall) {
  const pts = Array.from({ length: 11 }, (_, i) => Math.round(Math.max(0, 50 - (i * 10 / 100) * 20)));
  mkMini('recallImpactChart', 'line', {
    labels: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    datasets: [{
      data: pts, borderColor: '#378ADD', backgroundColor: '#378ADD22', fill: true, tension: 0.4, pointRadius: 0, borderWidth: 2,
    }, {
      data: pts.map((_, i) => i === Math.round(recall / 10) ? pts[Math.round(recall / 10)] : null),
      borderColor: '#00b4d8', backgroundColor: '#00b4d8', pointRadius: 7, showLine: false,
    }]
  }, { plugins: { legend: { display: false } }, scales: MINI_SCALE });
}

function drawMonitorImpact(monitoring) {
  const pts = Array.from({ length: 11 }, (_, i) => Math.round(50 + (i * 10 / 100) * 23));
  mkMini('monitorImpactChart', 'line', {
    labels: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    datasets: [{
      data: pts, borderColor: '#7F77DD', backgroundColor: '#7F77DD22', fill: true, tension: 0.4, pointRadius: 0, borderWidth: 2,
    }, {
      data: pts.map((_, i) => i === Math.round(monitoring / 10) ? pts[Math.round(monitoring / 10)] : null),
      borderColor: '#00b4d8', backgroundColor: '#00b4d8', pointRadius: 7, showLine: false,
    }]
  }, { plugins: { legend: { display: false } }, scales: MINI_SCALE });
}

function drawBreakdownBar(scores, d) {
  mkMini('breakdownChart', 'bar', {
    labels: ['Fishing\nQuota', 'Zone\nProtection', 'Fleet\nRecall', 'Monitoring', 'Communication'],
    datasets: [
      {
        label: 'Population Impact',
        data: [
          -Math.round((d.quota / 100) * (0.5 + scores.pop / 100) * 30),
          Math.round((d.zones_closed / 4) * 25),
          Math.round((d.recall / 100) * 15),
          Math.round((d.monitoring / 100) * 8),
          d.comms === 'emergency' ? -5 : d.comms === 'advisory' ? 2 : 0
        ],
        backgroundColor: '#1D9E75cc', borderWidth: 0, borderRadius: 4,
      },
      {
        label: 'Economic Impact',
        data: [
          Math.round((d.quota / 100) * 40),
          -Math.round((d.zones_closed / 4) * 15),
          -Math.round((d.recall / 100) * 20),
          -Math.round((d.monitoring / 100) * 10),
          d.comms === 'emergency' ? -8 : d.comms === 'advisory' ? -3 : 0
        ],
        backgroundColor: '#BA7517cc', borderWidth: 0, borderRadius: 4,
      }
    ]
  }, {
    plugins: { legend: { display: true, labels: { color: 'rgba(200,220,232,0.7)', font: { size: 10 }, boxWidth: 10 } } },
    scales: {
      x: { ticks: { color: 'rgba(200,220,232,0.6)', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
      y: { ticks: { color: 'rgba(200,220,232,0.6)', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,0.04)' } }
    }
  });
}

// ── CURRENT DECISIONS STATE ───────────────────────────────────────────────────
let D = { quota: 50, zones_closed: 0, closedZonesList: [], recall: 0, monitoring: 50, comms: 'nothing' };

function liveNumbers(scores) {
  return [
    ['🐟 Population Health', scores.pop],
    ['💰 Economic Viability', scores.econ],
    ['📣 Public Trust', scores.trust],
    ['💵 Budget Remaining', scores.budget],
  ].map(([label, val]) => `
    <div>
      <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px;">
        <span style="color:var(--text2);">${label}</span>
        <span style="color:${scoreColor(val)};font-weight:600;font-family:var(--mono);">${val}%</span>
      </div>
      ${scoreBar(val, scoreColor(val))}
    </div>
  `).join('') + `
    <div style="margin-top:8px;padding:10px;background:rgba(0,0,0,0.25);border-radius:10px;text-align:center;">
      <div style="font-size:10px;color:var(--accent2);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px;">Survival Probability</div>
      <div style="font-size:30px;font-weight:700;color:${scoreColor(scores.survival)};">${scores.survival}%</div>
    </div>`;
}

function updateLive(pz) {
  const scores = calcScores(pz, D);
  const el = document.getElementById('liveNumbers');
  if (el) el.innerHTML = liveNumbers(scores);
  drawRadar('liveRadar', scores);
  return scores;
}

// ── MAIN RENDER ───────────────────────────────────────────────────────────────
function renderGame() {
  const pz = getPuzzle(), s = initState();
  const played = playedToday(s);
  const root = document.getElementById('game-root');
  if (!root) return;

  D = { quota: 50, zones_closed: 0, closedZonesList: [], recall: 0, monitoring: 50, comms: 'nothing' };

  const wr = s.played > 0 ? Math.round(s.won / s.played * 100) + '%' : '—';

  root.innerHTML = `
  <div class="game-wrap" style="max-width:800px;">
    <div class="game-header">
      <div class="game-title">🐟 Save the Quarter</div>
      <div class="game-subtitle">Puzzle #${getDayNum() + 1} · ${pz.quarter_name} ${pz.year} · Real CalCOFI Data · ${pz.fleet_size} active vessels</div>
    </div>

    <div class="streak-bar">
      <div class="streak-item"><div class="streak-num">🔥 ${s.streak}</div><div class="streak-label">Streak</div></div>
      <div class="streak-item"><div class="streak-num">${s.best}</div><div class="streak-label">Best</div></div>
      <div class="streak-item"><div class="streak-num">${s.played}</div><div class="streak-label">Played</div></div>
      <div class="streak-item"><div class="streak-num">${wr}</div><div class="streak-label">Win Rate</div></div>
    </div>

    <!-- CONDITIONS PANEL -->
    <div class="puzzle-card">
      <div class="puzzle-date">${pz.quarter_name} ${pz.year} · Q${pz.quarter} · Southern California Bight</div>
      <div class="puzzle-season">${pz.season_desc}</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px;">
        ${[
          ['🌡️ Temperature', an(pz.temp_anom) + '°C'],
          ['💧 Oxygen', an(pz.oxy_anom, true) + ' ml/L'],
          ['🌊 El Niño MEI', (pz.mei > 0 ? '+' : '') + pz.mei.toFixed(2)],
          ['🌿 Chlorophyll', an(pz.chlora_anom)],
          ['🐠 Species Richness', `<span style="color:var(--text0)">${pz.richness}</span>`],
          ['📊 Shannon Index', `<span style="color:var(--text0)">${pz.shannon.toFixed(2)}</span>`],
        ].map(([label, val]) => `
          <div style="background:rgba(0,0,0,0.2);border-radius:8px;padding:10px;text-align:center;">
            <div style="font-size:10px;color:var(--accent2);text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">${label}</div>
            <div style="font-size:16px;font-weight:700;">${val}</div>
          </div>`).join('')}
      </div>
      <div style="text-align:center;">
        <span class="enso-badge" style="${ensoStyle(pz.enso)}">${pz.enso} · ${pz.enso_detail}</span>
      </div>
    </div>

    ${played ? renderResult(pz, s) : renderDecisions(pz)}
  </div>`;

  if (!played) setTimeout(() => initListeners(pz), 80);
}

// ── DECISIONS ─────────────────────────────────────────────────────────────────
function renderDecisions(pz) {
  const zoneColors = pz.zones.map(z =>
    z.stress > 0.6 ? '#E24B4A' : z.stress > 0.3 ? '#BA7517' : '#1D9E75'
  );
  return `
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">

    <!-- LEFT COLUMN -->
    <div style="display:flex;flex-direction:column;gap:1rem;">

      <!-- D1: QUOTA -->
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:.6rem;">
          <span class="section-label" style="margin:0;">🎣 Decision 1 — Fishing Quota</span>
          <span id="quotaVal" style="font-family:var(--mono);font-size:20px;font-weight:700;color:var(--accent);">50%</span>
        </div>
        <input type="range" id="quotaSlider" min="0" max="100" value="50" step="5"
          style="width:100%;accent-color:#00b4d8;cursor:pointer;margin-bottom:.4rem;">
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--accent3);margin-bottom:.6rem;">
          <span>🚫 Moratorium</span><span>⚠️ Maximum harvest</span>
        </div>
        <div style="padding:.5rem .75rem;background:rgba(0,0,0,0.2);border-radius:6px;font-size:11px;color:var(--text3);margin-bottom:.75rem;">
          Est. revenue: ~$<span id="quotaRevenue">${(pz.econ_baseline_M * 0.5).toFixed(1)}</span>M this quarter
        </div>
        <div style="font-size:10px;color:var(--accent3);margin-bottom:4px;text-transform:uppercase;letter-spacing:.08em;">Population health curve</div>
        <div style="height:90px;"><canvas id="quotaImpactChart"></canvas></div>
      </div>

      <!-- D2: ZONES -->
      <div class="card">
        <span class="section-label">🗺️ Decision 2 — Spawning Zone Closures</span>
        <p style="font-size:11px;color:var(--text3);margin-bottom:.75rem;">Click to close zones. Closing costs fishing revenue but protects larvae.</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:.75rem;">
          ${pz.zones.map((z, i) => `
            <button class="zone-btn" data-zone="${i}" style="
              background:rgba(0,0,0,0.2);border:1px solid ${zoneColors[i]}44;border-radius:8px;
              padding:8px 10px;text-align:left;cursor:pointer;transition:all .2s;width:100%;">
              <div style="font-size:11px;color:var(--text0);font-weight:500;margin-bottom:2px;">${z.name}</div>
              <div style="font-size:10px;color:${zoneColors[i]};">
                Stress ${Math.round(z.stress * 100)}% · O₂ ${z.oxy_anom > 0 ? '+' : ''}${z.oxy_anom.toFixed(3)}
              </div>
            </button>`).join('')}
        </div>
        <div style="font-size:10px;color:var(--accent3);margin-bottom:4px;text-transform:uppercase;letter-spacing:.08em;">Zone stress levels</div>
        <div style="height:90px;"><canvas id="zoneImpactChart"></canvas></div>
      </div>

      <!-- D5: COMMS -->
      <div class="card">
        <span class="section-label">📢 Decision 5 — Public Communication</span>
        <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:.75rem;">
          ${[
            ['nothing', '🤫', 'Say nothing', 'Normal ops. No public impact.', 'rgba(0,180,216,.14)', 'rgba(0,180,216,.4)', 'var(--accent)'],
            ['advisory', '⚠️', 'Issue advisory', 'Warn fishers + public. Moderate impact.', 'rgba(0,0,0,0.2)', 'rgba(186,117,23,0.3)', 'var(--text2)'],
            ['emergency', '🚨', 'Declare emergency', 'Maximum pressure. Costly. Destroys trust if unwarranted.', 'rgba(0,0,0,0.2)', 'rgba(226,75,74,0.3)', 'var(--text2)'],
          ].map(([val, icon, label, desc, bg, border, color]) => `
            <button class="comms-btn ${val === 'nothing' ? 'active-comms' : ''}" data-comms="${val}"
              style="background:${val === 'nothing' ? bg : 'rgba(0,0,0,0.2)'};border:1px solid ${border};border-radius:8px;
                     padding:9px 12px;color:${val === 'nothing' ? color : 'var(--text2)'};font-family:var(--font);
                     font-size:12.5px;cursor:pointer;text-align:left;transition:all .2s;width:100%;">
              <div style="font-weight:500;">${icon} ${label}</div>
              <div style="font-size:10px;opacity:.7;margin-top:2px;">${desc}</div>
            </button>`).join('')}
        </div>
      </div>

    </div>

    <!-- RIGHT COLUMN -->
    <div style="display:flex;flex-direction:column;gap:1rem;">

      <!-- D3: RECALL -->
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:.6rem;">
          <span class="section-label" style="margin:0;">⚓ Decision 3 — Fleet Recall</span>
          <span id="recallVal" style="font-family:var(--mono);font-size:20px;font-weight:700;color:var(--accent);">0%</span>
        </div>
        <input type="range" id="recallSlider" min="0" max="100" value="0" step="5"
          style="width:100%;accent-color:#00b4d8;cursor:pointer;margin-bottom:.4rem;">
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--accent3);margin-bottom:.6rem;">
          <span>All vessels active</span><span>Full recall</span>
        </div>
        <div style="padding:.5rem .75rem;background:rgba(0,0,0,0.2);border-radius:6px;font-size:11px;color:var(--text3);margin-bottom:.75rem;">
          Recalled: <span id="recallVessels">0</span> of ${pz.fleet_size} vessels · Cost: ~$<span id="recallCost">0</span>K
        </div>
        <div style="font-size:10px;color:var(--accent3);margin-bottom:4px;text-transform:uppercase;letter-spacing:.08em;">Economic impact curve</div>
        <div style="height:90px;"><canvas id="recallImpactChart"></canvas></div>
      </div>

      <!-- D4: MONITORING -->
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:.6rem;">
          <span class="section-label" style="margin:0;">📡 Decision 4 — Monitoring Intensity</span>
          <span id="monitorVal" style="font-family:var(--mono);font-size:20px;font-weight:700;color:var(--accent);">50%</span>
        </div>
        <input type="range" id="monitorSlider" min="0" max="100" value="50" step="5"
          style="width:100%;accent-color:#00b4d8;cursor:pointer;margin-bottom:.4rem;">
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--accent3);margin-bottom:.75rem;">
          <span>Minimal coverage</span><span>Maximum intensity</span>
        </div>
        <div style="font-size:10px;color:var(--accent3);margin-bottom:4px;text-transform:uppercase;letter-spacing:.08em;">Overall score impact</div>
        <div style="height:90px;"><canvas id="monitorImpactChart"></canvas></div>
      </div>

      <!-- LIVE RADAR -->
      <div class="card">
        <span class="section-label">📊 Live Score — updates as you decide</span>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;align-items:center;">
          <div style="height:160px;"><canvas id="liveRadar"></canvas></div>
          <div id="liveNumbers" style="display:flex;flex-direction:column;gap:6px;"></div>
        </div>
      </div>

    </div>
  </div>

  <button id="submitBtn" style="
    display:block;width:100%;margin-top:1rem;
    background:rgba(0,180,216,.15);border:1px solid rgba(0,180,216,.4);
    border-radius:10px;color:var(--accent);font-family:var(--font);
    font-size:16px;font-weight:600;padding:14px;cursor:pointer;transition:all .2s;">
    🎯 Submit My Decisions
  </button>
  <div style="text-align:center;font-size:11px;color:var(--text3);margin-top:.5rem;">
    Win condition: Survival ≥ 50% · Economy ≥ 40% · Trust ≥ 30%
  </div>`;
}

// ── LISTENERS ─────────────────────────────────────────────────────────────────
function initListeners(pz) {
  // Initial charts
  drawQuotaImpact(pz, D.quota);
  drawRecallImpact(pz, D.recall);
  drawMonitorImpact(D.monitoring);
  drawZoneBar('zoneImpactChart', pz, D.closedZonesList);
  updateLive(pz);

  // Quota
  const qs = document.getElementById('quotaSlider');
  if (qs) qs.addEventListener('input', () => {
    D.quota = +qs.value;
    document.getElementById('quotaVal').textContent = D.quota + '%';
    document.getElementById('quotaRevenue').textContent = (pz.econ_baseline_M * D.quota / 100).toFixed(1);
    drawQuotaImpact(pz, D.quota);
    updateLive(pz);
  });

  // Recall
  const rs = document.getElementById('recallSlider');
  if (rs) rs.addEventListener('input', () => {
    D.recall = +rs.value;
    document.getElementById('recallVal').textContent = D.recall + '%';
    document.getElementById('recallVessels').textContent = Math.round(pz.fleet_size * D.recall / 100);
    document.getElementById('recallCost').textContent = Math.round(pz.fleet_size * D.recall / 100 * 12);
    drawRecallImpact(pz, D.recall);
    updateLive(pz);
  });

  // Monitor
  const ms = document.getElementById('monitorSlider');
  if (ms) ms.addEventListener('input', () => {
    D.monitoring = +ms.value;
    document.getElementById('monitorVal').textContent = D.monitoring + '%';
    drawMonitorImpact(D.monitoring);
    updateLive(pz);
  });

  // Zones
  document.querySelectorAll('.zone-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const zi = +btn.dataset.zone;
      const z = pz.zones[zi];
      const zc = z.stress > 0.6 ? '#E24B4A' : z.stress > 0.3 ? '#BA7517' : '#1D9E75';
      if (D.closedZonesList.includes(zi)) {
        D.closedZonesList = D.closedZonesList.filter(x => x !== zi);
        btn.style.background = 'rgba(0,0,0,0.2)';
        btn.style.borderColor = zc + '44';
        btn.querySelector('div').textContent = z.name;
      } else {
        D.closedZonesList.push(zi);
        btn.style.background = 'rgba(0,180,216,0.12)';
        btn.style.borderColor = 'rgba(0,180,216,0.5)';
        btn.querySelector('div').textContent = '🔒 ' + z.name;
      }
      D.zones_closed = D.closedZonesList.length;
      drawZoneBar('zoneImpactChart', pz, D.closedZonesList);
      updateLive(pz);
    });
  });

  // Comms
  document.querySelectorAll('.comms-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      D.comms = btn.dataset.comms;
      document.querySelectorAll('.comms-btn').forEach(b => {
        b.style.background = 'rgba(0,0,0,0.2)';
        b.style.color = 'var(--text2)';
      });
      btn.style.background = 'rgba(0,180,216,.14)';
      btn.style.color = 'var(--accent)';
      updateLive(pz);
    });
  });

  // Submit
  document.getElementById('submitBtn').addEventListener('click', () => {
    const scores = calcScores(pz, D);
    const today = new Date().toISOString().slice(0, 10);
    const won = scores.survival >= 50 && scores.econ >= 40 && scores.trust >= 30;
    const ns = getState();
    ns.played = (ns.played || 0) + 1;
    ns.lastPlayed = today;
    ns.lastResult = { scores, decisions: { ...D, closedZonesList: [...D.closedZonesList] }, won };
    if (won) { ns.won = (ns.won || 0) + 1; ns.streak = (ns.streak || 0) + 1; ns.best = Math.max(ns.streak, ns.best || 0); }
    else { ns.streak = 0; }
    if (!ns.history) ns.history = [];
    ns.history = [...ns.history.slice(-6), { survival: scores.survival, pop: scores.pop, econ: scores.econ, trust: scores.trust }];
    saveState(ns);
    renderGame();
  });
}

// ── RESULT SCREEN ─────────────────────────────────────────────────────────────
function renderResult(pz, s) {
  const r = s.lastResult;
  if (!r) return '<div class="callout">Come back tomorrow!</div>';
  const { scores, decisions, won } = r;

  const archetypeDesc = {
    '🏆 Optimal Manager': 'Balanced decisions matched the conditions. The ecosystem and economy both benefited.',
    '🌿 Over-Conservationist': 'You protected the fish but hurt fishing communities unnecessarily. Over-restriction has real costs.',
    '💰 Over-Exploiter': 'You maximized short-term revenue at the expense of the ecosystem. Unsustainable.',
    '😱 Alarmist': 'You declared emergency when conditions were mild. Public trust eroded — they\'ll ignore you when it really matters.',
    '😴 Negligent': 'Minimal action across the board. Flying blind with no monitoring and no protection.',
  };

  setTimeout(() => {
    drawRadar('resultRadar', scores);
    drawBreakdownBar(scores, decisions);
    drawZoneBar('resultZoneChart', pz, decisions.closedZonesList || []);
    if (s.history && s.history.length > 1) {
      mkMini('historyChart', 'line', {
        labels: s.history.map((_, i) => `D${i + 1}`),
        datasets: [
          { label: 'Survival', data: s.history.map(h => h.survival), borderColor: '#00b4d8', tension: 0.4, pointRadius: 4, borderWidth: 2, backgroundColor: 'transparent' },
          { label: 'Population', data: s.history.map(h => h.pop), borderColor: '#1D9E75', tension: 0.4, pointRadius: 3, borderWidth: 1.5, backgroundColor: 'transparent' },
          { label: 'Economy', data: s.history.map(h => h.econ), borderColor: '#BA7517', tension: 0.4, pointRadius: 3, borderWidth: 1.5, backgroundColor: 'transparent' },
          { label: 'Trust', data: s.history.map(h => h.trust), borderColor: '#7F77DD', tension: 0.4, pointRadius: 3, borderWidth: 1.5, backgroundColor: 'transparent' },
        ]
      }, {
        plugins: { legend: { display: true, labels: { color: 'rgba(200,220,232,0.7)', font: { size: 10 }, boxWidth: 10 } } },
        scales: {
          x: { ticks: { color: 'rgba(200,220,232,0.5)', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
          y: { min: 0, max: 100, ticks: { color: 'rgba(200,220,232,0.5)', font: { size: 9 }, callback: v => v + '%' }, grid: { color: 'rgba(255,255,255,0.04)' } }
        }
      });
    }
  }, 80);

  const commsLabels = { nothing: 'No action', advisory: 'Advisory issued', emergency: 'Emergency declared' };

  return `
  <div class="result-card ${won ? 'result-win' : 'result-lose'}">
    <div class="result-emoji">${won ? '🐟' : '💀'}</div>
    <div class="result-title">${won ? 'Quarter Saved!' : 'Ecosystem Collapsed'}</div>
    <div class="result-subtitle">Survival probability: <strong style="color:${scoreColor(scores.survival)}">${scores.survival}%</strong>${won ? ' — All thresholds met.' : ' — One or more thresholds failed.'}</div>
    <div class="result-streak">${won ? '🔥 Streak: ' + s.streak + ' quarters' : 'Streak reset to 0'}</div>
    <div class="result-stats">
      <div class="result-stat"><div class="result-stat-val" style="color:${scoreColor(scores.pop)}">${scores.pop}%</div><div class="result-stat-lbl">Population</div></div>
      <div class="result-stat"><div class="result-stat-val" style="color:${scoreColor(scores.econ)}">${scores.econ}%</div><div class="result-stat-lbl">Economy</div></div>
      <div class="result-stat"><div class="result-stat-val" style="color:${scoreColor(scores.trust)}">${scores.trust}%</div><div class="result-stat-lbl">Trust</div></div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;">
    <div class="card">
      <span class="section-label">Your Manager Profile</span>
      <div style="height:170px;"><canvas id="resultRadar"></canvas></div>
      <div style="margin-top:.75rem;padding:.75rem;background:rgba(0,0,0,0.2);border-radius:8px;">
        <div style="font-size:14px;font-weight:600;color:var(--text0);margin-bottom:4px;">${scores.archetype}</div>
        <div style="font-size:11.5px;color:var(--text3);line-height:1.6;">${archetypeDesc[scores.archetype] || ''}</div>
      </div>
    </div>
    <div class="card">
      <span class="section-label">Decision Impact Breakdown</span>
      <div style="height:220px;"><canvas id="breakdownChart"></canvas></div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;">
    <div class="card">
      <span class="section-label">Zone Stress + Closures</span>
      <div style="height:150px;"><canvas id="resultZoneChart"></canvas></div>
      <div style="font-size:11px;color:var(--text3);margin-top:.5rem;">Blue = closed · Red = high stress · Green = healthy</div>
    </div>
    <div class="card">
      <span class="section-label">What Actually Happened</span>
      ${[
        ['Actual larvae / 10m²', pz.actual_larvae.toFixed(1)],
        ['Collapse threshold', pz.threshold.toFixed(1)],
        ['ML collapse probability', Math.round(pz.collapse_prob * 100) + '%'],
        ['Your quota', decisions.quota + '%'],
        ['Zones closed', decisions.zones_closed + ' / 4'],
        ['Fleet recalled', decisions.recall + '%'],
        ['Communication', commsLabels[decisions.comms]],
      ].map(([label, val]) => `
        <div style="display:flex;justify-content:space-between;font-size:12.5px;padding:5px 0;border-bottom:1px solid var(--border2);">
          <span style="color:var(--text2);">${label}</span>
          <span style="color:var(--text0);font-weight:600;font-family:var(--mono);">${val}</span>
        </div>`).join('')}
      <div style="margin-top:.75rem;padding:.6rem;border-radius:8px;text-align:center;
        background:${pz.actual_collapse ? 'rgba(220,50,50,0.07)' : 'rgba(0,180,80,0.06)'};
        border:1px solid ${pz.actual_collapse ? 'rgba(220,50,50,0.2)' : 'rgba(0,180,80,0.2)'}">
        <span style="font-size:13px;color:${pz.actual_collapse ? '#ff5555' : '#44ee88'};">
          ${pz.actual_collapse ? '❌ Population actually collapsed this quarter' : '✅ Population actually survived this quarter'}
        </span>
      </div>
    </div>
  </div>

  ${s.history && s.history.length > 1 ? `
  <div class="card" style="margin-bottom:1rem;">
    <span class="section-label">Your Manager History (last ${s.history.length} quarters)</span>
    <div style="height:130px;margin-top:.5rem;"><canvas id="historyChart"></canvas></div>
  </div>` : ''}

  <div class="callout">
    <strong>Win condition:</strong> Survival ≥ 50% AND Economy ≥ 40% AND Trust ≥ 30%.<br>
    Heavy fishing is sometimes fine — if conditions are good (low MEI, positive oxygen, cold temps), you can fish aggressively and still win.
    The penalty is for being reckless when the data says danger.
  </div>

  <div style="text-align:center;color:var(--accent3);font-size:13px;padding:1rem 0;">
    Next puzzle tomorrow at midnight 🌊
  </div>`;
}

document.addEventListener('DOMContentLoaded', renderGame);