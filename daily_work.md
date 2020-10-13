### 2020-09-21    
1.大概阅读cseiumJS的文档，有趣而有雄心的team，名字源于铯原子钟，digital_twin.     

[cesium tutorials](https://cesium.com/docs/tutorials/quick-start/)

### 2020-09-22   
1.macbook 安装 nodejs环境   
2.安装cseiumJS     
3.cseiumJS  HelloWorld          


#### 经验教训    
1. Missing write access to /usr/local/lib/node_modules， NPM ERROR    
命令加个 sudo 即可   

2. npm / cnpm 作用   
[如何使用NPM？CNPM又是什么?](https://www.jianshu.com/p/f581cf9360a2)  

3. No module named SimpleHTTPServer    
python3 启动 simpleHTTPServer    
python -m http.server 1234


### 2020-09-23
1.产品会议，了解目前的产品问题     
2.住建局会议，了解幕墙云系统和平安对接的情况   
3.安徽火星科技对cesium的梳理总结阅读   

#### 可以提升的点
1. 敏捷的研发流程，bug/issue的跟踪解决机制……    
2. 会议的突发性，会议的主题，对内会议和有外部合作者会议的准备    
3. 以上特此注名，并非挑刺，而是找出能够提升组织效率的点

### 2020-09-24
1. 开始针对cseiumJS的viewer进行实验了解，去除@copyright信息   
2. 发现目前效率可以提升的点，并且尝试找出可以提升效率的措施      
3. 隐藏版权信息， webConsole里面输入以下code，即可看到效果    
viewer._cesiumWidget._creditContainer.style.display="none" // copyright       
viewer.timeline.container.style.display="none" // timeline     
### 2020-09-25
#### Cesium的源码结构    
1. Source/Widgets 主要存放的就是Cesium的UI控件；      
2. Source/DataSource 主要存放Entity和DataSource相关最接近用户使用的API，包括geojson的加载等等     
3. Source/Scene 则是建立的一个三维场景，并提供基础的三维图元     
4. Source/Renderer 则是对WebGL底层函数的封装      
5. Source/Core 各种算法、基础类       
6. Source/Workers 工作线程，主要用于几何体的创建   

#### 将Cesium 的 HelloWorld 弄清爽，主要显示地球
需要阅读Cesium doc文档，viewer    
将构造函数的代码，结合附件cesium_widget.png会理解得更直观
```
1. 引入 Cesium库的js和css    
2. 建立渲染地球的div容器(含css)
3. 调用Cesium.viewer() API 渲染地球
```

### 2020-09-26
#### Cesium 日照阴影效果
```javascript
viewer.scene.globe.enableLighting = true;
viewer.shadows = true;
```
#### Cesium 通过Entity添加立方体
#### Cesium 通过CSML添加立方体
#### Cesium 加载3DTiles文件示例

### 2020-09-27
#### 着手开始了解火星科技的方案
浏览 https://github.com/muyao1987 木遥的一些技术repo
#### 火星开发资料
http://cesium.marsgis.cn/doc.html     
通过config.json的配置信息，mars将相关信息转化为cesium的实例化（极大概率是这么做的）
#### 本地run火星的project
#### 阅读Sandcastle ceiusm的例子代码
https://sandcastle.cesium.com/index.html 

### 2020-09-28
本地有2个web server    
a.提供瓦片数据的静态web服务器（一般使用tomcat，内网）    
b.cesium httpserver （一般使用nginx，接入外网）     
imageryProvider设置瓦片数据的静态web服务器         

terrainProvider 地形图()   
imageryLayers  底图    

```
Scene 场景渲染监听事件触发顺序   
viewer.scene.preUpdate
viewer.scene.postUpdate   
viewer.scene.preRender   
viewer.scene.postRender   
```
### 2020-10-11
观看Mars3D的视频资料
```
1. 图层视角定位/自定义
2. 基础底图，叠加底图   
3. 获取某个当前视角信息   
4. 配置3dtiles模型的贴地效果/高度比例    
5. 不同的widget之间的数据传输通信

```
初步对齐优化任务目标（详细见chanllenge.md）   

### 2020-10-12  
[Render in Cesium Stack](https://cesium.com/blog/2015/05/15/graphics-tech-in-cesium-architecture)    
大概率，需要关注cesium的 Render ，Scence模块

[gpu memory hierarchy](https://www.cnblogs.com/xiaopu2019/p/11071883.html)

cesium 空间对象可视化 2类接口 :  entity ,  primitive    
```
Primitives are lower-level graphical elements within Cesium, and Entities are built on top of Primitives
```

[Primitive渲染流程](https://www.codetd.com/article/11417274)  (暂且只能仅供参考)


### 2020-10-13 
[LOD模型, level of detail](https://www.cnblogs.com/yejianyong/p/10864969.html)
```
近大远小，近精远糊
```
