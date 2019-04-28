/*
--2--
vergleiche den linken Wert mit dem rechten Wert
Der linke Wert ist gleich dem rechten Wert, wenn
der typ string ist, unabhängig von seinem value.
wenn die werte gleich sind und die typen numbers sind
sind die werte auch gleich. Alles andere ist ungleich

Wenn der linke Wert mit dem rechten übereinstimmt
schreibe den linken Wert in ein neues Array das "subarray" heißt.
Wenn der rechte Wert ungleich dem linken Wert ist
dann den linken Wert in das subarray schreiben und ins hauptarray setzen und das subarray leer machen.
*/

var list  = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
//var list = [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]
//var list = [1,1,"1","1","2",2,2,4,5,"20",20];

//Question 1

function clean_the_room(list){
	list.sort(compare);
	var main_arr = [];
	var subarray = [];

	for(var i = 0; i < list.length;i++){
		var left = list[i];
		var right = list[i+1];
		
		//if left and right are equal numbers or
		//left and right are strings 
		if(
			areEqualNumbers(left,right) || 
			areStrings(left,right)
		)
		{
				//if equal create subarray
				subarray.push(left);
				
				
		}else{
			//not equal

			if(subarray.length > 0){
				//push last equal value into collector array
				subarray.push(left);
				//put collector into main_arr
				main_arr.push(subarray);
				//delete collector after it done it's service
				//to be used later if needed again :-)
				subarray = [];
			}else{
				main_arr.push(left);
			}
		}
		
	}
	
	
	function areEqualNumbers(left,right){
		if(
		   left == right && 
		   typeof left != 'string' && 
		   typeof right != 'string'
		){
			return true;
		}else{
		   return false;
		}
	}

	function areStrings(left,right){
		 if(
			typeof left == 'string' && 
			typeof right == 'string'
		 ){
			return true;
		 }else{
			return false;
		 }
	}
	
	function compare(a, b) {
		return a - b;
	}
	
	return main_arr;
}



console.log(clean_the_room(list));




