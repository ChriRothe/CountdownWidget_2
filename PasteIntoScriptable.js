// var countDownDate = new Date("Oct 1, 2021 00:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor(distance / (1000 * 60 * 60));
var mins = Math.floor(distance / (1000 * 60));
var secs = Math.floor(distance / (1000));

let widgetInputRAW = args.widgetParameter;
// let widgetInput = null;
var countDownDate = new Date(widgetInputRAW).getTime();

//if (widgetInputRAW !== null) {
  //widgetInput = widgetInputRAW.toString().split(";");
  //if (/^\d{4}-\d{2}-\d{2}$/.test(widgetInput[0].trim()) === false) {
  //   throw new Error('Invalid Date format. Please format: Oct 1, 2021 00:00:00') 
  //}
  // countDownDate = widgetInput[0].trim()
  //if (widgetInput[2] && widgetInput[2].toLowerCase() === 'true') {
  //  showDate = true
  //}
//} else {
//  throw new Error('No Date set! Please format: Oct 1, 2021 00:00:00')
//}

if (config.runsInWidget) {
  let widget = createWidget(days)
  Script.setWidget(widget)
  Script.complete()
}

function createWidget(days) {
  let widget = new ListWidget()

  let title = widget.addText("⏳ Countdown to xxx")
  title.font = Font.semiboldSystemFont(20);
  title.textColor = Color.black()
  title.centerAlignText()
  
  let line1 = widget.addText(days.toString(10).concat(' Tage '))
  line1.font = Font.semiboldSystemFont(50);
  line1.textColor = Color.black()
  

  let line2 = widget.addText(hours.toString(10).concat(' Stunden ')(mins%60).toString(10).concat(' Minuten ').concat((secs%60).toString(10)).concat(' Sekunden'))
  line2.font = Font.semiboldSystemFont(20);
  line2.textColor = Color.black()
  
  title.centerAlignText()
  line1.centerAlignText()
  line2.centerAlignText()
  
  //make a gradient
  let startColor = new Color("#000000")
  let endColor = new Color("#111111")
  let gradient = new LinearGradient()
  gradient.colors = [startColor, endColor]
  gradient.locations = [0.0, 1]
  widget.backgroundGradient = gradient
  widget.backgroundColor = new Color("#f111111")

  return widget
}