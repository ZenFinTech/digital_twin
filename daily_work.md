### 2020-09-21
1.大概阅读cseiumJS的文档，有趣而有雄心的team，名字源于铯原子钟，digital_twin

### 2020-09-22
1.macbook 安装 nodejs环境   
2.安装cseiumJS     
3.cseiumJS  HelloWorld          


#### 经验教训 
1. Missing write access to /usr/local/lib/node_modules， NPM ERROR    
命令加个 sudo 即可   

2. npm / cnpm 作用
https://www.jianshu.com/p/f581cf9360a2  

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

### 2020-09-26
#### Cesium 日照阴影效果
#### Cesium 通过Entity添加立方体
#### Cesium 通过CSML添加立方体
#### Cesium 加载3DTiles文件示例
