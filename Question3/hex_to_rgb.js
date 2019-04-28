function get_rgb_or_hex_color(numstring){
//throw an alert if entry is not string
if(!isNaN(numstring)) {
	alert('entrie has to be a string'); 
	return false;
}
//decide between hex or rgb
if( "hex" == findFormat(numstring)){
	return hex_to_rgb(numstring);
}else{
	return rgb_to_hex(numstring);
}
	

function rgb_to_hex(rgb){
	var nums = rgb.split(',');
	var i = 0;
	var root_num;
	
	//translate hex into digits
	var assoc_hex = [];
	assoc_hex[10] = "A";
	assoc_hex[11] = "B";
	assoc_hex[12] = "C";
	assoc_hex[13] = "D";
	assoc_hex[14] = "E";
	assoc_hex[15] = "F";
	var hex_ns = '';
	//calculate every single rgb number
	while(i < nums.length){
		root_num = parseInt(nums[i]);
		var first_val = parseInt(root_num/16);
		var second_val = root_num - (first_val * 16);
		var first_hex_val = first_val;
		var second_hex_val = second_val;
		var first_hex_val = create_hex_character(first_val,assoc_hex);//assoc_hex[first_val];
		var second_hex_val = create_hex_character(second_val,assoc_hex);//assoc_hex[second_val];
		//put concat hex values to string
		hex_ns += first_hex_val + second_hex_val + ",";		
		i++;
	}
	//remove last comma
	hex_ns = hex_ns.substr(0,hex_ns.length-1);
	//return with commas separated string
	return hex_ns.replace(/,/g,"");
}
//check for valid hex numbers amount
function is_valid_hex_num(hex_num){
	//length variable
	var hl = hex_num.length;
	if(hl == 2 || hl == 3 || hl == 6){
		return true;
	}
	return false;
	
}

function hex_to_rgb(hex_num){
	//lowercase hex numbers
	hex_num = hex_num.toLowerCase();
	//hex higher 9 numbers translated into digits
	var assoc_hex = [];
	assoc_hex['a'] = 10;
	assoc_hex['b'] = 11;
	assoc_hex['c'] = 12;
	assoc_hex['d'] = 13;
	assoc_hex['e'] = 14;
	assoc_hex['f'] = 15;
	//needed variables
	var num;
	var first;
	var second;
	var rgb = "";
	var sum;
	//it has to be a valid hex entry
	if(!is_valid_hex_num(hex_num)) alert('hex number is not valid, please enter a number with 2, 3, or 6 signs'); 
	
	hex_num = adaptHexVal(hex_num);
    
	

	for(var i = 0; i < hex_num.length;i++){
		    //uneven or even position, number or character, change character to number
			if(i % 2 == 0){
				first = get_num_from_hex_val(hex_num[i],assoc_hex);			   
			}else{
				second = get_num_from_hex_val(hex_num[i],assoc_hex);
				//multiply number with 16 and add second number to change hex into rgb number
				sum = (first * 16) + second; 
				rgb += sum + ',';			
			}
	}
	//output string without last position, without comma there
	rgb = rgb.substring(0,rgb.length-1); 
	return rgb;
}
	
	
//helper functions
function findFormat(format){
	//if not rgb format, than hex format
	var is_rgb = format.search(/\d{1,3},\d{1,3},\d{1,3}/);
	
	if(is_rgb == -1){
		return 'hex';
	}else{
		return 'rgb';
	}
	
	
}

function get_num_from_hex_val(hex_num,assoc_hex){
	if(isNaN(hex_num)){
		num = parseInt(assoc_hex[hex_num]);
	}else{
		num = parseInt(hex_num);
	}
	return num;
}

function create_hex_character(val,assoc_hex){
	if(val > 9){
		return assoc_hex[val];
	}
}

function adaptHexVal(hex_num){
	
	if(hex_num.length < 6){
		var d = 0;
		var all_signs = '';
		sign = hex_num[0];
		
		while(d < 6){
			all_signs += sign;
			d++;
		}
		
		hex_num = all_signs;
		
	}
	return hex_num;
}

}


var hex_ns = get_rgb_or_hex_color("255,255,253");
console.log(hex_ns);
