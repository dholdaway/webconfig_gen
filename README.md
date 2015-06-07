![small logo][1]

[1]: https://s3-eu-west-1.amazonaws.com/eunoia-labs/images/_small.png

##***WebConfig Generator***##
####Usage:####

The app will take a three column .csv file in the following format 

orignalURL,redirectURL

eg, 

`http://alexsah.com/abcd,http://google.com`
`http://alexsah.com/efgh,http://bing.com`
`http://alexsah.com/ijkl/mnop/qrst,http://yahoo.com`

(example.csv)

this should then produce

`<rule name="http://alexsah.com/abcd" stopProcessing="true">
<match url="^(alexsah.com/abcd.*)" ignoreCase="true" />
<conditions logicalGrouping="MatchAll" trackAllCaptures="false" />
<action type="Redirect" url="http://google.com/{R:1}" redirectType="Found" />
</rule>`

you can also create rules one at a time manually.

The app is running live [here](http:eunoia-labs.com/webconfig_gen)
