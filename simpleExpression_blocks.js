Facilino.LANG_COLOUR_SCREEN = '#ACCE42';
Facilino.LANG_COLOUR_SCREEN_LEDSTRIP = '#8EAC32';

Facilino.hexToRgb = function(hex) {
				// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
				var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
				hex = hex.replace(shorthandRegex, function(m, r, g, b) {
					return r + r + g + g + b + b;
				});

				var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
				return result ? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16)
				} : null;
			};

Blockly.Blocks['show_mouth'] = {
	category: Facilino.locales.getKey('LANG_CATEGORY_SCREEN'),
	subcategory: Facilino.locales.getKey('LANG_SUBCATERGORY_WS2812'),
	category_colour: Facilino.LANG_COLOUR_SCREEN,
	colour: Facilino.LANG_COLOUR_SCREEN_LEDSTRIP,
	helpUrl: Facilino.getHelpUrl('show_mouth'),
	tags: [],
	examples: [],
	init: function() {
		this.appendDummyInput('').appendField(Facilino.locales.getKey('LANG_SIMPLEEXPRESSIONS_SHOW_MOUTH')).appendField(new Blockly.FieldImage('img/blocks/round_led_strip.svg', 40*options.zoom, 40*options.zoom));
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

		Blockly.Arduino.dyor_piezo_buzzer_predef_sounds = function() {
			var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC) || '';
			var code= '';
			Blockly.Arduino.definitions_['define_simpleexpressions_h'] = '#include <SimpleExpressions.h>';
			Blockly.Arduino.setups_['setup_simpleexpressions_buzzer'] = 'SimpleExpressions.initBuzzer('+dropdown_pin+');\n';
			code='SimpleExpressions.playSound('+this.getFieldValue('OPTION')+');\n';
            return code;
        };
		
		Blockly.Blocks.dyor_piezo_buzzer_predef_sounds = {
            category: Facilino.locales.getKey('LANG_CATEGORY_SOUND'),
			subcategory: Facilino.locales.getKey('LANG_SUBCATEGORY_BUZZER'),
            tags: ['buzzer','sound'],
            helpUrl: Facilino.getHelpUrl('dyor_piezo_buzzer_predef_sounds'),
			examples: [''],
			category_colour: Facilino.LANG_COLOUR_SOUND,
			colour: Facilino.LANG_COLOUR_SOUND_BUZZER,
            //dyor_piezo_buzzer initialization
            init: function() {
                this.setColour(Facilino.LANG_COLOUR_SOUND_BUZZER);
				this.appendDummyInput('')
                    .appendField(Facilino.locales.getKey('LANG_PIEZO_BUZZER'))
                    .appendField(new Blockly.FieldImage('img/blocks/buzzer.svg', 52*options.zoom, 35*options.zoom));
                this.appendValueInput('PIN')
                    .appendField(Facilino.locales.getKey('LANG_PIEZO_BUZZER_PIN')).appendField(new Blockly.FieldImage("img/blocks/pwm_signal.svg",24*options.zoom,24*options.zoom))
                    .setCheck(Number)
                    .setAlign(Blockly.ALIGN_RIGHT);
                this.appendDummyInput('').appendField(new Blockly.FieldImage('img/blocks/speaker.svg', 24*options.zoom, 24*options.zoom))
                    .appendField(new Blockly.FieldDropdown([
                        ['CONNECTION', '0'],
						['DISCONNECTION', '1'],
                        ['BUTTON PUSHED', '2'],
						['MODE 1', '3'],
                        ['MODE 2', '4'],
						['MODE 3', '5'],
                        ['SURPRISE', '6'],
						['OHOOH', '7'],
						['OHOOH2', '8'],
						['CUDDLY', '9'],
						['SLEEPING','10'],
						['HAPPY','11'],
						['SUPER_HAPPY','12'],
						['HAPPY_SHORT','13'],
						['SAD','14'],
						['CONFUSED','15'],
						['FART1','16'],
						['FART2','17'],
						['FART3','18'],
						['PIRATES','19']
                    ]), 'OPTION').setAlign(Blockly.ALIGN_RIGHT);
				this.setInputsInline(false);
                this.setPreviousStatement(true,'code');
                this.setNextStatement(true,'code');
                this.setTooltip(Facilino.locales.getKey('LANG_PIEZO_BUZZER_PREDEF_SOUNDS_TOOLTIP'));
            }
        };
