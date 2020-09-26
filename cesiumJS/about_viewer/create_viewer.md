创建一个viewer，与 html的id为 cesiumContainer 绑定

``` javascript
var viewer = new Cesium.Viewer("cesiumContainer", {
        animation : false,
        vrButton : true,
        geocoder : true,
        infoBox : false, 
        timeline : false,
      });     
```  
     


##### Geocoder
A location search tool that flies the camera to queried location. Uses Bing Maps data by default.      
地理位置查询定位控件。默认使用微软的Bing地图

##### HomeButton
Flies the viewer back to a default view.      
首页位置，默认相机位置    
##### SceneModePicker 
Switches between 3D, 2D and Columbus View (CV) modes.    
切换2D、3D 和 哥伦布模式   
##### BaseLayerPicker 
Chooses the imagery and terrain to display on the globe.   
选择三维数字地球的底图（地形，影像）（imagery and terrain）   
##### NavigationHelpButton 
Displays the default camera controls.    
帮助提示，如何操作数字地球     
##### Animation 
Controls the play speed for view animation.   
控制视窗动画的播放速度      
##### CreditsDisplay 
Displays data attributions. Almost always required!     
展示商标版权属性    
##### Timeline
indicates current time and allows users to jump to a specific time using the scrubber.   
时间滚动条
##### FullscreenButton 
Makes the Viewer fullscreen.      
全屏切换

___
##### doc
https://cesium.com/docs/cesiumjs-ref-doc/Viewer.html?classFilter=viewer
