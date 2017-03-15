//
//  RCTGoogleMapViewManager.m
//  ReactNativeGoogleMaps
//
//  Created by Peter Prokop on 15/04/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "RCTAMapViewManager.h"

#import "React/RCTBridge.h"
#import "React/RCTEventDispatcher.h"
#import "RCTAMapView.h"


@implementation RCTAMapViewManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  
  RCTAMapView *map = [[RCTAMapView alloc] init];

  return map;
}


@end
