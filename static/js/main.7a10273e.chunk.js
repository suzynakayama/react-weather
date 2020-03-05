(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),s=a.n(c),i=(a(28),a(6)),o=a.n(i),l=a(15),u=a(9),m=a(17),d=a(18),h=a(21),f=a(19),p=a(22);function v(e,t,a){var n="https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&units=").concat(a,"&appid=c6c1dac29b1335ad681f4e3abcc959e0");return fetch(n,{mode:"cors"}).then((function(e){return e.json()}))}function b(e,t,a){var n="https://api.openweathermap.org/data/2.5/forecast?lat=".concat(e,"&lon=").concat(t,"&units=").concat(a,"&appid=c6c1dac29b1335ad681f4e3abcc959e0");return fetch(n,{mode:"cors"}).then((function(e){return e.json()}))}var E=a(3);var g=function(e){var t=e.data,a=e.units;return r.a.createElement("div",{className:"today__container"},r.a.createElement(E.a,{className:"text-center today__card"},r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,{className:"today__card--title"},"Weather for ",t.name),r.a.createElement(E.a.Subtitle,{className:"d-inline mr-3 font-weight-bold today__card--subtitle"},t.main.temp,"\xb0",a),r.a.createElement(E.a.Img,{src:"https://openweathermap.org/img/w/".concat(t.weather[0].icon,".png"),alt:"Current Conditions",style:{width:"4rem"},className:"d-inline"}),r.a.createElement(E.a.Text,{className:"text-muted"},"Feels like: ",t.main.feels_like),r.a.createElement(E.a.Text,{className:"text-muted"},"Humidity: ",t.main.humidity,"%"))))},y=a(11),w=a(13),_=a(12);var x=function(e){var t=e.data,a=e.units;return r.a.createElement("div",{className:"hour__container col-sm-5 mt-2 mb-1"},r.a.createElement(E.a,{className:"hour__card text-center"},r.a.createElement(E.a.Body,{className:"hour__card--body "},r.a.createElement(E.a.Title,{className:"hour__card--title"},t.hour),r.a.createElement(E.a.Subtitle,{className:" mt-3 font-weight-bold hour__card--subtitle"},t.temp,"\xb0",a),r.a.createElement(E.a.Img,{src:"https://openweathermap.org/img/w/".concat(t.icon,".png"),alt:"Current Conditions",style:{width:"2rem"},className:"mt-2 mb-3"}),r.a.createElement(E.a.Text,{className:"text-muted hour__card--text"},"Feels: ",t.feels),r.a.createElement(E.a.Text,{className:"text-muted hour__card--text"},"Humidity: ",t.humidity,"%"))))},N=a(8);var k=function(e){var t=Object(n.useState)({state:{avg:null,day:null,month:null,year:null,data:null}}),a=Object(y.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){!function(e){var t=0;e.forEach((function(e){var a=e.temp;t+=a}));var a=Math.round(t/8*10)/10;s({state:{avg:a,day:e[1].day.slice(8,10),month:e[1].day.slice(5,7),year:e[1].day.slice(0,4),data:e}})}(e.data)}),[e.data]),c.state.data?r.a.createElement("div",{className:"col-sm-2 forecast__card--container"},r.a.createElement(w.a,{className:"forecast__accordion"},r.a.createElement(E.a,{className:"forecast__card"},r.a.createElement(E.a.Header,{className:"text-center"},r.a.createElement(E.a.Title,{className:"forecast__accordion--title mb-3"},c.state.month,"/",c.state.day,"/",c.state.year),r.a.createElement(E.a.Subtitle,{className:"text-muted forecast__accordion--subtitle mb-2"},"Average: ",c.state.avg,"\xb0",e.units),r.a.createElement(w.a.Toggle,{as:_.a,variant:"link",eventKey:"0",className:"forecast__accordion--btn mt-2"},"Read More!")),r.a.createElement(w.a.Collapse,{eventKey:"0"},r.a.createElement(E.a.Body,{className:"forecast__accordion--body d-flex justify-content-around flex-wrap"},c.state.data.map((function(t,a){return r.a.createElement(x,{key:a,data:t,units:e.units})}))))))):r.a.createElement("h2",{className:"text-center mt-5"},r.a.createElement(N.a,{animation:"border",variant:"warning"})," Loading...")};var j=function(e){var t=Object(n.useState)(null),a=Object(y.a)(t,2),c=a[0],s=a[1],i=function(e,t){for(var a=[];e.length;)a.push(e.splice(0,t));s({days:a})};return Object(n.useEffect)((function(){var t=e.forecast.list,a=[];(function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.map((function(e){var t={};return t.hour=e.dt_txt.slice(11,16),t.temp=e.main.temp,t.feels=e.main.feels_like,t.humidity=e.main.humidity,t.day=e.dt_txt.slice(0,10),t.icon=e.weather[0].icon,a.push(t)}));case 2:i(a,8);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e.forecast.list]),c?r.a.createElement("div",{className:"d-flex justify-content-around flex-wrap forecast__div"},c.days.map((function(t,a){return r.a.createElement(k,{key:a,data:t,units:e.units})}))):r.a.createElement("h2",{className:"text-center mt-5"},r.a.createElement(N.a,{animation:"border",variant:"warning"})," Loading...")};var O=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/suzynakayama",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",null,"Developed by"),"\xa0Suzy Yume\xa0",r.a.createElement("i",{className:"devicon-github-plain git-icon"}))))},C=(a(33),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={lat:null,lng:null,weatherData:null,forecast:null,units:"metric",reRender:!1},a.handleUpdate=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(a.state.lat,a.state.lng,t);case 2:return n=e.sent,e.next=5,b(a.state.lat,a.state.lng,t);case 5:r=e.sent,a.setState(Object(l.a)({},a.state,{weatherData:n,forecast:r,units:t}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleUnits=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"metric"!==a.state.units){e.next=6;break}return e.next=4,a.handleUpdate("imperial");case 4:e.next=8;break;case 6:return e.next=8,a.handleUpdate("metric");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){navigator.geolocation.getCurrentPosition((function(t){return e({lat:t.coords.latitude,lng:t.coords.longitude})}))}));case 2:return t=e.sent,a=t.lat,n=t.lng,e.next=7,v(a,n,this.state.units);case 7:return r=e.sent,e.next=10,b(a,n,this.state.units);case 10:c=e.sent,this.setState(Object(l.a)({},this.state,{lat:a,lng:n,weatherData:r,forecast:c}));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.weatherData&&this.state.forecast?r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center mt-5 mb-4 app-title"},"React Weather"),r.a.createElement("div",{className:"btn-container"},r.a.createElement(_.a,{variant:"warning",className:"units-btn font-weight-bold",onClick:this.handleUnits},"imperial"===this.state.units?"C":"F")),r.a.createElement(g,{data:this.state.weatherData,units:"metric"===this.state.units?"C":"F"}),r.a.createElement(j,{forecast:this.state.forecast,units:"metric"===this.state.units?"C":"F"}),r.a.createElement(O,null)):r.a.createElement("h2",{className:"text-center mt-5"},r.a.createElement(N.a,{animation:"border",variant:"warning"})," Loading...")}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.7a10273e.chunk.js.map