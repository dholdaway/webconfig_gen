##***WebConfig Generator***##
####Usage:####

The app will take a three column .csv file in the following format 

orignalURL,redirectURL

eg, 

#####(example.csv)
`http://alexsah.com/abcd,http://google.com`<br>
`http://alexsah.com/efgh,http://bing.com`<br>
`http://alexsah.com/ijkl/mnop/qrst,http://yahoo.com`


this should then produce

`<rule name="http://alexsah.com/abcd" stopProcessing="true">
<match url="^(alexsah.com/abcd.*)" ignoreCase="true" />
<conditions logicalGrouping="MatchAll" trackAllCaptures="false" />
<action type="Redirect" url="http://google.com/{R:1}" redirectType="Found" />
</rule>`

you can also create rules one at a time manually.

The app is running live [here](http://projects.eunoia-labs.com/webconfig_gen)
