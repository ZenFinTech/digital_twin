空间对象可视化     
对象的空间位置，对象的显示样式（材质），颜色，透明度，纹理，光照，颜色和透明度   
```javascript
viewer.entities.add({
       position:Cesium.Cartesian3.fromDegrees(103.0, 40.0),
       name:'Red ellipse on surface with outline',
       ellipse:{
           semiMinorAxis:250000.0,
           semiMajorAxis:400000.0,
           material:Cesium.Color.RED.withAlpha(0.5),
       }
   });
```
以上代码为绘制一个半透明的红色椭圆，设置material为Cesium.Color.RED.withAlpha(0.5)透明度为0.5的红色


___
[cesium示范例子](https://www.jianshu.com/p/c641d0e5b7a1)
