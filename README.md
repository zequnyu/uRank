<h1 align="center">
  uRank
</h1>

#### Update Plan 

- [x] Change the framework to create-react-app.
- [x] Change the domain to Netlify.
- [x] Improve UI using Bulma.
- [ ] Finish up the Analysis part with new UI
- [ ] Add more universities to the DB (now 150 target 200)


### Summary

**uRank** is the all-in-one website to find rankings of your favourite global university, where you can find four most influential global rankings in the world:

- [QS](https://www.topuniversities.com) (*QS World University Rankings*)
- [US News](https://www.usnews.com/education/best-global-universities) (*Best Global University Ranking*)
- [Times](https://www.timeshighereducation.com) (*Times Higher Education World University Rankings*)
- [ARWU](http://www.shanghairanking.com) (*Shanghai Academic Ranking of World Universities*)

You can now find the past 5 years (2015-2019) data on specific ranking, alone with its average ranking.


### Data

All the data was collected using Python Web Crawling Framework [Scrapy](https://scrapy.org) and checked manually. Source from:

* QS Ranking 2016-2019: [QS official website](https://www.topuniversities.com/university-rankings/world-university-rankings/2019)
* QS Ranking 2015: [Web archive](https://web.archive.org)
* US News Ranking 2019: [US News official website](https://www.usnews.com/education/best-global-universities/rankings)
* US News Ranking 2015-2018: [Qianmu](http://www.qianmu.org)
* ARWU Ranking 2015-2019: [ARWU official website](http://www.shanghairanking.com/ARWU2018.html) (ARWU 201(*n*)= ARWU201(*n+1*))
* Times Ranking 2015-2019: [THE official website](https://www.timeshighereducation.com/world-university-rankings/2019/world-ranking#!/page/0/length/25/sort_by/rank/sort_order/asc/cols/stats)


### Technology Stack Outline

* Fully written in [React.js](https://reactjs.org) using [create-react-app](https://github.com/facebook/create-react-app)
* TO UPDATE: Charts supported by [Chart.js](https://www.chartjs.org)
* CSS styled using [Bulma](https://bulma.io)

### Background Image Source from [Unsplash](https://unsplash.com)

all.png: University of Cambridge, Cambridge, United Kingdom,
	Photo by [Vadim Sherbakov](https://unsplash.com/@madebyvadim)

qs.png: Bus near Houses of Parliament, London, United Kingdom,
	Photo by [David Dibert](https://unsplash.com/@dibert)

usnews.png: Times Square, New York, United States,
	Photo by [Andrae Ricketts](https://unsplash.com/@drezart)

times.png: The View from The Shard, London, United Kingdom,
	Photo by [Benjamin Davies](https://unsplash.com/@bendavisual)

arwu.png: Shanghai Bund, Shanghai, China,
	Photo by [Edward He](https://unsplash.com/@bingham008)
  