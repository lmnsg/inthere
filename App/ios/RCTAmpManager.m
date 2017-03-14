//
//  TestRN.m
//  App
//
//  Created by lmn on 17/3/13.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <React/RCTViewManager.h>
#import <MAMapKit/MAMapKit.h>
#import <AMapFoundationKit/AMapFoundationKit.h>

@interface RCTAmpManager : RCTViewManager
@end

@implementation RCTAmpManager

//  必须实现
RCT_EXPORT_MODULE();

- (UIView *)view {
  [AMapServices sharedServices].enableHTTPS = YES;
  
  return [[MAMapView alloc] initWithFrame:self.view.bounds];
}

@end
