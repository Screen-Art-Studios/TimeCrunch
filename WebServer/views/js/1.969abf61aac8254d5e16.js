webpackJsonp([1],{"58lv":function(t,a,e){var o=e("yY6l");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e("rjj0").default)("b4f016f4",o,!1,{})},b0IF:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".main[data-v-e9d95042]{width:100%;height:100%;margin-top:100px}h1[data-v-e9d95042]{color:#c90c2e;text-align:center}h2[data-v-e9d95042]{border:2px solid #323d38}h2[data-v-e9d95042],input[data-v-e9d95042]{width:90%;font-size:1.5em;padding-left:5%;margin-left:5%}input[data-v-e9d95042]{background-color:#fff;border:2px solid #c90c2e}select option[data-default][data-v-e9d95042]{color:#888}button[data-v-e9d95042]{background:#323d38;border:none;color:#fff;font-size:2em;width:90%;margin-bottom:20px;margin-left:5%;border-radius:5px}.accountView[data-v-e9d95042]{margin-top:60px;width:100%;position:fixed}.accountHome[data-v-e9d95042]{margin-top:10px;width:100%;position:fixed}.accountEdit[data-v-e9d95042]{margin-top:60px;position:fixed}.accountEditButton[data-v-e9d95042]{margin-bottom:20px;background-color:#323d38}.submitEdit[data-v-e9d95042]{margin-top:20px;background-color:#c90c2e}.emailEdit[data-v-e9d95042],.nameEdit[data-v-e9d95042]{border:1px solid #c90c2e;width:90%;margin-top:20px;height:40px}.updatePass[data-v-e9d95042]{margin-top:80px;position:fixed}.togglePass[data-v-e9d95042]{margin-top:20px}",""])},bJZN:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e("mtWM"),i=e.n(o),s=e("dqTT"),n=e.n(s),c=e("1e2d"),r=e.n(c),d={name:"analytics",props:["user"],components:{mapbox:n.a},data:function(){return{marker:document.createElement("div"),markerStart:document.createElement("div"),markerEnd:document.createElement("div"),coordinates:[0,0],startCoordinates:[0,0],endCoordinates:[0,0],pane:"time",modal:"",tripMatch:!1,dayMatch:!1,startTime:{hours:0,minutes:0,seconds:0},endTime:{hours:0,minutes:0,seconds:0},totalTime:{hours:0,minutes:0,seconds:0},totalHours:0,totalDistance:0,search:"",userSearch:"",users:[],clocks:[],days:[],activeClocks:[],tripDays:[],activeTrips:[],trips:[],activeUser:{id:"",name:"",companyId:"",email:"",admin:!1},activeClock:{userId:"",clockType:"",month:"",day:"",hours:"",minutes:"",seconds:"",latitude:"",longitude:"",altitude:""},activeTrip:{userId:"",distance:0,start:{latitude:"",longitude:"",month:0,day:0,hour:0,minute:0,second:0},end:{latitude:"",longitude:"",month:0,day:0,hour:0,minute:0,second:0}},x:0,y:0,a:0,b:0,cx:0,cy:0,diffx:0,diffy:0,minx:0,miny:0,zoom:0,zoomNum:0,mapboxToken:"pk.eyJ1IjoiZ3JhcGV0b2FzdCIsImEiOiJjajhkeHR5YzEwdXp4MnpwbWhqYzI4ejh0In0.JzUlf5asD6yOa5XvjUF5Ag",mapOptions:{container:"map",style:"mapbox://styles/mapbox/streets-v9",center:[0,0],zoom:1}}},created:function(){var t=this;i.a.get("https://54.186.69.46:81/users/all/"+t.user.companyId,{headers:{Authorization:"JWT "+t.user.token}}).then(function(a){t.users=a.data,t.populateCompanyClocks(),t.populateCompanyTrips()}).catch(function(t){console.log(t)})},methods:{viewUser:function(t){var a=this;a.days=[],a.totalHours=0,a.totalDistance=0,a.totalTime={hours:0,minutes:0,seconds:0},a.activeUser.id=t._id,a.activeUser.name=t.name,a.activeUser.companyId=t.companyId,a.activeUser.email=t.email,a.activeUser.admin=t.admin,a.populateUserClocks(),i.a.get("https://54.186.69.46:81/trips/"+a.activeUser.id,{headers:{Authorization:"JWT "+a.user.token}}).then(function(t){a.trips=[],a.trips=t.data;var e=0;for(e=0;e<t.data.length;e++){if(0===a.tripDays.length){a.tripMatch=!0;var o=t.data[e];console.log(a.tripDays),a.tripDays.push({day:o.start.day,month:o.start.month,visible:!1,trips:[o]});break}var i=0;for(i=0;i<a.tripDays.length;i++)if(a.tripDays[i].month===t.data[e].start.month&&a.tripDays[i].day===t.data[e].start.day){a.tripMatch=!0,a.activeTrips=a.tripDays[i].trips;var s=0;for(s=0;s<a.activeTrips.length;s++){if(a.activeTrips[s].start.hours>t.data[e].start.hours){a.tripDays[i].trips.splice(s,0,t.data[e]);break}if(a.activeTrips[s].start.hours===t.data[e].start.hours&&a.activeTrips[s].start.minutes>t.data[e].start.minutes){a.tripDays[i].trips.splice(s,0,t.data[e]);break}if(a.activeTrips[s].start.hours===t.data[e].start.hours&&a.activeTrips[s].start.minutes===t.data[e].start.minutes){a.tripDays[i].trips.splice(s,0,t.data[e]);break}a.tripDays[i].trips.push(t.data[e]);break}}if(!0===a.tripMatch)a.tripMatch=!1;else{console.log(a.tripDays[0].month);var n=0;for(n=0;n<a.tripDays.length;n++){if(a.tripDays[n].month!==t.data[e].start.month){if(a.tripDays[n].month>t.data[e].start.month){a.tripDays.splice(n,0,{day:t.data[e].start.day,month:t.data[e].start.month,visible:!1,trips:[t.data[e]]});break}break}if(a.tripDays[n].day>t.data[e].start.day){a.tripDays.splice(n,0,{day:t.data[e].start.day,month:t.data[e].start.month,visible:!1,trips:[t.data[e]]});break}}}}a.countTrips(),a.modal="user"}).catch(function(t){console.log(t)})},resetTime:function(){this.totalHours=0,this.totalTime={hours:0,minutes:0,seconds:0}},populateUserClocks:function(){var t=this;i.a.get("https://54.186.69.46:81/clocks/"+t.activeUser.id,{headers:{Authorization:"JWT "+t.user.token}}).then(function(a){t.clocks=[],t.clocks=a.data;var e=0;for(e=0;e<a.data.length;e++){var o=0;for(o=0;o<t.days.length;o++)if(t.days[o].month===a.data[e].month&&t.days[o].day===a.data[e].day){t.dayMatch=!0;var i=0,s=t.days[o].clocks.length-1;for(i=0;i<t.days[o].clocks.length;i++){if(t.days[o].clocks[i].hours>a.data[e].hours){console.log("splice"),console.log(a.data[e]),t.days[o].clocks.splice(i,0,a.data[e]);break}if(t.days[o].clocks[i].hours===a.data[e].hours&&t.days[o].clocks[i].minutes>a.data[e].minutes){console.log("splice"),console.log(a.data[e]),t.days[o].clocks.splice(i,0,a.data[e]);break}if(t.days[o].clocks[i].hours===a.data[e].hours&&t.days[o].clocks[i].minutes===a.data[e].minutes){console.log("splice"),console.log(a.data[e]),t.days[o].clocks.splice(i,0,a.data[e]);break}if(t.days[o].clocks[s].hours<a.data[e].hours){console.log("push"),console.log(a.data[e]),t.days[o].clocks.push(a.data[e]);break}if(t.days[o].clocks[s].hours===a.data[e].hours&&t.days[o].clocks[s].minutes===a.data[e].minutes){console.log("push"),console.log(a.data[e]),t.days[o].clocks.push(a.data[e]);break}}}if(!0===t.dayMatch)t.dayMatch=!1;else if(0===t.days.length)console.log("push day"),t.days.push({day:a.data[e].day,month:a.data[e].month,visible:!1,clocks:[a.data[e]]});else{var n=0;for(n=0;n<t.days.length;n++){if(t.days[n].month!==a.data[e].month){if(t.days[n].month>a.data[e].month){t.days.splice(n,0,{day:a.data[e].day,month:a.data[e].month,visible:!1,clocks:[a.data[e]]});break}t.days.push({day:a.data[e].day,month:a.data[e].month,visible:!1,clocks:[a.data[e]]});break}if(t.days[n].day>a.data[e].day){t.days.splice(n,0,{day:a.data[e].day,month:a.data[e].month,visible:!1,clocks:[a.data[e]]});break}}}}t.countClocks()}).catch(function(t){console.log(t)})},populateCompanyClocks:function(){var t=0;for(this.days=[],t=0;t<this.users.length;t++)this.activeUser.id=this.users[t]._id,this.populateUserClocks()},countClocks:function(){var t=this;t.resetTime();var a=0;for(a=0;a<t.days.length;a++){var e=0;for(e=0;e<t.days[a].clocks.length;e++){var o=t.days[a].clocks[e].clockType;"in"===o||"lunch in"===o?t.startTime={hours:t.days[a].clocks[e].hours,minutes:t.days[a].clocks[e].minutes,seconds:t.days[a].clocks[e].seconds}:"out"!==o&&"lunch out"!==o||(t.endTime={hours:t.days[a].clocks[e].hours,minutes:t.days[a].clocks[e].minutes,seconds:t.days[a].clocks[e].seconds},t.totalTime={hours:Math.abs(t.endTime.hours-t.startTime.hours)+t.totalTime.hours,minutes:Math.abs(t.endTime.minutes-t.startTime.minutes)+t.totalTime.minutes,seconds:Math.abs(t.endTime.seconds-t.startTime.seconds)+t.totalTime.seconds})}t.totalHours=t.totalTime.hours+Math.floor(t.totalTime.minutes/60+Math.floor(t.totalTime.seconds/60))}},viewClock:function(t){var a=this;a.activeClock.userId=t.userId,a.activeClock.clockType=t.clockType,a.activeClock.month=t.month,a.activeClock.day=t.day,a.activeClock.hours=t.hours,a.activeClock.minutes=t.minutes,a.activeClock.seconds=t.seconds,a.activeClock.latitude=t.latitude,a.activeClock.longitude=t.longitude,a.activeClock.altitude=t.altitude,a.coordinates=[a.activeClock.longitude,a.activeClock.latitude],a.pane="readout",a.modal="clock"},populateCompanyTrips:function(){var t=this;t.totalDistance=0;var a=0;for(t.trips=[],a=0;a<t.users.length;a++)t.activeUser.id=t.users[a]._id,i.a.get("https://54.186.69.46:81/trips/"+t.activeUser.id,{headers:{Authorization:"JWT "+t.user.token}}).then(function(a){var e=0;for(e=0;e<a.data.length;e++)t.trips.push(a.data[e]),t.trips.length===a.data.length&&t.countTrips();t.trips=[]}).catch(function(t){console.log(t)})},countTrips:function(){var t=0;for(t=0;t<this.trips.length;t++){var a=this.trips[t].distance;this.totalDistance=this.totalDistance+Math.floor(a/1609.34)}},viewTrip:function(t){var a=this;a.activeTrip.userId=t._id,a.activeTrip.distance=t.distance,a.activeTrip.start.month=t.start.month,a.activeTrip.start.day=t.start.day,a.activeTrip.start.hour=t.start.hour,a.activeTrip.start.minute=t.start.minute,a.activeTrip.start.second=t.start.second,a.activeTrip.end.month=t.end.month,a.activeTrip.end.day=t.end.day,a.activeTrip.end.hour=t.end.hour,a.activeTrip.end.minute=t.end.minute,a.activeTrip.end.second=t.end.second,a.activeTrip.start.latitude=t.start.longitude,a.activeTrip.start.longitude=t.start.latitude,a.activeTrip.end.latitude=t.end.longitude,a.activeTrip.end.longitude=t.end.latitude,a.startCoordinates=[t.start.longitude,t.start.latitude],a.endCoordinates=[t.end.longitude,t.end.latitude],a.pane="readout",a.modal="trip"},tripZoom:function(){var t=this;t.x=t.activeTrip.start.latitude,t.y=t.activeTrip.start.longitude,t.a=t.activeTrip.end.latitude,t.b=t.activeTrip.end.longitude,t.x=parseInt(t.x),t.y=parseInt(t.y),t.a=parseInt(t.a),t.b=parseInt(t.b),t.x>t.a?t.minx=t.a:t.minx=t.x,t.y>t.b?t.miny=t.b:t.miny=t.y,t.diffx=Math.abs(t.x-t.a),t.diffy=Math.abs(t.y-t.b),t.cx=t.diffx/2+t.minx,t.cx=t.cx.toString(),t.cy=t.diffy/2+t.miny+t.diffy/4,t.cy=t.cy.toString(),t.zoomNum=t.diffx+t.diffy,console.log(t.x+"long"+t.y),console.log(t.a+"long"+t.b),console.log(t.cx+"long"+t.cy),t.zoomNum<=1?t.map.jumpTo({center:[t.cx,t.cy],zoom:7}):t.zoomNum<=.1?t.map.jumpTo({center:[t.cx,t.cy],zoom:8}):t.zoomNum<=.01?t.map.jumpTo({center:[t.cx,t.cy],zoom:9}):t.zoomNum<=.001?t.map.jumpTo({center:[t.cx,t.cy],zoom:10}):t.zoomNum<=1e-4?t.map.jumpTo({center:[t.cx,t.cy],zoom:11}):t.zoomNum<=1e-5?t.map.jumpTo({center:[t.cx,t.cy],zoom:12}):t.zoomNum<=1e-6?t.map.jumpTo({center:[t.cx,t.cy],zoom:13}):t.zoomNum<=1e-7?t.map.jumpTo({center:[t.cx,t.cy],zoom:14}):t.zoomNum<=1e-8?t.map.jumpTo({center:[t.cx,t.cy],zoom:15}):t.zoomNum<=1e-9&&t.map.jumpTo({center:[t.cx,t.cy],zoom:16})},mapLoaded:function(t){var a=this;a.map=t,"clock"===a.modal?(a.addMarker(),a.map.jumpTo({center:[a.activeClock.longitude,a.activeClock.latitude],zoom:14})):"trip"===a.modal?(a.addMarkers(),a.tripZoom()):(a.addMarkers(),a.map.jumpTo({center:a.startCoordinates,zoom:14}))},addMarker:function(){new r.a.Marker(this.marker).setLngLat(this.coordinates).addTo(this.map)},addMarkers:function(){new r.a.Marker(this.markerStart).setLngLat(this.startCoordinates).addTo(this.map),new r.a.Marker(this.markerEnd).setLngLat(this.endCoordinates).addTo(this.map)}},computed:{analyticsLogic:function(){return{analytics:!0,fixed:"clock"===this.modal||"time"===this.modal||"trip"===this.modal}}}},l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.analyticsLogic},[e("div",{staticClass:"graphsPane"},["time"===t.pane?e("div",{staticClass:"timeGraphsPane"},["user"===t.modal?e("h4",[t._v(t._s(t.activeUser.name)+"'s Time Record")]):t._e(),t._v(" "),e("h4",[t._v(t._s(t.totalHours)+" Total Hours Clocked")])]):"readout"===t.pane?e("div",{staticClass:"readouts"},["clock"===t.modal?e("div",[e("h3",[t._v("User: "+t._s(t.activeUser.name))]),t._v(" "),e("h3",[t._v("Clock "+t._s(t.activeClock.clockType)+" "+t._s(t.activeClock.month+1)+"/"+t._s(t.activeClock.day)+" "+t._s(t.activeClock.hours)+":"+t._s(t.activeClock.minutes))])]):e("div",[e("h3",[t._v("User: "+t._s(t.activeUser.name))]),t._v(" "),e("h3",[t._v("Trip on "+t._s(t.activeTrip.start.month+1)+"/"+t._s(t.activeTrip.start.day)+" Distance: "+t._s(Math.floor(t.activeTrip.distance/1609.34))+" Miles")]),t._v(" "),e("h3",[t._v("Start Time - "+t._s(t.activeTrip.start.hour)+":"+t._s(t.activeTrip.start.minute))]),t._v(" "),e("h3",[t._v("End Time - "+t._s(t.activeTrip.end.hour)+":"+t._s(t.activeTrip.end.minute))])])]):e("div",{staticClass:"mileGraphsPane"},["user"===t.modal?e("h4",[t._v(t._s(t.activeUser.name)+"'s Mileage Record")]):t._e(),t._v(" "),e("h4",[t._v(t._s(t.totalDistance)+" Total Miles Driven")])])]),t._v(" "),"readout"!==t.pane?e("div",{staticClass:"timeTab",on:{click:function(a){t.pane="time"}}},[t._v("Time")]):t._e(),t._v(" "),"readout"!==t.pane?e("div",{staticClass:"mileTab",on:{click:function(a){t.pane=""}}},[t._v("Distance")]):t._e(),t._v(" "),e("div",{staticClass:"modals"},["user"===t.modal?e("div",{staticClass:"userView"},[e("button",{staticClass:"back",on:{click:function(a){t.modal="",t.resetTime(),t.populateCompanyClocks(),t.populateCompanyTrips()}}},[t._v("Back")]),t._v(" "),t._l(t.days,function(a){return"time"===t.pane?e("div",{key:a.id,staticClass:"clockDay"},[e("h5",{on:{click:function(t){a.visible=!a.visible}}},[t._v(" "+t._s(a.month+1)+"/"+t._s(a.day))]),t._v(" "),t._l(a.clocks,function(o){return a.visible?e("div",{key:o.id,staticClass:"clocks"},[e("h5",{on:{click:function(a){t.viewClock(o)}}},[t._v(t._s(o.clockType)+" "+t._s(o.hours)+":"+t._s(o.minutes))])]):t._e()})],2):t._e()}),t._v(" "),t._l(t.tripDays,function(a){return""===t.pane?e("div",{key:a.id,staticClass:"tripDay"},[e("h5",{on:{click:function(t){a.visible=!a.visible}}},[t._v(" "+t._s(a.month+1)+"/"+t._s(a.day))]),t._v(" "),t._l(a.trips,function(o){return a.visible?e("div",{key:o.id,staticClass:"trips"},[e("h5",{on:{click:function(a){t.viewTrip(o)}}},[t._v(" Distance: "+t._s(Math.floor(o.distance/1609.34))+" Miles")])]):t._e()})],2):t._e()})],2):"clock"===t.modal?e("div",{staticClass:"clockMapView"},[e("button",{staticClass:"mapBack",on:{click:function(a){t.modal="user",t.pane="time",t.resetTime(),t.populateCompanyClocks(),t.populateCompanyTrips()}}},[t._v("Back")]),t._v(" "),e("mapbox",{attrs:{id:"map","access-token":t.mapboxToken,"map-options":t.mapOptions},on:{"map-load":t.mapLoaded}})],1):"trip"===t.modal?e("div",{staticClass:"tripMapView"},[e("button",{staticClass:"mapBack",on:{click:function(a){t.modal="user",t.pane="",t.resetTime(),t.populateCompanyClocks(),t.populateCompanyTrips()}}},[t._v("Back")]),t._v(" "),e("mapbox",{attrs:{id:"map","access-token":t.mapboxToken,"map-options":t.mapOptions},on:{"map-load":t.mapLoaded}})],1):e("div",{staticClass:"adminView"},t._l(t.users,function(a){return e("div",{key:a.id,staticClass:"user"},[e("h5",{on:{click:function(e){t.viewUser(a)}}},[t._v(t._s(a.name))])])}))])])},u=[];l._withStripped=!0;var m=e("XyMi"),p=!1;var v=function(t){p||e("58lv")},h=Object(m.a)(d,l,u,!1,v,"data-v-510b3adf",null);h.options.__file="src\\pages\\elements\\Analytics.vue";var f={name:"account",components:{analytics:h.exports},props:["logged","user","accountView"],data:function(){return{modal:"",showPass:!1,activeUser:{id:"",email:"",password:"",name:""}}},created:function(){!0!==this.logged&&this.$router.push("/login"),this.populateActiveUser()},methods:{updateUser:function(){var t=this;i.a.put("https://54.186.69.46:81/users/"+t.user.id,{email:t.activeUser.email,name:t.activeUser.name},{headers:{Authorization:"JWT "+t.user.token}}).then(function(a){t.activeUser.email=a.data.email,t.activeUser.name=a.data.name,t.$emit("account","view")}).catch(function(t){console.log(t)})},updatePass:function(){var t=this;i.a.put("https://54.186.69.46:81/users/"+t.user.id,{password:t.activeUser.password},{headers:{Authorization:"JWT "+t.user.token}}).then(function(a){t.$emit("account","success")}).catch(function(t){console.log(t)})},clearActiveUser:function(){this.activeUser.email="",this.activeUser.name=""},populateActiveUser:function(){var t=this;i.a.get("https://54.186.69.46:81/users/"+t.user.id,{headers:{Authorization:"JWT "+t.user.token}}).then(function(a){t.activeUser.email=a.data.email,t.activeUser.name=a.data.name}).catch(function(t){console.log(t)})},registerUser:function(){var t=this;i.a.post("https://54.186.69.46:81/users",{email:t.activeUser.email,password:t.activeUser.password,name:t.activeUser.name}).then(function(){t.$emit("account","success")}).catch(function(t){console.log(t)})}}},g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main"},["view"===t.accountView?e("div",{staticClass:"accountView"},[e("h2",{staticClass:"name"},[t._v("Name:"),e("br"),t._v(t._s(t.activeUser.name))]),t._v(" "),e("h2",{staticClass:"email"},[t._v("Email: "+t._s(t.activeUser.email))]),t._v(" "),e("button",{staticClass:"accountEditButton",on:{click:function(a){t.$emit("account","edit")}}},[t._v("Edit Account")]),t._v(" "),e("button",{staticClass:"back",on:{click:function(a){t.$emit("account")}}},[t._v("Back")])]):"edit"===t.accountView?e("div",{staticClass:"accountEdit"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.activeUser.name,expression:"activeUser.name"}],staticClass:"nameEdit",attrs:{placeholder:"Name"},domProps:{value:t.activeUser.name},on:{input:function(a){a.target.composing||t.$set(t.activeUser,"name",a.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.activeUser.email,expression:"activeUser.email"}],staticClass:"emailEdit",attrs:{placeholder:"user@example.com"},domProps:{value:t.activeUser.email},on:{input:function(a){a.target.composing||t.$set(t.activeUser,"email",a.target.value)}}}),t._v(" "),e("button",{staticClass:"submitEdit",on:{click:t.updateUser}},[t._v("Submit")]),t._v(" "),e("button",{staticClass:"back",on:{click:function(a){t.$emit("account","view")}}},[t._v("Back")])]):"pass"===t.accountView?e("div",{staticClass:"updatePass"},[t.showPass?t._e():e("input",{directives:[{name:"model",rawName:"v-model",value:t.activeUser.password,expression:"activeUser.password"}],staticClass:"passwordEdit",attrs:{placeholder:"********",type:"password"},domProps:{value:t.activeUser.password},on:{input:function(a){a.target.composing||t.$set(t.activeUser,"password",a.target.value)}}}),t._v(" "),t.showPass?e("input",{directives:[{name:"model",rawName:"v-model",value:t.activeUser.password,expression:"activeUser.password"}],staticClass:"passwordEdit",attrs:{placeholder:"********"},domProps:{value:t.activeUser.password},on:{input:function(a){a.target.composing||t.$set(t.activeUser,"password",a.target.value)}}}):t._e(),t._v(" "),t.showPass?t._e():e("button",{staticClass:"togglePass",on:{click:function(a){t.showPass=!t.showPass}}},[t._v("Show Password")]),t._v(" "),t.showPass?e("button",{staticClass:"togglePass",on:{click:function(a){t.showPass=!t.showPass}}},[t._v("Hide Password")]):t._e(),t._v(" "),e("button",{staticClass:"submitUpdatePass",on:{click:t.updatePass}},[t._v("Submit")]),t._v(" "),e("button",{staticClass:"back",on:{click:function(a){t.$emit("account")}}},[t._v("Back")])]):"success"===t.accountView?e("div",{staticClass:"success"},[e("h1",[t._v("Success!!")]),t._v(" "),e("button",{staticClass:"back",on:{click:function(a){t.$emit("account")}}},[t._v("Back")])]):"analytics"===t.accountView?e("analytics",{staticClass:"analyticsComponent",attrs:{user:t.user},on:{back:function(a){t.$emit("account")}}}):e("div",{staticClass:"accountHome"},[e("h1",[t._v("Account")]),t._v(" "),t.user.admin?e("button",{staticClass:"analytics",on:{click:function(a){t.$emit("account","analytics")}}},[t._v("Analytics")]):t._e(),t._v(" "),e("button",{staticClass:"update",on:{click:function(a){t.$emit("account","pass")}}},[t._v("Update Password")]),t._v(" "),e("button",{staticClass:"viewAccount",on:{click:function(a){t.$emit("account","view")}}},[t._v("View Account")])])],1)},y=[];g._withStripped=!0;var k=!1;var b=function(t){k||e("w2y2")},_=Object(m.a)(f,g,y,!1,b,"data-v-e9d95042",null);_.options.__file="src\\pages\\Account.vue";a.default=_.exports},dqTT:function(t,a,e){var o;o=function(){return function(t){var a={};function e(o){if(a[o])return a[o].exports;var i=a[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,o){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},e.p="",e(e.s=3)}([function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{}},props:{accessToken:{type:String,required:!0},mapOptions:{type:Object,required:!0},navControl:{type:Object,default:function(){return{show:!0,position:"top-right"}}},geolocateControl:{type:Object,default:function(){return{show:!1,position:"top-left",options:{}}}},scaleControl:{type:Object,default:function(){return{show:!1,position:"top-left",options:{}}}},fullscreenControl:{type:Object,default:function(){return{show:!1,position:"top-right"}}}},mounted:function(){var t=this.mapInit();this.addControls(t),this.registerEvents(t)},methods:{mapInit:function(){mapboxgl.accessToken=this.accessToken,this.mapOptions.hasOwnProperty("container")||(this.mapOptions.container="map");var t=new mapboxgl.Map(this.mapOptions);return this.$emit("map-init",t),t},registerEvents:function(t){var a=this;t.on("load",function(){a.$emit("map-load",t)}),t.on("mousemove",function(e){a.$emit("map-mousemove",t,e)}),t.on("click",function(e){a.$emit("map-click",t,e)}),t.on("contextmenu",function(e){a.$emit("map-contextmenu",t,e)}),t.on("resize",function(){a.$emit("map-resize",t)}),t.on("resize",function(e){a.$emit("map-webglcontextlost",t,e)}),t.on("resize",function(e){a.$emit("map-webglcontextrestored",t,e)}),t.on("remove",function(){a.$emit("map-remove",t)}),t.on("sourcedataloading",function(e){a.$emit("map-sourcedataloading",t,e)}),t.on("touchstart",function(e){a.$emit("map-touchstart",t,e)}),t.on("movestart",function(e){a.$emit("map-movestart",t,e)}),t.on("movestart",function(e){a.$emit("map-movestart",t,e)}),t.on("move",function(e){a.$emit("map-move",t,e)}),t.on("moveend",function(e){a.$emit("map-moveend",t,e)}),t.on("error",function(e){a.$emit("map-error",t,e)}),t.on("data",function(e){a.$emit("map-data",t,e)}),t.on("styledata",function(e){a.$emit("map-styledata",t,e)}),t.on("mouseup",function(e){a.$emit("map-mouseup",t,e)}),t.on("touchcancel",function(e){a.$emit("map-touchcancel",t,e)}),t.on("sourcedata",function(e){a.$emit("map-sourcedata",t,e)}),t.on("dataloading",function(e){a.$emit("map-dataloading",t,e)}),t.on("styledataloading",function(e){a.$emit("map-styledataloading",t,e)}),t.on("dblclick",function(e){a.$emit("map-dblclick",t,e)}),t.on("render",function(){a.$emit("map-render",t)}),t.on("mouseout",function(e){a.$emit("map-mouseout",t,e)}),t.on("mousedown",function(e){a.$emit("map-mousedown",t,e)}),t.on("touchend",function(e){a.$emit("map-touchend",t,e)}),t.on("zoomstart",function(e){a.$emit("map-zoomstart",t,e)}),t.on("zoomend",function(e){a.$emit("map-zoomend",t,e)}),t.on("zoom",function(e){a.$emit("map-zoom",t,e)}),t.on("boxzoomcancel",function(e){a.$emit("map-boxzoomcancel",t,e)}),t.on("boxzoomend",function(e){a.$emit("map-boxzoomend",t,e)}),t.on("boxzoomstart",function(e){a.$emit("map-boxzoomstart",t,e)}),t.on("rotatestart",function(e){a.$emit("map-rotatestart",t,e)}),t.on("rotate",function(e){a.$emit("map-rotate",t,e)}),t.on("rotateend",function(e){a.$emit("map-rotateend",t,e)}),t.on("dragend",function(e){a.$emit("map-dragend",t,e)}),t.on("drag",function(e){a.$emit("map-drag",t,e)}),t.on("dragstart",function(e){a.$emit("map-dragstart",t,e)}),t.on("pitch",function(e){a.$emit("map-pitch",t,e)}),t.on("pitchstart",function(e){a.$emit("map-pitchstart",t,e)}),t.on("pitchend",function(e){a.$emit("map-pitchend",t,e)})},addControls:function(t){if(this.navControl.show){var a=new mapboxgl.NavigationControl;t.addControl(a,this.navControl.position)}if(this.geolocateControl.show){var e=new mapboxgl.GeolocateControl(this.geolocateControl.options);t.addControl(e,this.geolocateControl.position)}if(this.scaleControl.show){var o=new mapboxgl.ScaleControl(this.scaleControl.options);t.addControl(o,this.scaleControl.position)}if(this.fullscreenControl.show){var i=new mapboxgl.FullscreenControl;t.addControl(i,this.fullscreenControl.position)}}}}},function(t,a){t.exports=function(t,a,e,o,i,s){var n,c=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(n=t,c=t.default);var d,l="function"==typeof c?c.options:c;if(a&&(l.render=a.render,l.staticRenderFns=a.staticRenderFns,l._compiled=!0),e&&(l.functional=!0),i&&(l._scopeId=i),s?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=d):o&&(d=o),d){var u=l.functional,m=u?l.render:l.beforeCreate;u?(l._injectStyles=d,l.render=function(t,a){return d.call(a),m(t,a)}):l.beforeCreate=m?[].concat(m,d):[d]}return{esModule:n,exports:c,options:l}}},function(t,a,e){"use strict";var o=function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.mapOptions.hasOwnProperty("container")?this.mapOptions.container:"map"}})};o._withStripped=!0;var i={render:o,staticRenderFns:[]};a.a=i},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e(0),i=e.n(o),s=e(2),n=e(1)(i.a,s.a,!1,null,null,null);n.options.__file="src/components/Mapbox.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.default=n.exports}])},t.exports=o()},w2y2:function(t,a,e){var o=e("b0IF");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e("rjj0").default)("449351b1",o,!1,{})},yY6l:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".analytics[data-v-510b3adf]{display:-ms-grid;display:grid;width:100%;margin:0;-ms-grid-rows:(100px)[5];grid-template-rows:repeat(5,100px);-ms-grid-columns:1fr 1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr 1fr}.fixed[data-v-510b3adf]{position:fixed}#map[data-v-510b3adf]{width:100%;height:260px;bottom:0;left:0;right:0;position:fixed!important}.timeTab[data-v-510b3adf]{-ms-grid-column:1;grid-column-start:1;grid-column-end:3}.mileTab[data-v-510b3adf],.timeTab[data-v-510b3adf]{text-align:center;background-color:#323d38;height:30px;color:#fff;width:80%;margin-left:10%;line-height:25px;border-bottom-left-radius:8px;border-bottom-right-radius:8px}.mileTab[data-v-510b3adf]{-ms-grid-column:3;grid-column-start:3;grid-column-end:5}.globalSearch[data-v-510b3adf]{-ms-grid-row:4;grid-row:4;-ms-grid-column:1;grid-column-start:1;grid-column-end:5;width:100%;height:40px;border:1px solid #000}.graphsPane[data-v-510b3adf]{margin-top:10px;-ms-grid-row:1;grid-row-start:1;grid-row-end:3;-ms-grid-column:1;grid-column-start:1;grid-column-end:5;border:3px solid #c90c2e;border-radius:5px;width:96%;margin-left:2%}.modals[data-v-510b3adf]{-ms-grid-row:4;grid-row:4;margin-top:-70px;-ms-grid-column:1;grid-column-start:1;grid-column-end:5;width:90%;margin-left:5%}.back[data-v-510b3adf]{margin-top:5px;height:30px;font-size:1.2em;font-weight:400}.back[data-v-510b3adf],.mapBack[data-v-510b3adf]{width:20%;color:#fff;background-color:#c90c2e;border:none;border-radius:5px}.mapBack[data-v-510b3adf]{padding:4px;position:fixed}h4[data-v-510b3adf]{font-size:1em;color:#c90c2e;line-height:10px;margin-left:5%}h5[data-v-510b3adf]{font-size:1em;height:20px;padding:0}h3[data-v-510b3adf]{font-size:1em;margin:0;margin-left:5%}input[data-v-510b3adf]{border:1px solid #000;width:100%;margin-top:10px;height:40px;padding-left:5%;margin-bottom:5%}.user[data-v-510b3adf]{width:100%;border-bottom:1px solid #000;padding-left:5%;height:30px}.clocks[data-v-510b3adf],.trips[data-v-510b3adf]{width:100%;border:1px solid #000;padding-left:5%}",""])}});