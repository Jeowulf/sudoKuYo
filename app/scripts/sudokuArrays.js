// $(document).ready(function () {

  'use strict';

var easy = ['2','7','5','1','9','8','3','6','4',
            '1','4','3','5','7','6','9','2','8',
            '8','9','6','2','4','3','1','7','5',
            '3','2','8','4','6','1','7','5','9',
            '4','5','7','9','8','2','6','1','3',
            '6','1','9','7','3','5','4','8','2',
            '7','8','1','3','2','4','5','9','6',
            '5','3','2','6','1','9','8','4','7',
            '9','6','4','8','5','7','2','3','1'];

var easyTwo = ['1','4','8','6','3','9','5','7','2',
               '2','5','6','4','8','7','9','1','3',
               '3','7','9','5','2','1','6','4','8',
               '9','6','7','1','4','2','8','3','5',
               '5','1','4','8','6','3','7','2','9',
               '8','2','3','9','7','5','1','6','4',
               '7','3','5','2','1','8','4','9','6',
               '6','8','2','7','9','4','3','5','1',
               '4','9','1','3','5','6','2','8','7'];

var med = ['1','6','9','8','4','7','5','3','2',
           '4','7','5','2','9','3','8','1','6',
           '3','8','2','1','5','6','7','9','4',
           '6','2','7','5','8','9','3','4','1',
           '5','3','1','4','6','2','9','7','8',
           '9','4','8','7','3','1','2','6','5',
           '7','1','3','6','2','5','4','8','9',
           '8','5','6','9','7','4','1','2','3',
           '2','9','4','3','1','8','6','5','7'];

var medTwo = ['3','1','7','4','6','9','5','8','2',
              '9','8','2','7','5','3','6','4','1',
              '5','4','6','2','1','8','3','9','7',
              '8','2','3','9','7','6','1','5','4',
              '6','9','1','8','4','5','2','7','3',
              '4','7','5','3','2','1','8','6','9',
              '2','6','9','5','3','7','4','1','8',
              '1','3','8','6','9','4','7','2','5',
              '7','5','4','1','8','2','9','3','6'];

var hard =['4','7','3','8','5','1','9','2','6',
           '9','2','8','6','3','4','5','7','1',
           '1','5','6','7','9','2','4','8','3',
           '8','3','5','2','7','9','1','6','4',
           '2','6','1','5','4','8','7','3','9',
           '7','4','9','1','6','3','2','5','8',
           '5','8','4','3','1','7','6','9','2',
           '3','9','7','4','2','6','8','1','5',
           '6','1','2','9','8','5','3','4','7'];

var boss = ['5','7','1','6','2','9','3','4','8',
            '2','4','6','7','3','8','5','9','1',
            '3','8','9','5','4','1','2','7','6',
            '7','1','8','2','9','5','4','6','3',
            '6','5','3','8','7','4','9','1','2',
            '4','9','2','3','1','6','7','8','5',
            '8','6','7','4','5','2','1','3','9',
            '9','3','5','1','6','7','8','2','4',
            '1','2','4','9','8','3','6','5','7'];

//comp short for comparison array, used to store sudoku input and randomly assigned values to evaluate for faults.

var sudOneComp = [null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null];

var sudTwoComp = [null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null];

var sudThreeComp = [null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null];

var sudFourComp = [null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null];

var sudFiveComp = [null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null];

var sudSixComp = [null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null];

var holdingArray = [];

var masterArray = [null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,
                  null,null,null,null,null,null,null,null,null,];

