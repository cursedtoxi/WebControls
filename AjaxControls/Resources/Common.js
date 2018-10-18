Type.registerNamespace("Aurigma.GraphicsMill"),Aurigma.GraphicsMill.Utils=function(){throw Error.notImplemented();},Aurigma.GraphicsMill.Utils.round3=function(n){return Math.round(n*1e3)/1e3},Aurigma.GraphicsMill.Utils.createBoundedWrapper=function(n,t,i){return function(){var r=i===undefined?arguments:i;return t.apply(n,r)}},Aurigma.GraphicsMill.Utils.cursorToCss=function(n){var t=Aurigma.GraphicsMill.Utils._cursorCss;return t==undefined&&(t=["default","nw-resize","ne-resize","sw-resize","se-resize","n-resize","s-resize","w-resize","e-resize","move","crosshair","url('"+Aurigma.GraphicsMill.Resources.getUrl("ZoomIn.cur")+"'),-moz-zoom-in","url('"+Aurigma.GraphicsMill.Resources.getUrl("ZoomOut.cur")+"'),-moz-zoom-out","url('"+Aurigma.GraphicsMill.Resources.getUrl("Pan.cur")+"'),move","pointer"],Aurigma.GraphicsMill.Utils._cursorCss=t),t[n]},Aurigma.GraphicsMill.Utils.getEventPath=function(n){var r,i,t;if(!(n instanceof UIEvent))throw new Error("Unexpected event type");if(n.path!=null)return r=Array.isArray(n.path)?n.path:Array.prototype.slice.call(n.path),r.filter(function(n){return n instanceof Element});i=[],t=n.target,t instanceof Element||console==null||console.log("unexpected event target",t);do i.push(t),t=t.parentElement;while(t!=null&&t!==n.currentTarget);return i},Aurigma.GraphicsMill.Utils.isEventPathContainsClass=function(n,t){var i,r;if(n instanceof UIEvent)i=n;else if(n instanceof Sys.UI.DomEvent)i=n.rawEvent;else if(n.originalEvent instanceof UIEvent)i=n.originalEvent;else throw new Error("Unexpected event type");return r=Aurigma.GraphicsMill.Utils.getEventPath(i),r.some(function(n){return Sys.UI.DomElement.containsCssClass(n,t)})?!0:!1},Aurigma.GraphicsMill.Utils.Platform={IsIos:function(){return!!navigator.userAgent.match(/(iPod|iPhone|iPad)/)},IosMajorVersion:function(){var t=navigator.userAgent,n=t.indexOf("OS ");if(n>-1)return Number(t.substr(n+3,3).replace("_",".").charAt(0))},IsAndroid:function(){return!!navigator.userAgent.toLowerCase().match(/(android)/)},IsTouchDevice:function(){return Aurigma.GraphicsMill.Utils.Platform.IsIos()||Aurigma.GraphicsMill.Utils.Platform.IsAndroid()||Aurigma.GraphicsMill.Utils.Platform.IsTouchIE()},IsNativeAndroidBrowser:function(){var n=navigator.userAgent;return n.indexOf("Mozilla/5.0")>-1&&n.indexOf("Android ")>-1&&n.indexOf("AppleWebKit")>-1&&!(n.indexOf("Chrome")>-1)},IsGoogleChrome:function(){return typeof window.chrome=="object"},IsSafari:function(){return navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1},IsTouchIE:function(){return navigator.userAgent.indexOf("Trident")!=-1&&navigator.userAgent.indexOf("Touch")!=-1},IsIE:function(){return Sys.Browser.agent===Sys.Browser.InternetExplorer?!0:Sys.Browser.agent==null?navigator.userAgent.indexOf("Trident")!=-1:!1},IsEdge:function(){return navigator.userAgent.indexOf("Edge")!=-1}},Aurigma.GraphicsMill.Utils.registerClass("Aurigma.GraphicsMill.Utils"),Aurigma.GraphicsMill.Rectangle=function(n,t,i,r){this.x=n,this.y=t,this.width=i,this.height=r},Aurigma.GraphicsMill.Rectangle.prototype={clone:function(){return new Aurigma.GraphicsMill.Rectangle(this.x,this.y,this.width,this.height)},round:function(){return new Aurigma.GraphicsMill.Rectangle(Math.round(this.x),Math.round(this.y),Math.round(this.width),Math.round(this.height))},equals:function(n){return this.x==n.x&&this.y==n.y&&this.width==n.width&&this.height==n.height},contains:function(n){return this.x<=n.x&&this.y<=n.y&&this.x+this.width>n.x&&this.y+this.height>n.y},intersectsWith:function(n){return this.contains(new Aurigma.GraphicsMill.PointF(n.x,n.y))||this.contains(new Aurigma.GraphicsMill.PointF(n.x+n.width-1,n.y+n.height-1))||n.contains(new Aurigma.GraphicsMill.PointF(this.x,this.y))||n.contains(new Aurigma.GraphicsMill.PointF(this.x+this.width-1,this.y+this.height-1))},intersect:function(n){if(!this.intersectsWith(n))return new Aurigma.GraphicsMill.Rectangle(0,0,-1,-1);var i=Math.max(this.x,n.x),t=Math.max(this.y,n.y),u=Math.min(this.x+this.width-1,n.x+n.width-1),r=Math.min(this.y+this.height-1,n.y+n.height-1);return new Aurigma.GraphicsMill.Rectangle(i,t,u-i+1,r-t+1)}},Aurigma.GraphicsMill.Rectangle.registerClass("Aurigma.GraphicsMill.Rectangle"),Aurigma.GraphicsMill.PointF=function(n,t){this.x=n,this.y=t},Aurigma.GraphicsMill.PointF.prototype={round:function(){return new Aurigma.GraphicsMill.PointF(Math.round(this.x),Math.round(this.y))},toPoint:function(){return new Sys.UI.Point(Math.round(this.x),Math.round(this.y))}},Aurigma.GraphicsMill.PointF.registerClass("Aurigma.GraphicsMill.PointF"),Aurigma.GraphicsMill.Cursor=function(){throw Error.notImplemented();},Aurigma.GraphicsMill.Cursor.prototype={defaultCursor:0,sizeNW:1,sizeNE:2,sizeSW:3,sizeSE:4,sizeN:5,sizeS:6,sizeW:7,sizeE:8,move:9,cross:10,zoomIn:11,zoomOut:12,pan:13,pointer:14},Aurigma.GraphicsMill.Cursor.registerEnum("Aurigma.GraphicsMill.Cursor",!1),Aurigma.GraphicsMill.ColorSpace=function(){throw Error.notImplemented();},Aurigma.GraphicsMill.ColorSpace.prototype={rgb:16777216,cmyk:335544320,grayScale:301989888,unknown:0},Aurigma.GraphicsMill.ColorSpace.registerEnum("Aurigma.GraphicsMill.ColorSpace"),typeof Sys!="undefined"&&Sys.Application.notifyScriptLoaded();