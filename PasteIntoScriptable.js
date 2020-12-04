var countDownDate = new Date("Dec 9, 2020 17:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor(distance / (1000 * 60 * 60));
var mins = Math.floor(distance / (1000 * 60));
var secs = Math.floor(distance / (1000));

if (config.runsInWidget) {
  let widget = createWidget(days)
  Script.setWidget(widget)
  Script.complete()
}

function createWidget(days) {
  let widget = new ListWidget()

  let title = widget.addText("Time Until Cyberpunk 2077")
  title.font = Font.semiboldSystemFont(20);
  title.textColor = Color.black()
  title.centerAlignText()
  
  let line1 = widget.addText(days.toString(10).concat(' days ').concat((hours%24).toString(10)).concat(' hours'))
  line1.font = Font.semiboldSystemFont(30);
  line1.textColor = Color.black()
  

  let line2 = widget.addText((mins%60).toString(10).concat(' minutes ').concat((secs%60).toString(10)).concat(' seconds'))
  line2.font = Font.semiboldSystemFont(20);
  line2.textColor = Color.black()
  
  title.centerAlignText()
  line1.centerAlignText()
  line2.centerAlignText()
  
  //make a gradient
  let startColor = new Color("#fcec0c")
  let endColor = new Color("#978d01")
  let gradient = new LinearGradient()
  gradient.colors = [startColor, endColor]
  gradient.locations = [0.0, 1]
  widget.backgroundGradient = gradient
  widget.backgroundColor = new Color("#ff5401")

  return widget
}