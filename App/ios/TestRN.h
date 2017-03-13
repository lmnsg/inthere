// CalendarManager.h
#import "RCTBridgeModule.h"

@interface CalendarManager : NSObject <RCTBridgeModule>
@end


// CalendarManager.m
@implementation CalendarManager

//  必须实现
RCT_EXPORT_MODULE(NSString: "testRN");

@end
