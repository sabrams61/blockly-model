import Blockly from "blockly";

// Blockly.Blocks["regexInput"] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField("regex with ignored case")
//       .appendField("/")
//       .appendField(new Blockly.FieldTextInput("stub"), "regex")
//       .appendField("/i");
//     this.setColour(105);
//     this.setOutput(true, "String");
//   }
// };

// INPUTS: Read Dataset Block
Blockly.Blocks["readDataset"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Read Dataset")
      .appendField(new Blockly.FieldTextInput("DATASET"), "dataset");
    this.setInputsInline(true);
    this.setPreviousStatement(false, null);
    this.setNextStatement(true, null);
    this.setColour(205);
    // this.setOutput(true, "String");
  }
};

// INPUTS: Read Dataset Code Generator
Blockly.JavaScript["readDataset"] = function (block) {
  let dataset = block.getFieldValue("dataset");
  var code = `readDataset(\n\t'${dataset}'\n);\n`;
  return code;
};

// TRANSFORMATIONS: Split Column Block
Blockly.Blocks["mrfield1"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Split column")
      .appendField(new Blockly.FieldTextInput("COLUMN"), "inputColumn")
      .appendField("into columns")
      .appendField(new Blockly.FieldTextInput("FIELD_1"), "outputColumn_1")
      .appendField("and")
      .appendField(new Blockly.FieldTextInput("FIELD_2"), "outputColumn_2")
      .appendField("using regex")
      .appendField(new Blockly.FieldTextInput("REGEX"), "regex");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(125);
    // this.setOutput(true, "String");
  }
};

// TRANSFORMATIONS: Split Column Code Generator
Blockly.JavaScript["mrfield1"] = function (block) {
  let inputColumn = block.getFieldValue("inputColumn");
  let outputColumn_1 = block.getFieldValue("outputColumn_1");
  let outputColumn_2 = block.getFieldValue("outputColumn_2");
  let regex = block.getFieldValue("regex");
  var code = `mrsplit(\n\t'${inputColumn}',\n\t\['${outputColumn_1}','${outputColumn_2}'\],\n\t'${regex}'\n);\n`;
  return code;
};

// TRANSFORMATIONS: Replace String Block
Blockly.Blocks["replaceString"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Replace ")
      .appendField(new Blockly.FieldTextInput("OLD_VALUE"), "oldValue")
      .appendField("with")
      .appendField(new Blockly.FieldTextInput("NEW_VALUE"), "newValue")
      .appendField("in")
      .appendField(new Blockly.FieldTextInput("COLUMN"), "inputColumn");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(145);
    // this.setOutput(true, "String");
  }
};

// TRANSFORMATIONS: Replace String Code Generator
Blockly.JavaScript["replaceString"] = function (block) {
  let oldValue = block.getFieldValue("oldValue");
  let newValue = block.getFieldValue("newValue");
  let inputColumn = block.getFieldValue("inputColumn");
  var code = `replace(\n\t'${oldValue}',\n\t'${newValue}',\n\t'${inputColumn}'\n);\n`;
  return code;
};

// OUTPUTS: Write Dataset Block
Blockly.Blocks["writeDataset"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Write Dataset")
      .appendField(new Blockly.FieldTextInput("DATASET"), "dataset")
      .appendField("to")
      .appendField(new Blockly.FieldTextInput("WAREHOUSE"), "location");

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(false, null);
    this.setColour(65);
    // this.setOutput(true, "String");
  }
};

// OUTPUTS: Write Dataset Code Generator
Blockly.JavaScript["writeDataset"] = function (block) {
  let dataset = block.getFieldValue("dataset");
  let location = block.getFieldValue("location");
  var code = `writeDataset(\n\t'${dataset}',\n\t'${location}'\n);\n`;
  return code;
};


// Blockly.JavaScript["mrfield1"] = function (block) {
//   let value_regex = block.getFieldValue("regex");
//   var code = `mrmrmrmr /${value_regex}/i`;
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

// Blockly.JavaScript["regexInput"] = function (block) {
//   let value_regex = block.getFieldValue("regex");
//   var code = `/${value_regex}/i`;
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

// Blockly.Blocks["simplebot"] = {
//   init: function () {
//     this.appendDummyInput().appendField("Simple bot");
//     this.appendValueInput("botToken").setCheck(null).appendField("bot token");
//     this.appendDummyInput().appendField("do");
//     this.appendStatementInput("simpleActions").setCheck(null);
//     this.setInputsInline(false);
//     this.setColour(0);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

// Blockly.JavaScript["simplebot"] = function (block) {
//   var value_bottoken = Blockly.JavaScript.valueToCode(
//     block,
//     "botToken",
//     Blockly.JavaScript.ORDER_ATOMIC
//   );
//   var statements_simpleactions = Blockly.JavaScript.statementToCode(
//     block,
//     "simpleActions"
//   );

//   var code = `import TelegramBot from "node-telegram-bot-api";\nconst token = ${value_bottoken}\nconst bot = new TelegramBot(token, { polling: true});\napp = async () => {\n${statements_simpleactions}\n};\napp().then(() => console.log("started"));`;
//   return code;
// };

// Blockly.Blocks["responceontext"] = {
//   init: function () {
//     this.appendValueInput("onText")
//       .setCheck(null)
//       .appendField("on text or regex");
//     this.appendValueInput("responceText")
//       .setCheck(null)
//       .appendField("respond the following text");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

// Blockly.JavaScript["responceontext"] = function (block) {
//   var value_ontext = Blockly.JavaScript.valueToCode(
//     block,
//     "onText",
//     Blockly.JavaScript.ORDER_ATOMIC
//   );
//   var value_responcetext = Blockly.JavaScript.valueToCode(
//     block,
//     "responceText",
//     Blockly.JavaScript.ORDER_ATOMIC
//   );

//   var code = `bot.onText(\n\t${value_ontext},\n\tasync (msg) => {\n\t\tconst chatId = msg.chat.id;\n\t\treturn await bot.sendMessage(chatId, ${value_responcetext});\n\t}\n);\n`;
//   return code;
// };
