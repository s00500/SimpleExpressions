Facilino.LANG_COLOUR_SCREEN_LEDSTRIP = '#8EAC32';
Facilino.locales.defaultLanguage["LANG_SUBCATERGORY_WS2812"]="LED Strip";
Facilino.locales.defaultLanguage["LANG_SIMPLEEXPRESSIONS_PIN"]="PIN";
Facilino.locales.defaultLanguage["LANG_SIMPLEEXPRESSIONS_SHOWMOUTH_TOOLTIP"]="Draw an expression on the WS2812 led strip (ring-7)";

Blockly.Blocks['show_mouth'] = {
	category: Facilino.locales.getKey('LANG_CATEGORY_SCREEN'),
	subcategory: Facilino.locales.getKey('LANG_SUBCATERGORY_WS2812'),
	category_colour: Facilino.LANG_COLOUR_SCREEN,
	colour: Facilino.LANG_COLOUR_SCREEN_LEDSTRIP,
	helpUrl: Facilino.getHelpUrl('show_mouth'),
	tags: [],
	examples: [],
	init: function() {
		this.appendDummyInput('').appendField("WS2812 7-Ring").appendField(new Blockly.FieldImage('img/blocks/led_strip.svg', 40*options.zoom, 40*options.zoom));
		this.appendValueInput('PIN').appendField(Facilino.locales.getKey('LANG_SIMPLEEXPRESSIONS_PIN')).setAlign(Blockly.ALIGN_RIGHT).setCheck(Number);
		this.appendDummyInput('').appendField('Expression').appendField(new Blockly.FieldDropdown([['Zeros','zeros'],['Happy Small','happySmall'],['Happy Full','happyFull'],['Sad Small','sadSmall'],['Sad Full','sadFull'],['Neutral','neutral'],['Circle','circle'],['Center','center'],['Hook','hook'],['Upsidedown Hook','upsidedownhook'],['Kooh','kooh'],['Upsidedown Kooh','upsidedownkooh'],['Cross','cross'],['Rect','rect'],['Left Arrow','leftarrow'],['Right Arrow','rightarrow'],['Left Half','lefthalf'],['Right Half','righthalf']]),'EXPRESSION').setAlign(Blockly.ALIGN_RIGHT);
		var colour = new Blockly.FieldColour('#000000');
		colour.setColours(['#000000','#808080','#C0C0C0','#FFFFFF','#800000','#FF0000','#808000','#FFFF00','#008000','#00FF00','#008080','#00FFFF','#000080','#0000FF','#800080','#FF00FF']).setColumns(4);
		this.appendDummyInput('').appendField('Color').appendField(colour,'COLOR').setAlign(Blockly.ALIGN_RIGHT);
		this.setPreviousStatement(true,'code');
		this.setNextStatement(true,'code');
		this.setColour(Facilino.LANG_COLOUR_SCREEN_LEDSTRIP);
		this.setTooltip("");
}
};
		
Blockly.Arduino['show_mouth'] = function(block) {
var input_expression = this.getFieldValue('EXPRESSION');
var input_color = this.getFieldValue('COLOR');
var input_pin = Blockly.Arduino.valueToCode(this,'PIN',Blockly.Arduino.ORDER_ATOMIC) || '';
Blockly.Arduino.definitions_['define_simpleexpressions_h'] = '#include <SimpleExpressions.h>';
Blockly.Arduino.setups_['setup_simpleexpressions_mouth'] = 'SimpleExpressions.initMouth('+input_pin+');\n';
var color_rgb=Facilino.hexToRgb(input_color);
var code='SimpleExpressions.writeMouth("'+input_expression+'",'+color_rgb.r +','+color_rgb.g+','+color_rgb.b+');\n' ;
code+= '\n';
return code;
};

Blockly.Blocks['play_sound'] = {
  category: 'SimpleExpressions',
  colour: '#fbb117',
  helpUrl: Facilino.getHelpUrl('play_sound'),
  tags: [],
  examples: [],
  init: function() {
    this.appendDummyInput()
        .appendField("play Sound");
    this.setColour("#fbb117");
    this.setTooltip("");
  }
};


Blockly.Arduino['play_sound'] = function(block) {
  var input_color = Blockly.Arduino.valueToCode(block, 'Color', Blockly.Arduino.ORDER_ATOMIC);
  var code='';
  code+= '\n';
  return code;
};
