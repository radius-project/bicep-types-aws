# AWS.RUM @ default

## Resource AWS.RUM/AppMonitor@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.RUM/AppMonitorProperties](#awsrumappmonitorproperties) (Required): properties of the resource

## AWS.RUM/AppMonitorProperties
### Properties
* **AppMonitorConfiguration**: [AppMonitorConfiguration](#appmonitorconfiguration)
* **CwLogEnabled**: bool: Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to CWLlong in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur CWLlong charges. If you omit this parameter, the default is false
* **Domain**: string (Required): The top-level internet domain name for which your application has administrative authority.
* **Name**: string (Required, Identifier): A name for the app monitor
* **Tags**: [TagDef](#tagdef)

## AppMonitorConfiguration
### Properties
* **AllowCookies**: bool: If you set this to true, the RUM web client sets two cookies, a session cookie and a user cookie. The cookies allow the RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page.
* **EnableXRay**: bool: If you set this to true, RUM enables xray tracing for the user sessions that RUM samples. RUM adds an xray trace header to allowed HTTP requests. It also records an xray segment for allowed HTTP requests. You can see traces and segments from these user sessions in the xray console and the CW ServiceLens console.
* **ExcludedPages**: [Pages](#pages): A list of URLs in your website or application to exclude from RUM data collection. You can't include both ExcludedPages and IncludedPages in the same operation.
* **FavoritePages**: [FavoritePages](#favoritepages): A list of pages in the RUM console that are to be displayed with a favorite icon.
* **GuestRoleArn**: [Arn](#arn): The ARN of the guest IAM role that is attached to the identity pool that is used to authorize the sending of data to RUM.
* **IdentityPoolId**: string: The ID of the identity pool that is used to authorize the sending of data to RUM.
* **IncludedPages**: [Pages](#pages): If this app monitor is to collect data from only certain pages in your application, this structure lists those pages. You can't include both ExcludedPages and IncludedPages in the same operation.
* **MetricDestinations**: [MetricDestination](#metricdestination)[]: An array of structures which define the destinations and the metrics that you want to send.
* **SessionSampleRate**: int: Specifies the percentage of user sessions to use for RUM data collection. Choosing a higher percentage gives you more data but also incurs more costs. The number you specify is the percentage of user sessions that will be used. If you omit this parameter, the default of 10 is used.
* **Telemetries**: [Telemetry](#telemetry)[]: An array that lists the types of telemetry data that this app monitor is to collect.

## Pages
### Properties

## FavoritePages
### Properties

## Arn
### Properties

## MetricDestination
### Properties
* **Destination**: string (Required): Defines the destination to send the metrics to. Valid values are CloudWatch and Evidently. If you specify Evidently, you must also specify the ARN of the Evidently experiment that is to be the destination and an IAM role that has permission to write to the experiment.
* **DestinationArn**: string: Use this parameter only if Destination is Evidently. This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.
* **IamRoleArn**: string: This parameter is required if Destination is Evidently. If Destination is CloudWatch, do not use this parameter.

This parameter specifies the ARN of an IAM role that RUM will assume to write to the Evidently experiment that you are sending metrics to. This role must have permission to write to that experiment.
* **MetricDefinitions**: [MetricDefinition](#metricdefinition)[]: An array of structures which define the metrics that you want to send.

## MetricDefinition
### Properties
* **DimensionKeys**: [AppMonitor_DimensionKeys](#appmonitordimensionkeys): Use this field only if you are sending the metric to CloudWatch.

This field is a map of field paths to dimension names. It defines the dimensions to associate with this metric in CloudWatch. Valid values for the entries in this field are the following:

"metadata.pageId": "PageId"

"metadata.browserName": "BrowserName"

"metadata.deviceType": "DeviceType"

"metadata.osName": "OSName"

"metadata.countryCode": "CountryCode"

"event_details.fileType": "FileType"

All dimensions listed in this field must also be included in EventPattern.
* **EventPattern**: string: The pattern that defines the metric, specified as a JSON object. RUM checks events that happen in a user's session against the pattern, and events that match the pattern are sent to the metric destination.

When you define extended metrics, the metric definition is not valid if EventPattern is omitted.

Example event patterns:

'{ "event_type": ["com.amazon.rum.js_error_event"], "metadata": { "browserName": [ "Chrome", "Safari" ], } }'

'{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": { "browserName": [ "Chrome", "Firefox" ] }, "event_details": { "duration": [{ "numeric": [ "<", 2000 ] }] } }'

'{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": { "browserName": [ "Chrome", "Safari" ], "countryCode": [ "US" ] }, "event_details": { "duration": [{ "numeric": [ ">=", 2000, "<", 8000 ] }] } }'

If the metrics destination' is CloudWatch and the event also matches a value in DimensionKeys, then the metric is published with the specified dimensions.
* **Name**: string (Required, Identifier): The name for the metric that is defined in this structure. Valid values are the following:

PerformanceNavigationDuration

PerformanceResourceDuration

NavigationSatisfiedTransaction

NavigationToleratedTransaction

NavigationFrustratedTransaction

WebVitalsCumulativeLayoutShift

WebVitalsFirstInputDelay

WebVitalsLargestContentfulPaint

JsErrorCount

HttpErrorCount

SessionCount
* **UnitLabel**: string: The CloudWatch metric unit to use for this metric. If you omit this field, the metric is recorded with no unit.
* **ValueKey**: string: The field within the event object that the metric value is sourced from.

If you omit this field, a hardcoded value of 1 is pushed as the metric value. This is useful if you just want to count the number of events that the filter catches.

If this metric is sent to Evidently, this field will be passed to Evidently raw and Evidently will handle data extraction from the event.

## AppMonitor_DimensionKeys
### Properties

## Telemetry
### Properties

## TagDef
### Properties

