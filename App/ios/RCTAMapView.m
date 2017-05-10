//
//  RCTGoogleMapView.m
//  ReactNativeGoogleMaps
//
//  Created by Peter Prokop on 15/04/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "RCTAMapView.h"

#import "React/RCTConvert.h"
#import "React/RCTEventDispatcher.h"
#import "React/RCTLog.h"
#import "React/RCTUtils.h"
#import "AMapViewController.h"

@interface RCTAMapView ()
@property (nonatomic, strong) AMapViewController * amapVC;
@end

@implementation RCTAMapView


- (instancetype)init
{
  if ((self = [super init])) {
    [AMapServices sharedServices].apiKey = @"b3172935701062f25700e04e978cd142";
    [AMapServices sharedServices].enableHTTPS = YES;
    
    AMapViewController * amapVC = [[AMapViewController alloc] init];
    self.amapVC = amapVC;
    
    [self addSubview:amapVC.view];
    
  }
  return self;
}

#pragma mark Accessors


@end
