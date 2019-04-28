//The function should find two different numbers in the array that, when added together, give the target number. 
//Es gibt eine Zielnummer, wenn Zahlen im array gefunden werden, die addiert die Zielnummer ergeben, dann soll ein
//Array ausgegeben werden, mit diesen Zahlen.

//Input: answer([1,2,3], 4)
//Output: [1,3]

//Woher weiß ich, da ich die 1 und 3 nehmen soll und nicht die 2,3 oder 1,2?
//[1,6,9,1,5,2,6],8;
//[7,6,9,2,1,5],8
//[6,1,4,1,1,1],8
//[6,8,2,1,1,1,5]

//var list = [6,8,2,1,1,1,5];
var list = [6,8,2,1,1,1,5];
var target_value = 8;
//[6,8,1,2]
//wenn 6+
searchTargetValues(list,target_value);

function searchTargetValues(list,target_value){
	var collector = [];
	
	for(var i = 0; i < list.length;i++){
		var first = list[i];
		
		for(var j = 0; j < list.length;j++){
			var second = list[j];
			var sum = first + second;
			if(sum == target_value && first != second){
				collector.push(second);
				collector.push(first);
				var rem = list.indexOf(first);
				list.splice(rem,1);
			}
		}
	}
	
	console.log(collector);
	
}


