(this["webpackJsonpdatepicker-react"]=this["webpackJsonpdatepicker-react"]||[]).push([[0],{135:function(t,e,a){t.exports=a(264)},140:function(t,e,a){},143:function(t,e,a){},146:function(t,e,a){},158:function(t,e){},261:function(t,e,a){},262:function(t,e,a){},264:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),s=a(25),r=a.n(s),o=(a(140),a(12)),m=a(13),d=a(14),c=a(15),l=a(2),h=a.n(l),u=a(5),D=(a(143),function(t){Object(c.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.onHeaderHeightInit)(this.headerElement.clientHeight)}},{key:"render",value:function(){var t=this,e=this.props,a=e.startDate,n=e.time_start,s=e.endDate,r=e.time_end,o=e.onReset;return i.a.createElement("div",{className:"Datepicker-header",ref:function(e){t.headerElement=e}},i.a.createElement("div",{className:"Datepicker-header__reset"},i.a.createElement("button",{className:"Datepicker__button-reset",onClick:o,type:"button"},"Reset")),u.isMobile&&i.a.createElement("div",{className:"Datepicker-header__wrapp"},i.a.createElement("div",{className:"Datepicker-header__item"},i.a.createElement("div",{className:"Datepicker-header__date"},a?h()(a).format("ddd, D MMMM"):"Start date"),i.a.createElement("div",{className:"Datepicker-header__time"},n?h()(n,"x").format("H:mm"):null)),i.a.createElement("div",{className:"Datepicker-header__delimiter"}),i.a.createElement("div",{className:"Datepicker-header__item"},i.a.createElement("div",{className:"Datepicker-header__item"},i.a.createElement("div",{className:"Datepicker-header__date"},s?h()(s).format("ddd, D MMMM"):"End date"),i.a.createElement("div",{className:"Datepicker-header__time"},r?h()(r,"x").format("H:mm"):null)))))}}]),a}(n.Component)),f=a(68),p=(a(146),function(t){Object(c.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).handleOnChangeStart=function(t){var e=n.props.onInitStartTime,a=h()(t.from,"x").format("H:mm"),i=n.timerangeItem.clientWidth;n.setState({class:"is-changing",sliderWidth:i,end_start:h()("2020-06-05 ".concat(a),"YYYY-MM-DD HH:mm")}),e(t.from)},n.handleOnChangeEnd=function(t){var e=n.props.onInitEndTime;n.setState({classEnd:"is-changing"}),e(t.from)},n.handleOnFinish=function(t){var e=n.props,a=e.startDate,i=e.endDate,s=e.onInitEndTime,r=e.time_end,o=e.time_start;if(n.setState({class:null}),a&&i){var m=h()(a).format("MM-DD-YYYY"),d=h()(i).format("MM-DD-YYYY");h()(d).isAfter(m)?n.ionSliderEnd.update({min:n.state.start.format("x"),max:n.state.end.format("x"),step:18e5,hide_min_max:!0}):r?"object"===typeof r?o>Number(r.format("x"))&&(s(n.state.end_start),n.ionSliderEnd.update({min:n.state.start.format("x"),max:n.state.end.format("x"),from:n.state.end_start.format("x"),step:18e5,hide_min_max:!0})):o>Number(r)&&(s(n.state.end_start),n.ionSliderEnd.update({min:n.state.start.format("x"),max:n.state.end.format("x"),from:n.state.end_start.format("x"),step:18e5,hide_min_max:!0})):(s(n.state.end_start),n.ionSliderEnd.update({min:n.state.start.format("x"),max:n.state.end.format("x"),from:n.state.end_start.format("x"),step:18e5,hide_min_max:!0}))}else a&&i||(r?"object"===typeof r?o>Number(r.format("x"))&&(s(n.state.end_start),n.ionSliderEnd.update({min:n.state.start.format("x"),max:n.state.end.format("x"),from:n.state.end_start.format("x"),step:18e5,hide_min_max:!0})):o>Number(r)&&(s(n.state.end_start),n.ionSliderEnd.update({min:n.state.start.format("x"),max:n.state.end.format("x"),from:n.state.end_start.format("x"),step:18e5,hide_min_max:!0})):(s(n.state.end_start),n.ionSliderEnd.update({min:n.state.start.format("x"),max:n.state.end.format("x"),from:n.state.end_start.format("x"),step:18e5,hide_min_max:!0})))},n.handleOnFinishEnd=function(){n.setState({classEnd:null})},n.prettify=function(t){return h()(t,"x").format("H:mm")},n.onClick=function(){var t=n.props,e=t.startDate,a=t.endDate,i=t.time_start,s=t.time_end;u.isMobile?e&&a?alert("".concat(h()(e).format("D MMMM"),", ").concat(h()(i,"x").format("H:mm")," - ").concat(h()(a).format("D MMMM"),", ").concat(h()(s,"x").format("H:mm"))):alert("Select pickup and return date"):e&&a?alert("".concat(h()(e).format("D MMMM")," - ").concat(h()(a).format("D MMMM"))):alert("Select pickup and return date")},n.state={time_end:null,start:h()("2020-06-05 00:00","YYYY-MM-DD HH:mm"),end:h()("2020-06-05 23:30","YYYY-MM-DD HH:mm"),end_start:h()("2020-06-05 00:00","YYYY-MM-DD HH:mm"),end_end:h()("2020-06-05 23:30","YYYY-MM-DD HH:mm"),end_selected:null,class:null},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.onBottomHeightInit)(this.bottomElement.clientHeight)}},{key:"componentWillReceiveProps",value:function(t){if(t.startDate!==this.props.startDate||t.endDate!==this.props.endDate){var e=t.startDate,a=t.endDate,n=this.props.onResetTime,i=h()(e).format("MM-DD-YYYY"),s=h()(a).format("MM-DD-YYYY");!h()(s).isAfter(i)&&u.isMobile&&(n(),this.ionSliderStart.update({min:this.state.start.format("x"),max:this.state.end.format("x"),from:this.state.start.format("x"),step:18e5,hide_min_max:!0}),this.ionSliderEnd.update({min:this.state.start.format("x"),max:this.state.end.format("x"),from:this.state.start.format("x"),step:18e5,hide_min_max:!0}))}}},{key:"render",value:function(){var t=this,e=this.props,a=e.daySize,n=e.mode;return i.a.createElement("div",{className:"Datepicker-bottom",ref:function(e){t.bottomElement=e}},u.isMobile&&"mobile"===n&&i.a.createElement("div",{className:"Timerange"},i.a.createElement("div",{className:"Timerange-item"},i.a.createElement("div",{className:"Timerange-item__title",style:{paddingLeft:a/2.5}},"Start"),i.a.createElement("div",{ref:function(e){return t.timerangeItem=e},className:"Timerange-item__slider ".concat(this.state.class&&this.state.class)},i.a.createElement(f.a,{ref:function(e){return t.ionSliderStart=e},min:parseFloat(this.state.start.format("x")),max:parseFloat(this.state.end.format("x")),step:18e5,hide_min_max:!0,prettify:this.prettify,onChange:this.handleOnChangeStart,onFinish:this.handleOnFinish}))),i.a.createElement("div",{className:"Timerange-item"},i.a.createElement("div",{className:"Timerange-item__title",style:{paddingLeft:a/2.5}},"End"),i.a.createElement("div",{className:"Timerange-item__slider ".concat(this.state.classEnd&&this.state.classEnd)},i.a.createElement(f.a,{ref:function(e){return t.ionSliderEnd=e},min:parseFloat(this.state.end_start.format("x")),max:parseFloat(this.state.end_end.format("x")),step:18e5,hide_min_max:!0,prettify:this.prettify,onChange:this.handleOnChangeEnd,onFinish:this.handleOnFinishEnd})))),u.isMobile&&"mobile"===n&&i.a.createElement("button",{className:"Datepicker-save",onClick:this.onClick,type:"button"},"Save"))}}]),a}(n.Component)),_=(a(147),a(31)),g=(a(260),a(261),function(t){Object(c.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).renderDay=function(t){var e=n.props.daySize;return i.a.createElement("div",{className:"CalendarDay__item",style:{height:Math.ceil(e)}},t.format("D"))},n.lookupDay=function(t){var e=n.props.car_prices[t.format("YYYY-MM-DD")];return void 0===e&&(e=null),e},n.renderDayDesktop=function(t){return i.a.createElement("div",{className:"CalendarDay__item"},t.format("D"))},n.renderDayDesktopWithPrice=function(t){var e=n.lookupDay(t);return i.a.createElement("div",{className:"CalendarDay__item"},t.format("D"),null!==e&&i.a.createElement("span",{className:"CalendarDay_tooltip"},null===e?e:"$"+e))},n.isDayBlocked=function(t){var e=!1;return"unavailable"===n.props.car_availability[t.format("YYYY-MM-DD")]&&(e=!0),e},n.state={height:0,headerDay:0,selectOnlyStart:!1,hideDatePicker:!1,calendarFocused:!1},n}return Object(m.a)(a,[{key:"componentWillReceiveProps",value:function(t){t.startDate&&!t.endDate?this.setState({selectOnlyStart:!0}):t.startDate||t.endDate?t.startDate&&t.endDate&&this.setState({selectOnlyStart:!1}):this.setState({selectOnlyStart:!1})}},{key:"render",value:function(){var t,e=this.props,a=e.startDate,n=e.endDate,s=e.focusedInput,r=e.daySize,o=e.onDatesChange,m=e.onFocusChange,d=e.headerHeight,c=e.bottomHeight,l=e.mode;return d>0&&c>0&&(t=window.innerHeight-d-c-15),i.a.createElement("div",{className:"Datepicker-wrapp ".concat(this.state.selectOnlyStart?"is-selecting-start":null),style:u.isMobile?{height:t}:null},u.isMobile&&"mobile"===l&&i.a.createElement(_.DayPickerRangeController,{startDate:a,endDate:n,onDatesChange:o,focusedInput:s,onFocusChange:m,orientation:"verticalScrollable",numberOfMonths:12,renderDayContents:this.renderDay,noNavButtons:!0,noBorder:!0,minimumNights:0,daySize:r,hideKeyboardShortcutsPanel:!0,isOutsideRange:function(t){return!Object(_.isInclusivelyAfterDay)(t,h()())}}),u.isBrowser&&"desktop"===l?i.a.createElement(_.DateRangePicker,{startDate:a,endDate:n,startDateId:"start",endDateId:"end",onDatesChange:o,focusedInput:s,onFocusChange:m,renderDayContents:this.renderDayDesktop,minimumNights:0,numberOfMonths:2,noBorder:!0,hideKeyboardShortcutsPanel:!0,isOutsideRange:function(t){return!Object(_.isInclusivelyAfterDay)(t,h()())}}):null,u.isBrowser&&"desktopPrice"===l?i.a.createElement(_.DateRangePicker,{startDate:a,endDate:n,startDateId:"start",endDateId:"end",onDatesChange:o,focusedInput:s,onFocusChange:m,renderDayContents:this.renderDayDesktopWithPrice,minimumNights:0,numberOfMonths:2,noBorder:!0,hideKeyboardShortcutsPanel:!0,isOutsideRange:function(t){return!Object(_.isInclusivelyAfterDay)(t,h()())},isDayBlocked:this.isDayBlocked}):null)}}]),a}(n.Component)),M=function(t){Object(c.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).onReset=function(){n.setState({startDate:null,endDate:null,time_start:null,time_end:null})},n.onResetTime=function(){n.setState({time_start:null,time_end:null})},n.onDatesChange=function(t){var e=t.startDate,a=t.endDate;n.setState({startDate:e,endDate:a})},n.onFocusChange=function(t){return n.setState({focusedInput:u.isMobile?t||"startDate":t})},n.onHeaderHeightInit=function(t){n.setState({headerHeight:t})},n.onBottomHeightInit=function(t){n.setState({bottomHeight:t})},n.onInitStartTime=function(t){n.setState({time_start:t})},n.onInitEndTime=function(t){n.setState({time_end:t})},n.state={headerHeight:0,bottomHeight:0,minDate:h()(),startDate:null,endDate:null,focusedInput:u.isMobile?"startDate":null,time_start:null,calendarFocused:!1,time_end:null,daySize:window.innerWidth/7,start:h()("2020-06-05 00:00","YYYY-MM-DD HH:mm"),end:h()("2020-06-05 23:30","YYYY-MM-DD HH:mm"),end_start:h()("2020-06-05 00:00","YYYY-MM-DD HH:mm"),end_end:h()("2020-06-05 23:30","YYYY-MM-DD HH:mm"),classStart:null},n}return Object(m.a)(a,[{key:"render",value:function(){var t=this.state,e=t.startDate,a=t.endDate,n=t.focusedInput;return i.a.createElement("div",{className:"Datepicker",style:u.isMobile?{height:window.innerHeight,paddingTop:this.state.headerHeight+15}:null},i.a.createElement(D,{onReset:this.onReset,onHeaderHeightInit:this.onHeaderHeightInit,startDate:e,time_start:this.state.time_start,endDate:a,time_end:this.state.time_end}),i.a.createElement(g,{headerHeight:this.state.headerHeight,bottomHeight:this.state.bottomHeight,startDate:e,daySize:this.state.daySize,endDate:a,mode:"desktop",onDatesChange:this.onDatesChange,onFocusChange:this.onFocusChange,homeDatePicker:this.state.homeDatePicker,cardDatePicker:this.state.cardDatePicker,focusedInput:n}),i.a.createElement(p,{daySize:this.state.daySize,onResetTime:this.onResetTime,time_start:this.state.time_start,time_end:this.state.time_end,startDate:e,endDate:a,datePickerMode:this.state.datePickerMode,onChangeDatePickerMode:this.onChangeDatePickerMode,onInitStartTime:this.onInitStartTime,onInitEndTime:this.onInitEndTime,onBottomHeightInit:this.onBottomHeightInit}))}}]),a}(n.Component),b=function(t){Object(c.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).onReset=function(){n.setState({startDate:null,endDate:null,time_start:null,time_end:null})},n.onResetTime=function(){n.setState({time_start:null,time_end:null})},n.onDatesChange=function(t){var e=t.startDate,a=t.endDate;n.setState({startDate:e,endDate:a})},n.onFocusChange=function(t){return n.setState({focusedInput:u.isMobile?t||"startDate":t})},n.onHeaderHeightInit=function(t){n.setState({headerHeight:t})},n.onBottomHeightInit=function(t){n.setState({bottomHeight:t})},n.onInitStartTime=function(t){n.setState({time_start:t})},n.onInitEndTime=function(t){n.setState({time_end:t})},n.state={headerHeight:0,bottomHeight:0,minDate:h()(),startDate:null,endDate:null,focusedInput:u.isMobile?"startDate":null,time_start:null,calendarFocused:!1,time_end:null,daySize:window.innerWidth/7,start:h()("2020-06-05 00:00","YYYY-MM-DD HH:mm"),end:h()("2020-06-05 23:30","YYYY-MM-DD HH:mm"),end_start:h()("2020-06-05 00:00","YYYY-MM-DD HH:mm"),end_end:h()("2020-06-05 23:30","YYYY-MM-DD HH:mm"),classStart:null,car_availability:null,car_prices:null},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://run.mocky.io/v3/d1b5c91e-2637-4d86-b653-db32c1081724").then((function(t){return t.json()})).then((function(e){t.setState({car_availability:e.availability,car_prices:e.prices})}),(function(t){console.log(t)}))}},{key:"render",value:function(){var t=this.state,e=t.startDate,a=t.endDate,n=t.focusedInput;return i.a.createElement("div",{className:"Datepicker",style:u.isMobile?{height:window.innerHeight,paddingTop:this.state.headerHeight+15}:null},i.a.createElement(D,{onReset:this.onReset,onHeaderHeightInit:this.onHeaderHeightInit,startDate:e,time_start:this.state.time_start,endDate:a,time_end:this.state.time_end}),this.state.car_availability?i.a.createElement(g,{headerHeight:this.state.headerHeight,bottomHeight:this.state.bottomHeight,startDate:e,daySize:this.state.daySize,endDate:a,mode:"desktopPrice",car_availability:this.state.car_availability,car_prices:this.state.car_prices,onDatesChange:this.onDatesChange,onFocusChange:this.onFocusChange,homeDatePicker:this.state.homeDatePicker,cardDatePicker:this.state.cardDatePicker,focusedInput:n}):null,i.a.createElement(p,{daySize:this.state.daySize,onResetTime:this.onResetTime,time_start:this.state.time_start,time_end:this.state.time_end,startDate:e,endDate:a,datePickerMode:this.state.datePickerMode,onChangeDatePickerMode:this.onChangeDatePickerMode,onInitStartTime:this.onInitStartTime,onInitEndTime:this.onInitEndTime,onBottomHeightInit:this.onBottomHeightInit}))}}]),a}(n.Component),H=function(t){Object(c.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).onReset=function(){n.setState({startDate:null,endDate:null,time_start:null,time_end:null})},n.onResetTime=function(){n.setState({time_start:null,time_end:null})},n.onDatesChange=function(t){var e=t.startDate,a=t.endDate;n.setState({startDate:e,endDate:a})},n.onFocusChange=function(t){return n.setState({focusedInput:u.isMobile?t||"startDate":t})},n.onHeaderHeightInit=function(t){n.setState({headerHeight:t})},n.onBottomHeightInit=function(t){n.setState({bottomHeight:t})},n.onInitStartTime=function(t){n.setState({time_start:t})},n.onInitEndTime=function(t){n.setState({time_end:t})},n.state={headerHeight:0,bottomHeight:0,minDate:h()(),startDate:null,endDate:null,focusedInput:u.isMobile?"startDate":null,time_start:null,calendarFocused:!1,time_end:null,daySize:window.innerWidth/7,start:h()("2020-06-05 00:00","YYYY-MM-DD HH:mm"),end:h()("2020-06-05 23:30","YYYY-MM-DD HH:mm"),end_start:h()("2020-06-05 00:00","YYYY-MM-DD HH:mm"),end_end:h()("2020-06-05 23:30","YYYY-MM-DD HH:mm"),classStart:null},n}return Object(m.a)(a,[{key:"render",value:function(){var t=this.state,e=t.startDate,a=t.endDate,n=t.focusedInput;return i.a.createElement("div",{className:"Datepicker",style:u.isMobile?{height:window.innerHeight,paddingTop:this.state.headerHeight+15}:null},i.a.createElement(D,{onReset:this.onReset,onHeaderHeightInit:this.onHeaderHeightInit,startDate:e,time_start:this.state.time_start,endDate:a,time_end:this.state.time_end}),i.a.createElement(g,{headerHeight:this.state.headerHeight,bottomHeight:this.state.bottomHeight,startDate:e,daySize:this.state.daySize,endDate:a,mode:"mobile",onDatesChange:this.onDatesChange,onFocusChange:this.onFocusChange,homeDatePicker:this.state.homeDatePicker,cardDatePicker:this.state.cardDatePicker,focusedInput:n}),i.a.createElement(p,{daySize:this.state.daySize,onResetTime:this.onResetTime,time_start:this.state.time_start,time_end:this.state.time_end,startDate:e,endDate:a,mode:"mobile",datePickerMode:this.state.datePickerMode,onChangeDatePickerMode:this.onChangeDatePickerMode,onInitStartTime:this.onInitStartTime,onInitEndTime:this.onInitEndTime,onBottomHeightInit:this.onBottomHeightInit}))}}]),a}(n.Component),y=a(265),v=(a(262),function(t){Object(c.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){u.isMobile&&document.getElementsByTagName("html")[0].classList.add("is-mobile-device"),u.isBrowser&&document.getElementsByTagName("html")[0].classList.add("is-desktop-device")}},{key:"render",value:function(){var t=this.props.history;return i.a.createElement("div",{className:"App"},i.a.createElement(y.d,null,i.a.createElement(y.b,{history:t,path:"/main",component:M}),i.a.createElement(y.b,{history:t,path:"/profile",component:b}),i.a.createElement(y.b,{history:t,path:"/mobile",component:H}),i.a.createElement(y.a,{from:"/",to:"/main"})))}}]),a}(n.Component)),S=Object(y.e)(v),Y=a(22);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=Object(Y.a)();r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y.c,{history:E},i.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.23fdef01.chunk.js.map