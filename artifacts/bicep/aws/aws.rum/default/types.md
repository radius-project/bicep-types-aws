# AWS.RUM @ default

## Resource AWS.RUM/AppMonitor@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RUM/AppMonitorProperties](#awsrumappmonitorproperties) (Required): properties of the resource

## AWS.RUM/AppMonitorProperties
### Properties
* **AppMonitorConfiguration**: [AppMonitorConfiguration](#appmonitorconfiguration)
* **CwLogEnabled**: bool: Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter specifies whether RUM sends a copy of this telemetry data to CWLlong in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur CWLlong charges. If you omit this parameter, the default is false
* **Domain**: string (Required): The top-level internet domain name for which your application has administrative authority.
* **Name**: string (Required): A name for the app monitor
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
* **SessionSampleRate**: int: Specifies the percentage of user sessions to use for RUM data collection. Choosing a higher percentage gives you more data but also incurs more costs. The number you specify is the percentage of user sessions that will be used. If you omit this parameter, the default of 10 is used.
* **Telemetries**: [Telemetry](#telemetry)[]: An array that lists the types of telemetry data that this app monitor is to collect.

## Pages
### Properties

## FavoritePages
### Properties

## Arn
### Properties

## Telemetry
### Properties

## TagDef
### Properties

