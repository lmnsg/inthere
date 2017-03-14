#import "AMapViewController.h"

@implementation AMapViewController

- (void)viewDidLoad
{
  
  [super viewDidLoad];
  // Do any additional setup after loading the view, typically from a nib.
  
  
  ///初始化地图
  MAMapView *_mapView = [[MAMapView alloc] initWithFrame:self.view.bounds];
  
  ///把地图添加至view
  [self.view addSubview:_mapView];
  
}

@end
