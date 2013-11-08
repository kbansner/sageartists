// Created by iWeb 3.0.4 local-build-20131107

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="320" height="256" style="height: 256px; left: 80px; position: absolute; top: 107px; width: 320px; z-index: 1; "><param name="src" value="Media/CowjamWebPromo.mp4" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="320" height="256" style="height: 256px; left: 80px; position: absolute; top: 107px; width: 320px; z-index: 1; "><param name="src" value="Movies_files/CowjamWebPromo-1.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/CowjamWebPromo.mp4"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="320" height="256" data="Media/CowjamWebPromo.mp4" style="height: 256px; left: 80px; position: absolute; top: 107px; width: 320px; z-index: 1; "><param name="src" value="Media/CowjamWebPromo.mp4"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
function writeMovie2()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id4" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="262" height="16"><param name="src" value="Media/08%20Everything%202.m4a" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id4" type="video/quicktime" width="262" height="16"><param name="src" value="Media/08%20Everything%202.m4a"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id4" type="video/quicktime" width="262" height="16" data="Media/08%20Everything%202.m4a"><param name="src" value="Media/08%20Everything%202.m4a"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
function writeMovie3()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id5" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="318" height="16"><param name="src" value="Media/09%20Onyacha%20Bye-O%202.m4a" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id5" type="video/quicktime" width="318" height="16"><param name="src" value="Media/09%20Onyacha%20Bye-O%202.m4a"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id5" type="video/quicktime" width="318" height="16" data="Media/09%20Onyacha%20Bye-O%202.m4a"><param name="src" value="Media/09%20Onyacha%20Bye-O%202.m4a"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:3,offset:new IWPoint(0.1736,0.9848),color:'#817b67',opacity:0.700000}),shadow_1:new IWShadow({blurRadius:3,offset:new IWPoint(0.1736,0.9848),color:'#817b67',opacity:0.700000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Movies_files/MoviesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');detectBrowser();adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();IMpreload('Movies_files','shapeimage_4','0');IMpreload('Movies_files','shapeimage_5','0');IMpreload('Movies_files','shapeimage_5','1');fixupIECSS3Opacity('id9');applyEffects()}
function onPageUnload()
{Widget.onunload();}
