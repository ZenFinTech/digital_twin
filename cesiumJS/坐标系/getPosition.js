/*
parameter: viewer 全局的viewer对象
*/

getPosition = (viewer) => {
            //得到当前三维场景
            var scene = viewer.scene;
            //得到当前三维场景的椭球体
            var ellipsoid = scene.globe.ellipsoid;
            var entity = viewer.entities.add({
                label: {
                    show: false
                }
            });
            var longitudeStr = null;
            var latitudeStr = null;
            var height = null;
            var cartesian = null;
            // 定义当前场景的画布元素的事件处理
            var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
            //设置鼠标移动事件的处理函数，这里负责监听x,y坐标值变化
            handler.setInputAction(movement => {
                //通过指定的椭球或者地图对应的坐标系，将鼠标的二维坐标转换为对应椭球体三维坐标
                cartesian = viewer.camera.pickEllipsoid(movement.endPosition, ellipsoid);
                if (cartesian) {
                    //将笛卡尔坐标转换为地理坐标
                    var cartographic = ellipsoid.cartesianToCartographic(cartesian);
                    //将弧度转为度的十进制度表示
                    longitudeStr = Cesium.Math.toDegrees(cartographic.longitude);
                    latitudeStr = Cesium.Math.toDegrees(cartographic.latitude);
                    //获取相机高度
                    height = Math.ceil(viewer.camera.positionCartographic.height);
                    entity.position = cartesian;
                    entity.label.show = true;
                    entity.label.text = '(' + longitudeStr + ', ' + latitudeStr + "," + height + ')';
                } else {
                    entity.label.show = false;
                }
            }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
            //设置鼠标滚动事件的处理函数，这里负责监听高度值变化
            handler.setInputAction(wheelment => {
                height = Math.ceil(viewer.camera.positionCartographic.height);
                entity.position = cartesian;
                entity.label.show = true;
                entity.label.text = '(' + longitudeStr + ', ' + latitudeStr + "," + height + ')';
            }, Cesium.ScreenSpaceEventType.WHEEL);
        }
