#import "AMapViewController.h"

@implementation AMapViewController

- (void)viewDidLoad
{
  
  [super viewDidLoad];
  // Do any additional setup after loading the view, typically from a nib.
  
  
  ///初始化地图
  MAMapView *_mapView = [[MAMapView alloc] initWithFrame:self.view.bounds];
  _mapView.scrollEnabled = YES;
  _mapView.zoomEnabled = YES;


  ///把地图添加至view
  [self.view addSubview:_mapView];

  _mapView.showsUserLocation = YES;
  _mapView.userTrackingMode = MAUserTrackingModeFollow;

//  [_mapView setCenterCoordinate:_mapView.userLocation.location.coordinate animated:YES];
}

@end
