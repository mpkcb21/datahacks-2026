website link: https://mpkcb21.github.io/datahacks-2026/

As the California Current warms, we wanted to understand which biological communities will collapse first. Using 72 years of Scripps/CalCOFI ocean data, our inspiration for Pacific Pulse was to move beyond simply charting temperatures to actually tracking ecosystem stress across multiple chemical variables, and forecasting what the ocean will look like in 2075.

Pacific Pulse is a 70-year ecosystem early warning system that tracks historical ocean chemistry against fish larvae survivability.

ML Early Warning System: A Gradient Boosting Classifier that predicts Northern Anchovy population collapse one quarter in advance with 80% precision.

Data Analytics: Proves a long-term decline in baseline nutrients, maps the real-time geographic migration of anchovies escaping Southern California, and models a localized reproductive collapse of Pacific Sardines by 2050.

Interactive Tooling: Includes a forecasting dashboard and a daily ocean science game, "Save the Quarter," built on 30 years of real CalCOFI data.

We analyzed 895k+ chemistry samples, 91k larvae observations, and crowdsourced iNaturalist data using Python, Pandas, and Scikit-learn. We merged these layers by standardizing timestamps and spatial bins to calculate regional population shifts. Our ML model uses temporal cross-validation (training on 1990–2010, testing on 2011–2021) to predict if larvae counts will drop below the 25th percentile based on chemistry and El Niño signals.

Our biggest challenge was dealing with noisy biological data. Our sardine collapse model struggled significantly (AUC 0.461) due to natural variability. Additionally, our anchovy model completely missed the 2020 dip (assigning only 0.8% probability), teaching us that extreme events can be driven by factors completely outside our chemistry feature set, such as disease or COVID-19 sampling gaps.

We successfully built a highly precise (80%) early warning classifier for Northern Anchovies, identifying Nitrate (NO3) as the dominant warning signal. We're also incredibly proud of proving the "Climate Refuge" effect mathematically—showing a severe negative correlation between warming water and anchovy presence in SoCal, while Central California absorbs the fleeing population.

We learned nitrate accounts for 23.2% of our model's feature importance, making it a stronger leading indicator of anchovy collapse than temperature or oxygen alone.

Assuming current linear trajectories, Pacific Sardine larvae in the Southern California Bight will reach effectively zero by 2050.

We plan to expand our ML feature set to capture non-chemistry drivers to better predict anomalous events like the 2020 collapse. We also want to integrate data on predator species (seabirds and marine mammals) to track how these trophic shifts cascade up the entire California Current food web.
