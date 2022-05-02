export let type = {group: 'group project', personal: 'personal project'}
export let tag = {
  all: 'showAll', html:'html', css:'css', js:'javascript',
   java:'java', cs:'c#', angular:'angular', nodejs:'nodejs',
    mysql:'mysql', sqlserver:'sql server', flutter: 'flutter'}
let logo={
html:'assets/image/logo/html.svg',
css:'assets/image/logo/css.svg',
js:'assets/image/logo/js.svg',
bootstrap:'assets/image/logo/bootstrap.svg',
jquery:'assets/image/logo/jquery.svg',
nodejs:'assets/image/logo/nodejs.svg',
angular:'assets/image/logo/angular.svg',
java:'assets/image/logo/java.svg',
jsp:'assets/image/logo/jsp.svg',
jdbc:'https://anypoint.mulesoft.com/exchange/organizations/68ef9520-24e9-4cf2-b2f5-620025690913/assets/68ef9520-24e9-4cf2-b2f5-620025690913/jdbc-connector/icon/svg/?sha=dc8ae62a56617daca7812a5ef381299bd6603a05',
cs:'assets/image/logo/cs.svg',
dotNet:'assets/image/logo/net.svg',
sqlServer:'assets/image/logo/sql-server.svg',
mySql:'assets/image/logo/mysql.svg',
flutter:'assets/image/logo/flutter.svg'}

export interface Project {
  id: string
  tag: string[]
  name: string
  logo: string[]
  type: string
  content: string
  source: string
}

export let projects:Project[]= [
  {id: '1', tag:[tag.all, tag.html, tag.css, tag.js, tag.angular], name:'portfolio', logo:[logo.angular, logo.html, logo.css, logo.js, logo.bootstrap], type:type.personal, content:'Not use web template to introduce information about me, what skills i have and technology i have used', source:'#'},
  {id: '2', tag:[tag.all, tag.cs, tag.sqlserver], name:'admin page', logo:[logo.cs, logo.dotNet, logo.sqlServer], type:type.group, content:' I write backend amin page which applied asp mvc, linQ, entity framework', source:'https://github.com/khanhdoan09/Admin-Page'},
  {id: '3', tag:[tag.all, tag.java, tag.mysql], name:'shoe e-commerce', logo:[logo.java, logo.jsp, logo.jdbc,logo.jquery, logo.mySql], type:type.group, content:'I write backend for amin page, filter search, pagination which applied jsp and servlet', source:'https://github.com/khanhdoan09/ltw'},
  {id: '4', tag:[tag.all, tag.java], name:'tetris', logo:[logo.java], type:type.group, content:'I used design pattern(strategy pattern, observer pattern, singleton pattern) to translate language for this project', source:'https://github.com/khanhdoan09/TKHDT'},
  // {id:'5', tag:[tag.all, tag.html, tag.css, tag.js, tag.mysql, tag.angular, tag.nodejs], name:'To do list', logo:[logo.angular, logo.html, logo.css, logo.js, logo.bootstrap, logo.nodejs, logo.mySql], type:type.personal, content:'To do list', source:'https://github.com/khanhdoan09/Lesson-Read'},
  {id:'5', tag:[tag.all, tag.html, tag.css, tag.js], name:'pokemon game', logo:[logo.html, logo.css, logo.js], type:type.personal, content:'Make a game pokemon connection with vanila js', source:'#'},
  {id:'6', tag:[tag.all, tag.flutter], name:'weather app', logo:[logo.flutter], type:type.personal, content:'Make a simple weather app can call api from openweathermap.org', source:'https://github.com/khanhdoan09/weather-app'},

]
