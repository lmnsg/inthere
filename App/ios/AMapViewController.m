#import "AMapViewController.h"

@implementation AMapViewController

- (void)viewDidLoad {

    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.


    ///初始化地图
    MAMapView *_mapView = [[MAMapView alloc] initWithFrame:self.view.bounds];
    _mapView.scrollEnabled = NO;
    _mapView.zoomEnabled = NO;
    _mapView.showsScale = NO;
    _mapView.rotateEnabled = NO;
    _mapView.rotateCameraEnabled = NO;

    ///把地图添加至view
    [self.view addSubview:_mapView];

    _mapView.showsUserLocation = YES;
    _mapView.userTrackingMode = MAUserTrackingModeFollow;
    _mapView.showsIndoorMap = YES;

    [_mapView setZoomLevel:18 animated:YES];
    [_mapView setUserTrackingMode:MAUserTrackingModeFollowWithHeading animated:YES];
    // 设置中心店
    // [_mapView setCenterCoordinate:_mapView.userLocation.location.coordinate animated:YES];

}


///当位置更新时，会进定位回调，通过回调函数，能获取到定位点的经纬度坐标，示例代码如下：
- (void) mapView:(MAMapView *)mapView didUpdateUserLocation:(MAUserLocation *)userLocation
updatingLocation:(BOOL)updatingLocation {
    if (updatingLocation) {
        //取出当前位置的坐标
        NSLog(@"latitude : %f,longitude: %f", userLocation.coordinate.latitude, userLocation.coordinate.longitude);
    }
}


@end