var sudOne = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81'];
var sudTwo = ['82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120','121','122','123','124','125','126','127','128','129','130','131','132','133','134','135','136','137','138','139','140','141','142','143','144','145','146','147','148','149','150','151','152','153','154','155','156','157','158','159','160','161','162'];
var sudThree = ['163','164','165','166','167','168','169','170','171','172','173','174','175','176','177','178','179','180','181','182','183','184','185','186','187','188','189','190','191','192','193','194','195','196','197','198','199','200','201','202','203','204','205','206','207','208','209','210','211','212','213','214','215','216','217','218','219','220','221','222','223','224','225','226','227','228','229','230','231','232','233','234','235','236','237','238','239','240','241','242','243'];
var sudFour = ['244','245','246','247','248','249','250','251','252','253','254','255','256','257','258','259','260','261','262','263','264','265','266','267','268','269','270','271','272','273','274','275','276','277','278','279','280','281','282','283','284','285','286','287','288','289','290','291','292','293','294','295','296','297','298','299','300','301','302','303','304','305','306','307','308','309','310','311','312','313','314','315','316','317','318','319','320','321','322','323','324'];
var sudFive = ['325','326','327','328','329','330','331','332','333','334','335','336','337','338','339','340','341','342','343','344','345','346','347','348','349','350','351','352','353','354','355','356','357','358','359','360','361','362','363','364','365','366','367','368','369','370','371','372','373','374','375','376','377','378','379','380','381','382','383','384','385','386','387','388','389','390','391','392','393','394','395','396','397','398','399','400','401','402','403','404','405'];
var sudSix = ['406','407','408','409','410','411','412','413','414','415','416','417','418','419','420','421','422','423','424','425','426','427','428','429','430','431','432','433','434','435','436','437','438','439','440','441','442','443','444','445','446','447','448','449','450','451','452','453','454','455','456','457','458','459','460','461','462','463','464','465','466','467','468','469','470','471','472','473','474','475','476','477','478','479','480','481','482','483','484','485','486'];

var num;
function getRandomInt(min, max) {
   num = Math.floor(Math.random() * (max - min)) + min;
   return num;
}

function popSud(sudName) {
  for (var i = 0; i<81; i++) {
    getRandomInt(1, 100);
    if (num<42) {
      document.getElementById(sudOne[i]).innerHTML = (sudName[i]);
      masterArray.splice(i,1,sudName[i]);
    }
  }
}
function popSud2(sudName) {
  for (var i = 0; i<81; i++) {
    getRandomInt(1, 100);
      if (num<42) {
      document.getElementById(sudTwo[i]).innerHTML = (sudName[i]);
      masterArray.splice((i+81),1,sudName[i]);
    }
  }
}
function popSud3(sudName) {
  for (var i = 0; i<81; i++) {
    getRandomInt(1, 100);
      if (num<40) {
      document.getElementById(sudThree[i]).innerHTML = (sudName[i]);
      masterArray.splice((i+162),1,sudName[i]);
    }
  }
}
function popSud4(sudName) {
  for (var i = 0; i<81; i++) {
    getRandomInt(1, 100);
      if (num<40) {
      document.getElementById(sudFour[i]).innerHTML = (sudName[i]);
      masterArray.splice((i+243),1,sudName[i]);
    }
  }
}
function popSud5(sudName) {
  for (var i = 0; i<81; i++) {
    getRandomInt(1, 100);
      if (num<39) {
      document.getElementById(sudFive[i]).innerHTML = (sudName[i]);
      masterArray.splice((i+324),1,sudName[i]);
    }
  }
}
function popSud6(sudName) {
  for (var i = 0; i<81; i++) {
    getRandomInt(1, 100);
      if (num<39) {
      document.getElementById(sudSix[i]).innerHTML = (sudName[i]);
      masterArray.splice((i+405),1,sudName[i]);
    }
  }
}

$('#popSud').click(function(){
  $('.difficulty').addClass('animated zoomOutUp');
  //$('#popSud').addClass('animated bounceOutUp');
     popSud(easy);
     popSud2(easyTwo);
     popSud3(med);
     popSud4(medTwo);
     popSud5(hard);
     popSud6(boss);
});





$('#dogwood2').click(function() {
 $('#dogwood1').addClass('animated rubberBand');
});

function fillHoldingArray(){
$('input').each(function(){
  holdingArray.push(this.value);
});
}

function addToMaster() {
  for (var i = 0; i < masterArray.length; i++) {
    if (masterArray[i] === null) {
      masterArray.splice(i, 1, holdingArray[0]);
      holdingArray.shift();
    }
  }
}

function fillCompArrays() {
  for (var i = 0; i < masterArray.length; i++) {
    if (i < 81) {
      sudOneComp.splice(i, 1, masterArray[i]);
    } else if (i < 162) {
      sudTwoComp.splice(i-81, 1, masterArray[i]);
    } else if (i < 243) {
      sudThreeComp.splice(i-162, 1, masterArray[i]);
    } else if (i < 324) {
      sudFourComp.splice(i-243, 1, masterArray[i]);
    } else if (i < 405) {
      sudFiveComp.splice(i-324, 1, masterArray[i]);
    } else {
      sudSixComp.splice(i-405, 1, masterArray[i]);
    }
  }
}

