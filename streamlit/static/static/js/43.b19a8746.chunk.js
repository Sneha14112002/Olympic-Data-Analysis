(this["webpackJsonpstreamlit-browser"]=this["webpackJsonpstreamlit-browser"]||[]).push([[43],{6720:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return F}));var n=a(6),i=a(16),r=a(17),o=a(274),s=a(35),l=a(36),d=a(0),u=a.n(d),c=a(47),m=a(6736),p=a(37),h=a(3981),f=a(227),b=a(18),g=a(42),v=a(98),y=a.n(v),T=a(156),j=a(157),x=a(80),k=a(11),V=a.n(k),O=a(32),w=V()("div",{target:"e88czh83"})((function(e){var t=e.disabled,a=e.theme;return{alignItems:"center",backgroundColor:t?a.colors.gray:a.colors.primary,borderTopLeftRadius:"100%",borderTopRightRadius:"100%",borderBottomLeftRadius:"100%",borderBottomRightRadius:"100%",borderTopStyle:"none",borderBottomStyle:"none",borderRightStyle:"none",borderLeftStyle:"none",boxShadow:"none",display:"flex",height:a.radii.xl,justifyContent:"center",width:a.radii.xl,":focus":{boxShadow:"0 0 0 0.2rem ".concat(Object(O.transparentize)(a.colors.primary,.5)),outline:"none"}}}),""),R=V()("div",{target:"e88czh82"})((function(e){var t=e.disabled,a=e.theme;return{fontFamily:a.fonts.monospace,fontSize:a.fontSizes.sm,paddingBottom:a.spacing.twoThirdsSmFont,color:t?a.colors.gray:a.colors.primary,top:"-22px",position:"absolute",whiteSpace:"nowrap",backgroundColor:a.colors.transparent,lineHeight:a.lineHeights.base,fontWeight:"normal"}}),""),S=V()("div",{target:"e88czh81"})((function(e){var t=e.theme;return{paddingBottom:t.spacing.none,paddingLeft:t.spacing.none,paddingRight:t.spacing.none,paddingTop:t.spacing.twoThirdsSmFont,justifyContent:"space-between",alignItems:"center",display:"flex"}}),""),D=V()("div",{target:"e88czh80"})((function(e){var t=e.disabled,a=e.theme;return{lineHeight:a.lineHeights.base,fontWeight:"normal",fontSize:a.fontSizes.sm,fontFamily:a.fonts.monospace,color:t?a.colors.fadedText40:"inherit"}}),""),C=a(5),B=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).formClearHelper=new f.b,r.state=void 0,r.sliderRef=u.a.createRef(),r.thumbValueRef=u.a.createRef(),r.commitWidgetValueDebounced=void 0,r.commitWidgetValue=function(e){r.props.widgetMgr.setDoubleArrayValue(r.props.element,r.state.value,e)},r.onFormCleared=function(){r.setState({value:r.props.element.default},(function(){return r.commitWidgetValue({fromUi:!0})}))},r.handleChange=function(e){var t=e.value;r.setState({value:t},(function(){return r.commitWidgetValueDebounced({fromUi:!0})}))},r.renderThumb=u.a.forwardRef((function(e,t){var a=e.$value,i=e.$thumbIndex,o=r.formatValue(a[i]),s=Object(c.pick)(e,["role","style","aria-valuemax","aria-valuemin","aria-valuenow","tabIndex","onKeyUp","onKeyDown","onMouseEnter","onMouseLeave","draggable"]);return r.props.element.options.length>0||r.isDateTimeType(),r.thumbValueAlignment(),Object(C.jsx)(w,Object(n.a)(Object(n.a)({},s),{},{disabled:e.$disabled,ref:t,"aria-valuetext":o,children:Object(C.jsx)(R,{className:"StyledThumbValue","data-testid":"stThumbValue",disabled:e.$disabled,ref:r.thumbValueRef,children:o})}))})),r.renderTickBar=function(){var e=r.props,t=e.disabled,a=e.element,n=a.max,i=a.min;return Object(C.jsxs)(S,{"data-testid":"stTickBar",children:[Object(C.jsx)(D,{disabled:t,"data-testid":"stTickBarMin",children:r.formatValue(i)}),Object(C.jsx)(D,{disabled:t,"data-testid":"stTickBarMax",children:r.formatValue(n)})]})},r.commitWidgetValueDebounced=Object(g.a)(200,r.commitWidgetValue.bind(Object(o.a)(r))),r.state={value:r.initialValue},r}return Object(r.a)(a,[{key:"initialValue",get:function(){var e=this.props.widgetMgr.getDoubleArrayValue(this.props.element);return void 0!==e?e:this.props.element.default}},{key:"componentDidMount",value:function(){this.thumbValueAlignment(),this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}},{key:"componentDidUpdate",value:function(){this.maybeUpdateFromProtobuf()}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maybeUpdateFromProtobuf",value:function(){this.props.element.setValue&&this.updateFromProtobuf()}},{key:"updateFromProtobuf",value:function(){var e=this,t=this.props.element.value;this.props.element.setValue=!1,this.setState({value:t},(function(){e.commitWidgetValue({fromUi:!1})}))}},{key:"value",get:function(){var e=this.props.element,t=e.min,a=e.max,n=this.state.value,i=n[0],r=n.length>1?n[1]:n[0];return i>r&&(i=r),i<t&&(i=t),i>a&&(i=a),r<t&&(r=t),r>a&&(r=a),n.length>1?[i,r]:[i]}},{key:"isDateTimeType",value:function(){var e=this.props.element.dataType;return e===b.q.DataType.DATETIME||e===b.q.DataType.DATE||e===b.q.DataType.TIME}},{key:"formatValue",value:function(e){var t=this.props.element,a=t.format,n=t.options;return this.isDateTimeType()?y.a.utc(e/1e3).format(a):n.length>0?Object(h.sprintf)(a,n[e]):Object(h.sprintf)(a,e)}},{key:"thumbValueAlignment",value:function(){var e=this.sliderRef.current,t=this.thumbValueRef.current;if(e&&t){var a=e.getBoundingClientRect(),n=t.getBoundingClientRect();t.style.left=n.left<a.left?"0":"",t.style.right=n.right>a.right?"0":""}}},{key:"render",value:function(){var e=this.props,t=e.disabled,a=e.element,i=e.theme,r=e.width,o=e.widgetMgr,s=i.colors,l=i.fonts,d=i.fontSizes,u=i.spacing,c={width:r};return this.formClearHelper.manageFormClearListener(o,a.formId,this.onFormCleared),Object(C.jsxs)("div",{ref:this.sliderRef,className:"stSlider",style:c,children:[Object(C.jsx)(T.d,{label:a.label,disabled:t,children:a.help&&Object(C.jsx)(T.b,{children:Object(C.jsx)(j.a,{content:a.help,placement:x.b.TOP_RIGHT})})}),Object(C.jsx)(m.a,{min:a.min,max:a.max,step:a.step,value:this.value,onChange:this.handleChange,disabled:t,overrides:{Root:{style:{paddingTop:u.twoThirdsSmFont}},Thumb:this.renderThumb,Tick:{style:{fontFamily:l.monospace,fontSize:d.sm}},Track:{style:{paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:u.twoThirdsSmFont}},InnerTrack:{style:function(e){var t=e.$disabled;return Object(n.a)({height:"4px"},t?{background:s.transparentDarkenedBgMix60}:{})}},TickBar:this.renderTickBar}})]})}}]),a}(u.a.PureComponent),F=Object(p.withTheme)(B)}}]);