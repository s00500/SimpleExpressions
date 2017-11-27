Blockly.Blocks['show_mouth'] = {
  category: 'SimpleExpressions',
  colour: '#fbb117',
  helpUrl: Facilino.getHelpUrl('show_mouth'),
  tags: [],
  examples: [],
  init: function() {
    this.appendDummyInput()
        .appendField("showMouth");
    this.appendValueInput("Color")
        .setCheck(null)
        .appendField("Color");
    this.setColour("#fbb117");
    this.setTooltip("");
  }
};


Blockly.Arduino['show_mouth'] = function(block) {
  var input_color = Blockly.Arduino.valueToCode(block, 'Color', Blockly.Arduino.ORDER_ATOMIC);
  var code='SimpleExpressions.showMouth("+'mouth_name'+", '+color+')';
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
