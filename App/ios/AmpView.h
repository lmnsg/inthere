
//
//  AmpView.m
//  App
//
//  Created by lmn on 17/3/14.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface AmpView()

@end


@implementation AmpView

- (instancetype)init
{
  if (self = [super init]) {
    UILabel * title = ({
      UILabel * label = [[UILabel alloc] init];
      label.frame = CGRectMake(100, 100, 100, 100);
      label.text = @"我是原生UI
      .";
      label.textColor = [UIColor blackColor];
      label.backgroundColor = [UIColor redColor];
      
      label;
    });
    
    [self addSubview:title];
  }
  return self;
}

@end
