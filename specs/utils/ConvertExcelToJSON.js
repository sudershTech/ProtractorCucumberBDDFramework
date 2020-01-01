var excelToJson = require('convert-excel-to-json');
var path = './specs/data/protractorData.xlsx';

function convertExcelToJson(sheetName) {
    return excelToJson({
        sourceFile: path,
        header: {
            rows: 1
        },
        columnToKey: {
            '*': '{{columnHeader}}'
        },
        sheets: [sheetName]
    });
}

module.exports.convertExcelToJson = convertExcelToJson;