``` javascript
var viewer = new Cesium.Viewer("cesiumContainer", {
        animation : false,
        vrButton : true,
        geocoder : true,
        infoBox : false, 
        timeline : false,
      });     
```  
与 html的id为 cesiumContainer 绑定     


Geocoder : A location search tool that flies the camera to queried location. Uses Bing Maps data by default.   
一种地理位置搜索工具，用于显示相机访问的地理位置。默认使用微软的Bing地图

HomeButton : Flies the viewer back to a default view.   
首页位置，点击之后将视图跳转到默认视角
SceneModePicker : Switches between 3D, 2D and Columbus View (CV) modes.
切换2D、3D 和 Columbus View (CV) 模式
BaseLayerPicker : Chooses the imagery and terrain to display on the globe.
选择三维数字地球的底图（imagery and terrain）
NavigationHelpButton : Displays the default camera controls. 
帮助提示，如何操作数字地球  
Animation : Controls the play speed for view animation.
控制视窗动画的播放速度   
CreditsDisplay : Displays data attributions. Almost always required!
展示商标版权和数据源  
Timeline : Indicates current time and allows users to jump to a specific time using the scrubber.
展示当前时间和允许用户在进度条上拖动到任何一个指定的时间
FullscreenButton : Makes the Viewer fullscreen. 全屏按钮
