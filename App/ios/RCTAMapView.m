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


//- (void)layoutSubviews
//{
//  [super layoutSubviews];
//  
//  // Force resize subviews - only the layer is resized by default
//  CGRect mapFrame = self.frame;
//  self.frame = CGRectZero;
//  self.frame = mapFrame;
//}

//- (void)updateToFitAllMarkers
//{
//  if (!_markersInternal.count) {
//    return;
//  }
//  
//  GMSCoordinateBounds *bounds = [[GMSCoordinateBounds alloc] init];
//  for (GMSMarker* marker in _markersInternal) {
//    bounds = [bounds includingCoordinate:marker.position];
//  }
//
//  GMSCameraUpdate *update = [GMSCameraUpdate fitBounds:bounds withPadding:40.0];
//
//  [self animateWithCameraUpdate:update];
//}

#pragma mark Accessors

//- (void)setMarkers:(NSArray *)markers
//{
//  if (_markers != markers) {
//    _markers = [markers copy];
//
//    for (GMSMarker* marker in _markersInternal) {
//      marker.map = nil;
//    }
//    
//    _markersInternal = [NSMutableArray arrayWithCapacity:_markers.count];
//    
//    for (NSDictionary* markerDictionary in markers) {
//      CLLocationDegrees lat = ((NSNumber*)markerDictionary[@"lat"]).doubleValue;
//      CLLocationDegrees lng = ((NSNumber*)markerDictionary[@"lng"]).doubleValue;
//      
//      GMSMarker* marker = [GMSMarker markerWithPosition:CLLocationCoordinate2DMake(lat, lng)];
//      marker.map = self;
//      
//      [_markersInternal addObject:marker];
//    }
//    
//    [self updateToFitAllMarkers];
//  }
//}

@end
