webpackJsonp([0x8b7129a8fcf0],{446:function(e,t){e.exports={data:{markdownRemark:{html:'<h1 id="motivation"><a href="#motivation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Motivation</h1>\n<p>We built our project "MIWF" during our Advanced Software Engineering class.\nWe wanted to build an application that allowed people to simulate stock trading.\nThis hypothetical product would target people who have no experience in\nstock trading and want to get involved.</p>\n<h1 id="software-stack"><a href="#software-stack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Software Stack</h1>\n<p>We tried to decide on components that fit our experience and are appropriate\nfor the project:</p>\n<ul>\n<li>Database: We picked <a href="https://www.postgresql.org/">PostgreSQL</a> as our database.\nWe knew that a relational database was the best decision,\nsince our data fits well in a schema, required a lot of aggregation\nqueries, and the database is widely deployed. Our decision fell on PostgreSQL\nover MySQL, since we had more operational experience with former.</li>\n<li>Backend: We powered our backend with <a href="https://www.djangoproject.com/">Django</a>.\nPython was a language that we all had worked with before, thus that\npart was an easy decision. Then we could have either gone with Flask + SQLAlchemy\nor Django. We chose latter, since it offered more of a all-in-one solution and\nthus made it easier for our team. Also Django has an awesome <a href="https://docs.djangoproject.com/en/2.0/">documentation</a>!</li>\n<li>API: We exposed our data via <a href="http://graphql.org/">GraphQL</a>. It allowed us to\nmanage our data definitions in an easier way. On top of that <a href="http://graphene-python.org/">Graphene</a> allowed us to parallelize a lot of data fetching.\nOn the client side it allowed us to evolve our data needs with <a href="https://facebook.github.io/relay/">Relay</a>.</li>\n<li>Frontend: We used <a href="https://reactjs.org/">React</a> to manage our view layer. It\nallowed us to work well with user interactions. Paired with <a href="https://facebook.github.io/relay/">Relay</a>, we were able to model user data and\ninteraction well. The declarative style allowed us to reason about\nthe data.</li>\n<li>Documentation: We generated our documentation with Sphinx and deployed it to readthedocs. You can find it <a href="http://ase4156.readthedocs.io/">here</a>.</li>\n<li>\n<p>External Services: We integrated our application with some external services\nto move critical data away from our responsibility.</p>\n<ul>\n<li><a href="https://plaid.com/">Plaid</a>: This API allowed us to integrate with real\nproduction data. Users were able to link our application with their real bank\naccount.</li>\n<li><a href="https://developers.google.com/identity/sign-in/web/sign-in">Google Auth</a>:\nWe did not want to take the responsibility of authenticating the user, since\nwe would have to store the password and prevent attacks. Thus instead we went\nwith Google Authentication. Integrating with the tool was a breeze.</li>\n</ul>\n</li>\n<li>\n<p>Testing: A major focus of the class was properly testing the application. We\nwere able to achieve a 96% test coverage.</p>\n<ul>\n<li>Python: Django offered an <a href="https://docs.djangoproject.com/en/2.0/topics/testing/overview/">internal testing tool</a>, but <a href="https://docs.pytest.org/en/latest/">pytest</a> had a better appeal for us, since the test runner is\nwidely used. Pytest was not always easy to integrate with Django, but it ended up\nworking for our use cases.</li>\n<li>Javascript: We used <a href="https://facebook.github.io/jest/">Jest</a> to test the\nJavascript side of our application. Combined with <a href="https://facebook.github.io/jest/docs/en/snapshot-testing.html">Snapshot Testing</a> we were able\nto test our client side well. We struggled with testing Relay\ncomponents. Ultimately we had to add a lot of extra test data to\nmatch the expected fragments. An example testcase is <a href="https://github.com/Neitsch/ASE4156/blob/master/web/js/components/InvestBucket/__tests__/InvestBucketRelay-test.jsx">here</a>.</li>\n<li>Selenium: This served as one of our pillars to verify that our software\nactually worked. Unit and integration testing took us 90% of the way, but\nSelenium caught regressions throughout our development process.\nIt ended up being an important asset.</li>\n</ul>\n</li>\n<li>\n<p>Infrastructure:</p>\n<ul>\n<li>We hosted our database with <a href="https://cloud.google.com/sql/docs/postgres/">GCP SQL</a>, since we had credits there.</li>\n<li>We did CID through <a href="https://travis-ci.org/">Travis</a>, since we had positive\nexperiences with it in the\npast</li>\n<li>We hosted our application in <a href="http://dashboard.heroku.com/">Heroku</a>, since\nit seamlessly integrated with Travis and managed our application well.</li>\n</ul>\n</li>\n</ul>\n<h1 id="final-result"><a href="#final-result" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Final result</h1>\n<p>I am satisfied with the final result. All our code is in our <a href="https://github.com/Neitsch/ASE4156">Github\nRepository</a>. We have good test coverage\nwith 96% coverage. Our code is well documented and met most of anticipated\ngoals. Big thanks to JP Morgan Chase and Will Searle for mentoring us\nthroughout the project. We made 2nd place at a private competition for our class.</p>',timeToRead:3,excerpt:'Motivation We built our project "MIWF" during our Advanced Software Engineering class.\nWe wanted to build an application that allowed people…',frontmatter:{title:"Trying to build a good web app",cover:"/img/app-dev.jpg",date:"11/02/2018",category:"Software Engineering",tags:["Programming","Software Engineering","Past Project"]},fields:{nextTitle:"Welcome to my Blog",nextSlug:"/articles/welcome-to-my-blog",prevTitle:"Capsule Networks",prevSlug:"/articles/capsule-networks",slug:"/articles/trying-to-build-a-good-web-app"}}},pathContext:{slug:"/articles/trying-to-build-a-good-web-app"}}}});
//# sourceMappingURL=path---articles-trying-to-build-a-good-web-app-fc53e98102a950176554.js.map