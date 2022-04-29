import "./App.css";
import "./customBlocks/custom_Blocks";
import React from "react";
import ReactBlockly from "react-blockly";
import Blockly from "blockly";
import fs from "fs";

export default function App() {
  // const initialXml =
  //   '<xml xmlns="https://developers.google.com/blockly/xml"><block type="simplebot" id="gjqjdO;x_.b0m5tTGg-L" x="10" y="10"><value name="botToken"><block type="text" id="A9eL4vg_5TLZhi]HQ3~5"><field name="TEXT">token you get from telegram "@botfather"</field></block></value><statement name="simpleActions"><block type="responceontext" id="ph9h5:`d%[NTM@1nGq2n"><value name="onText"><block type="regexInput" id="C,vEP$oMM6CXFqmfPBI}"><field name="regex">privet</field></block></value><value name="responceText"><block type="text" id="}d5nk?}L)RGHFp_l%?^T"><field name="TEXT">hello</field></block></value></block></statement></block></xml>';

  const initialXml = '<xml></xml';
  const toolboxCategories = [
    {
      name: "Steps",
      colour: "#50C090",
      blocks: [
        {
          type: "readDataset",
        }
      ]
    },
    {
      name: "Transformations",
      colour: "#D09090",
      blocks: [
        {
          type: "mrfield1",
        },
        {
          type: "replaceString",
        }
      ]
    },
    {
      name: "Outputs",
      colour: "#9050C0",
      blocks: [
        {
          type: "writeDataset"
        }
      ]
    },
    // {
    //   name: "Bot presets",
    //   colour: "#5CA699",
    //   blocks: [
    //     {
    //       type: "simplebot"
    //     }
    //   ]
    // },
    // {
    //   name: "Bot actions",
    //   colour: "#5C81A6",
    //   blocks: [
    //     {
    //       type: "responceontext"
    //     }
    //   ]
    // },
    // {
    //   name: "Basic fields",
    //   colour: "#5CA65C",
    //   blocks: [
    //     {
    //       type: "text"
    //     },
    //     {
    //       type: "regexInput"
    //     },
    //   ]
    // }
  ];
  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
//    fs.writeFile("./bot.js", "code");
    document.getElementById("code").value = code;
  }

  return (
    <>
      <ReactBlockly
        toolboxCategories={toolboxCategories}
        initialXml={initialXml}
        wrapperDivClassName="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#ccc",
            snap: true
          }
        }}
        workspaceDidChange={workspaceDidChange}
      />
      <textarea
        id="code"
        style={{ height: "400px", width: "400px" }}
        value=""
      ></textarea>
    </>
  );
}
