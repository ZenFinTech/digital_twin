## 支持的三维模型格式
| 名称 | 格式 | 用途 |
| :-----| :---- | :----|
| Batch 3D model | .b3dm | 地形纹理和地表模型、三维建筑内外表面模型、大规模建筑模型等 |
| Instanced 3D Model | .i3dm | 大量小规模的独立模型，例如树木、路灯、螺栓等|
| Point Cloud | .i3dm | 点云模型 |
| Composite | .cmpt | 多种类型的模型组合格式 |

[3dTile 数据文件格式说明](https://blog.csdn.net/Rsoftwaretest/article/details/90667628)

## 加载策略(粗糙)
+ 屏幕空间误差ScreenSpaceError(SSE)衡量模型的精度   
+ DFS + BFS 查找瓦片节点   
+ 跳跃式加载提升层级瓦片的加载速度   
### ScreenSpaceError 
取值范围 0 ～ 正无穷大   
0,加载3dtiles所有叶子节点    
数值越大，越模糊   

### cesium 加载策略
4个队列   
+ desiredTiles
+ requestedTiles
+ processingQueue
+ selectedTiles

层次加载 ， 跳跃式加载   

### 瓦片的状态
6种状态
+ UNLOADED
+ LOADING
+ PROCESSING
+ READY
+ EXPIRED
+ FAILED

## ref
[3D Tiles Format Specification](https://github.com/CesiumGS/3d-tiles/tree/master/specification)