var boxes = [];
var resultBoxes;
var rows = [];
var resultRows;
var columns = [];
var resultColumns;
var nine = ['1','2','3','4','5','6','7','8','9'];
var resultSudoku;
var resultSudokuyo;

function checkColumns(compName) {
    for (var k = 0; k < 9; k++) {
        for (var i = k; i < 81; i=i+9) {
           columns.push((compName[i]));
        }
        for (var j = 0; j < 9; j++) {
            if (nine.indexOf(columns[j]) !== -1) {
                nine.splice(nine.indexOf(columns[j]), 1);
            }
       }
       if (nine.length !== 0) {
            resultColumns = 'fail';
            return resultColumns;
       }
       nine = ['1','2','3','4','5','6','7','8','9'];
       columns = [];
    }
}

function checkRows(compName) {
    for (var i = 0; i < 81; i=i+9) {
        for (var k = i; k < i+9; k++) {
           rows.push((compName[k]));
        }
        for (var j = 0; j < 9; j++) {
            if (nine.indexOf(rows[j]) !== -1) {
                nine.splice(nine.indexOf(rows[j]), 1);
            }
       }
       if (nine.length !== 0) {
            resultRows = 'fail';
            return resultRows;
       }
       nine = ['1','2','3','4','5','6','7','8','9'];
       rows = [];
    }
}

function checkBoxes(compName) {
    for (var k = 0; k < 81; k = k + 27) {
        for (var i = k; i < k + 9; i=i+3) {
            boxes.push(compName[i]);boxes.push(compName[i+1]);boxes.push(compName[i+2]);boxes.push(compName[i+9]);boxes.push(compName[i+10]);boxes.push(compName[i+11]);boxes.push(compName[i+18]);boxes.push(compName[i+19]);boxes.push(compName[i+20]);
            for (var j = 0; j < 9; j++) {
                if (nine.indexOf(boxes[j]) !== -1) {
                nine.splice(nine.indexOf(boxes[j]), 1);
                }
            }
            if (nine.length !== 0) {
                resultBoxes = 'fail';
                return resultBoxes;
            }
            nine = ['1','2','3','4','5','6','7','8','9'];
            boxes = [];
        }
    }
}

function checkSudoku(compName) {
  checkColumns(compName);
  checkRows(compName);
  checkBoxes(compName);
  if (resultBoxes === 'fail') {
    resultSudoku = 'fail';
    return resultSudoku;
  } else if (resultRows === 'fail') {
    resultSudoku = 'fail';
    return resultSudoku;
  } else if (resultColumns === 'fail') {
    resultSudoku = 'fail';
    return resultSudoku;
  } else {
    resultSudoku = 'success';
    return resultSudoku;
  }
}

function evaluateSudokuyo() {
  checkSudoku(sudOneComp);
  if (resultSudoku === 'fail') {
    resultSudokuyo = 'fail';
    return resultSudokuyo;
  } checkSudoku(sudTwoComp);
  if (resultSudoku === 'fail') {
    resultSudokuyo = 'fail';
    return resultSudokuyo;
  } checkSudoku(sudThreeComp);
  if (resultSudoku === 'fail') {
    resultSudokuyo = 'fail';
    return resultSudokuyo;
  } checkSudoku(sudFourComp);
  if (resultSudoku === 'fail') {
    resultSudokuyo = 'fail';
    return resultSudokuyo;
  } checkSudoku(sudFiveComp);
  if (resultSudoku === 'fail') {
    resultSudokuyo = 'fail';
    return resultSudokuyo;
  } checkSudoku(sudSixComp);
  if (resultSudoku === 'fail') {
    resultSudokuyo = 'fail';
    return resultSudokuyo;
  } else {
    if (resultSudokuyo !== 'fail') {
      resultSudokuyo = 'success';
      return resultSudokuyo;
    }
  }
}

$('#dogwood2').click(function(){
fillHoldingArray();
addToMaster();
fillCompArrays();
evaluateSudokuyo();
fail();
success();
});

function fail() {
  if (resultSudokuyo === 'fail') {
    $('.firstNo').toggleClass('firstNoBig');
    $('.tryAgain').toggleClass('tryAgainBig');
  }
}

function success() {
  if (resultSudokuyo === 'success') {
    $('.verdict').toggleClass('verdictVisible')
  }
}


// $('#dogwood2').click(function() {
//         $('.firstNo').toggleClass('firstNoBig');
//         $('.tryAgain').toggleClass('tryAgainBig');
//       });
//     });
//////////////////////////////////animate.css hinge for samurai number knock off.
