////////////////////////////////////////////////////////////
// MAPS
////////////////////////////////////////////////////////////

var maps_arr = [
	{
		map:[
			[35,30,30,30,30,30,30,30,30,40,30,30,30,30,30,30,30,30,32],
			[31, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 3,65,62, 2,65,60,62, 2,61, 2,65,60,62, 2,65,62, 3,31],
			[31, 2,64,63, 2,64,60,63, 2,75, 2,64,60,63, 2,64,63, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,76,74, 2,77, 2,76,60,66,60,74, 2,77, 2,76,74, 2,31],
			[31, 2, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2, 2,31],
			[34,30,30,32, 2,69,60,74, 2,75, 2,76,60,67, 2,35,30,30,33],
			[ 1, 1, 1,31, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2,31, 1, 1, 1],
			[30,30,30,33, 2,75, 2,35,30, 5,30,32, 2,75, 2,34,30,30,30],
			[ 1, 1, 1, 1, 2, 2, 2,31, 1, 1, 1,31, 2, 2, 2, 1, 1, 1, 1],
			[30,30,30,32, 2,77, 2,34,30,30,30,33, 2,77, 2,35,30,30,30],
			[ 1, 1, 1,31, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2,31, 1, 1, 1],
			[35,30,30,33, 2,75, 2,76,60,66,60,74, 2,75, 2,34,30,30,32],
			[31, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,76,62, 2,76,60,74, 2,75, 2,76,60,74, 2,65,74, 2,31],
			[31, 3, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 3,31],
			[43,74, 2,75, 2,77, 2,76,60,66,60,74, 2,77, 2,75, 2,76,41],
			[31, 2, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2, 2,31],
			[31, 2,76,60,60,68,60,74, 2,75, 2,76,60,68,60,60,74, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[34,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,33],
			],
		startDirection:"left",
		startPos:[9,16],
		ghostPos:[9,8],
		ghostStayPos:[
			[9,10],
			[9,10],
			[8,10],
			[10,10],
			],
		multiPos:[
			[5,4],
			[13,4],
			[5,14],
			[13,14],
			],
		multiDirection:["left","right","left","right",],
		totalGhosts:[0,1000,5000,10000],
		loop:"",
	},

	{
		map:[
			[31, 2,76,74, 2,76,60,74, 2,61, 2,76,60,74, 2,76,74, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,65,62, 2,65,60,62, 2,61, 2,65,60,62, 2,65,62, 2,31],
			[31, 2,64,63, 2,64,60,63, 2,75, 2,64,60,63, 2,64,63, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,76,74, 2,77, 2,76,60,66,60,74, 2,77, 2,76,74, 2,31],
			[31, 2, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2, 2,31],
			[34,30,30,32, 2,69,60,74, 2,75, 2,76,60,67, 2,35,30,30,33],
			[ 1, 1, 1,31, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2,31, 1, 1, 1],
			[30,30,30,33, 2,75, 2,65,74, 2,76,62, 2,75, 2,34,30,30,30],
			[ 1, 1, 1, 1, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2, 1, 1, 1, 1],
			[30,30,30,32, 2,77, 2,64,74, 2,76,63, 2,77, 2,35,30,30,30],
			[ 1, 1, 1,31, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2,31, 1, 1, 1],
			[35,30,30,33, 2,75, 2,76,60,66,60,74, 2,75, 2,34,30,30,32],
			[31, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,76,62, 2,76,60,74, 2,75, 2,76,60,74, 2,65,74, 2,31],
			[31, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2,31],
			[43,74, 2,75, 2,77, 2,76,60,66,60,74, 2,77, 2,75, 2,76,41],
			[31, 2, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2, 2,31],
			[31, 2,76,60,60,68,60,74, 2,61, 2,76,60,68,60,60,74, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2,31],
			],
		startDirection:"up",
		startPos:[9,10],
		ghostPos:[5,1],
		ghostStayPos:[
			[14,1],
			[4,1],
			[4,16],
			[14,16],
			],
		multiPos:[
			[6,8],
			[12,8],
			[6,12],
			[12,12],
			],
		multiDirection:["down","left","right","up",],
		totalGhosts:[0,0,0,0],
		loop:"vertical",
	},

	{
		map:[
			[30,30,30,30,30,30,40,30,30,30,40,30,30,30,30,30,30,30],
			[ 2, 2, 2, 2, 2, 2,61, 4, 4, 4,61, 2, 2, 2, 2, 2, 2, 2],
			[ 3,76,60,60,62, 2,64,60,60,60,63, 2,65,60,60,74, 3,77],
			[ 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2,61],
			[62, 2,77, 2,75, 2,76,60,66,60,74, 2,75, 2,77, 2,65,68],
			[61, 2,61, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2,61, 2,61, 2],
			[75, 2,64,66,60,60,74, 2,75, 2,76,60,60,66,63, 2,75, 2],
			[ 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2],
			[ 2,80, 2,61, 2,76,60,74, 2,76,60,74, 2,61, 2,80, 2,77],
			[ 2, 2, 2,75, 2, 2, 2, 2, 2, 2, 2, 2, 2,75, 2, 2, 2,61],
			[ 2,77, 2, 2, 2,65,60,60,60,60,60,62, 2, 2, 2,77, 2,61],
			[ 2,75, 2, 2, 2,64,60,60,60,60,60,63, 2, 2, 2,75, 2,61],
			[ 2, 2, 2,77, 2, 2, 2, 2, 2, 2, 2, 2, 2,77, 2, 2, 2,61],
			[ 2,80, 2,61, 2,76,60,74, 2,76,60,74, 2,61, 2,80, 2,75],
			[ 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2],
			[77, 2,65,68,60,60,74, 2,77, 2,76,60,60,68,62, 2,77, 2],
			[61, 2,61, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2,61, 2,61, 2],
			[63, 2,75, 2,77, 2,76,60,68,60,74, 2,77, 2,75, 2,64,66],
			[ 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2,61],
			[ 2,76,60,60,63, 2,65,60,60,60,62, 2,64,60,60,74, 2,75],
			[ 2, 2, 2, 2, 2, 2,61, 4, 4, 4,61, 2, 2, 2, 2, 2, 2, 2],
			[30,30,30,30,30,30,42,30,30,30,42,30,30,30,30,30,30,30],
			],
		startDirection:"up",
		startPos:[8,9],
		ghostPos:[8,12],
		ghostStayPos:[
			[3,5],
			[13,5],
			[3,16],
			[13,16],
			],
		multiPos:[
			[4,7],
			[12,7],
			[4,14],
			[12,14],
			],
		multiDirection:["down","left","right","up",],
		totalGhosts:[0,1000,5000,10000],
		loop:"horizontal",
	},

	{
		map:[
			[ 1, 1, 1, 1,35,30,30,30,30,30,30,30,30,30,32, 1, 1, 1, 1],
			[ 1, 1, 1, 1,31, 2, 2, 2, 2, 2, 2, 2, 2, 2,31, 1, 1, 1, 1],
			[ 1, 1, 1, 1,31, 2,77, 2,76,66,74, 2,77, 2,31, 1, 1, 1, 1],
			[ 1, 1, 1, 1,31, 2,61, 2, 2,61, 2, 2,61, 2,31, 1, 1, 1, 1],
			[35,30,30,30,33, 2,69,74, 2,75, 2,76,67, 2,34,30,30,30,32],
			[31, 3, 2, 2, 2, 2,61, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 3,31],
			[43,74, 2,76,60,60,67, 2,76,66,74, 2,69,60,60,74, 2,76,41],
			[31, 2, 2, 2, 2, 2,61, 2, 2,61, 2, 2,61, 2, 2, 2, 2, 2,31],
			[31, 2,76,60,62, 2,64,74, 2,75, 2,76,63, 2,65,60,74, 2,31],
			[31, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2,31],
			[34,60,62, 2,64,74, 2,35,30, 5,30,32, 2,76,63, 2,65,60,33],
			[ 1, 1,75, 2, 2, 2, 2,31, 1, 1, 1,31, 2, 2, 2, 2,75, 1, 1],
			[47, 1, 1, 2,65,74, 2,34,30,30,30,33, 2,76,62, 2, 1, 1,47],
			[31, 1,77, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2,77, 1,31],
			[45, 1,61, 2,61, 2,76,60,60,66,60,60,74, 2,61, 2,61, 1,45],
			[ 1, 1,61, 2,61, 3, 2, 2, 2,61, 2, 2, 2, 3,61, 2,61, 1, 1],
			[35,60,63, 2,64,60,60,74, 2,75, 2,76,60,60,63, 2,64,60,32],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,77, 2,35,30,30,30,30,30,30,30,30,30,32, 2,77, 2,31],
			[31, 2,75, 2,31, 1, 1, 1, 1, 1, 1, 1, 1, 1,31, 2,75, 2,31],
			[31, 2, 2, 2,31, 1, 1, 1, 1, 1, 1, 1, 1, 1,31, 2, 2, 2,31],
			[34,30,30,30,33, 1, 1, 1, 1, 1, 1, 1, 1, 1,34,30,30,30,33],
			],
		startDirection:"left",
		startPos:[9,13],
		ghostPos:[9,9],
		ghostStayPos:[
			[9,11],
			[9,11],
			[8,11],
			[10,11],
			],
		multiPos:[
			[5,7],
			[13,7],
			[5,17],
			[13,17],
			],
		multiDirection:["left","right","left","right",],
		totalGhosts:[0,1000,5000,10000],
		loop:"",
	},

	{
		map:[
			[35,30,30,30,30,40,30,30,30,30,30,30,30,40,30,30,30,30,32],
			[31, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2,31],
			[43,60,60,74, 2,75, 2,76,60,66,60,74, 2,75, 2,76,60,60,41],
			[31, 2, 2, 3, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 3, 2, 2,31],
			[31, 2,65,60,60,74, 2,77, 2,61, 2,77, 2,76,60,60,62, 2,31],
			[31, 2,61, 2, 2, 2, 2,61, 2,61, 2,61, 2, 2, 2, 2,61, 2,31],
			[31, 2,75, 2,76,62, 2,61, 2, 2, 2,61, 2,65,74, 2,75, 2,31],
			[31, 2, 2, 2, 2,61, 2,64,60,60,60,63, 2,61, 2, 2, 2, 2,31],
			[43,60,60,74, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2,76,60,60,41],
			[31, 2, 2, 2, 2,61, 2,35,30, 5,30,32, 2,61, 2, 2, 2, 2,31],
			[31, 2,76,62, 2,75, 2,31, 1, 1, 1,31, 2,75, 2,65,74, 2,31],
			[31, 2, 2,61, 2, 2, 2,34,30,30,30,33, 2, 2, 2,61, 2, 2,31],
			[34,32, 2,61, 2,77, 2, 2, 2, 2, 2, 2, 2,77, 2,61, 2,35,33],
			[ 1,31, 2,75, 2,64,74, 2,65,60,62, 2,76,63, 2,75, 2,31, 1],
			[ 1,31, 2, 2, 2, 2, 2, 2,61, 1,61, 2, 2, 2, 2, 2, 2,31, 1],
			[30,33, 2,76,60,66,74, 2,64,60,63, 2,76,66,60,74, 2,34,30],
			[ 1, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 1],
			[35,44, 2,77, 2,75, 2,76,60,66,60,74, 2,75, 2,77, 2,46,32],
			[31, 2, 3,61, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2,61, 3, 2,31],
			[31, 2,76,63, 2,76,60,74, 2,75, 2,76,60,74, 2,64,74, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[34,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,33],
			],
		startDirection:"left",
		startPos:[9,16],
		ghostPos:[9,8],
		ghostStayPos:[
			[9,10],
			[9,10],
			[8,10],
			[10,10],
			],
		multiPos:[
			[6,5],
			[12,5],
			[7,14],
			[11,14],
			],
		multiDirection:["left","right","left","right",],
		totalGhosts:[0,1000,5000,10000],
		loop:"",
	},

	{
		map:[
			[35,30,30,30,30,30,30,40,30,30,30,40,30,30,30,30,30,30,32],
			[31, 2, 2, 2, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2, 2, 2, 2,31],
			[31, 2,65,60,60,74, 2,75, 2,77, 2,75, 2,76,60,60,62, 2,31],
			[31, 2,61, 3, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 3,61, 2,31],
			[31, 2,75, 2,77, 2,65,62, 2,61, 2,65,62, 2,77, 2,75, 2,31],
			[31, 2, 2, 2,61, 2,64,63, 2,75, 2,64,63, 2,61, 2, 2, 2,31],
			[43,60,74, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2,76,60,41],
			[31, 2, 2, 2,64,74, 2,76,60,60,60,74, 2,76,63, 2, 2, 2,31],
			[31, 2,77, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,77, 2,31],
			[31, 2,64,74, 2,77, 2,35,30, 5,30,32, 2,77, 2,76,63, 2,31],
			[31, 2, 2, 2, 2,61, 2,31, 1, 1, 1,31, 2,61, 2, 2, 2, 2,31],
			[31, 2,77, 2,76,63, 2,34,30,30,30,33, 2,64,74, 2,77, 2,31],
			[31, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2,31],
			[31, 2,64,74, 2,65,60,74, 2,77, 2,76,60,62, 2,76,63, 2,31],
			[31, 2, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2, 2,31],
			[43,74, 2,77, 2,75, 2,76,60,68,60,74, 2,75, 2,77, 2,76,41],
			[31, 2, 3,61, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 3, 2,31],
			[31, 2,76,63, 2,65,60,74, 2,77, 2,76,60,62, 2,64,74, 2,31],
			[31, 2, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2, 2,31],
			[31, 2,76,74, 2,61, 2,76,60,68,60,74, 2,61, 2,76,74, 2,31],
			[31, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2,31],
			[34,30,30,30,30,42,30,30,30,30,30,30,30,42,30,30,30,30,33],
			],
		startDirection:"left",
		startPos:[9,16],
		ghostPos:[9,8],
		ghostStayPos:[
			[9,10],
			[9,10],
			[8,10],
			[10,10],
			],
		multiPos:[
			[7,6],
			[11,6],
			[7,16],
			[11,16],
			],
		multiDirection:["left","right","left","right",],
		totalGhosts:[0,1000,5000,10000],
		loop:"",
	},

	{
		map:[
			[35,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,32],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,77, 2,65,62, 2,65,60,60,60,62, 2,65,62, 2,77, 2,31],
			[31, 2,61, 2,64,63, 2,61, 2, 2, 2,61, 2,64,63, 2,61, 2,31],
			[31, 2,61, 3, 2, 2, 2,61, 2,77, 2,61, 2, 2, 2, 3,61, 2,31],
			[31, 2,64,74, 2,77, 2,75, 2,61, 2,75, 2,77, 2,76,63, 2,31],
			[31, 2, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2, 2,31],
			[34,32, 2,76,60,78,60,74, 2,75, 2,76,60,78,60,74, 2,35,33],
			[ 1,31, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2,31, 1],
			[30,33, 2,77, 2,75, 2,35,30, 5,30,32, 2,75, 2,77, 2,34,30],
			[ 1, 1, 2,61, 2, 2, 2,31, 1, 1, 1,31, 2, 2, 2,61, 2, 1, 1],
			[60,60,60,67, 2,77, 2,34,30,30,30,33, 2,77, 2,69,60,60,60],
			[ 1, 1, 2,75, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2,75, 2, 1, 1],
			[30,32, 2, 2, 2,64,60,74, 2,77, 2,76,60,63, 2, 2, 2,35,30],
			[ 1,31, 2,77, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2,77, 2,31, 1],
			[35,33, 2,64,60,74, 2,77, 2,75, 2,77, 2,76,60,63, 2,34,32],
			[31, 2, 2, 2, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2, 2, 2, 2,31],
			[31, 2,65,74, 2,77, 2,64,60,60,60,63, 2,77, 2,76,62, 2,31],
			[31, 2,61, 3, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2, 3,61, 2,31],
			[31, 2,75, 2,76,68,60,74, 2,77, 2,76,60,68,74, 2,75, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[34,30,30,30,30,30,30,30,30,42,30,30,30,30,30,30,30,30,33],
			],
		startDirection:"left",
		startPos:[9,18],
		ghostPos:[9,8],
		ghostStayPos:[
			[9,10],
			[9,10],
			[8,10],
			[10,10],
			],
		multiPos:[
			[6,6],
			[12,6],
			[6,14],
			[12,14],
			],
		multiDirection:["up","up","down","down",],
		totalGhosts:[0,1000,5000,10000],
		loop:"",
	},

	{
		map:[
			[35,30,30,30,30,40,30,30,30,30,30,30,30,40,30,30,30,30,32],
			[31, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2,31],
			[31, 2,76,74, 2,75, 2,76,60,60,60,74, 2,75, 2,76,74, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[34,32, 2,77, 2,65,60,62, 2,77, 2,65,60,62, 2,77, 2,35,33],
			[30,33, 2,61, 2,64,60,63, 2,61, 2,64,60,63, 2,61, 2,34,30],
			[ 1, 1, 2,61, 3, 2, 2, 2, 2,61, 2, 2, 2, 2, 3,61, 2, 1, 1],
			[30,32, 2,64,60,74, 2,76,60,68,60,74, 2,76,60,63, 2,35,30],
			[ 1,31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31, 1],
			[ 1,31, 2,65,60,74, 2,35,30, 5,30,32, 2,76,60,62, 2,31, 1],
			[ 1,31, 2,61, 2, 2, 2,31, 1, 1, 1,31, 2, 2, 2,61, 2,31, 1],
			[30,33, 2,75, 2,77, 2,34,30,30,30,33, 2,77, 2,75, 2,34,30],
			[ 1, 1, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 1, 1],
			[30,32, 2,76,60,68,60,74, 2,77, 2,76,60,68,60,74, 2,35,30],
			[ 1,31, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2,31, 1],
			[35,33, 2,76,60,74, 2,76,60,68,60,74, 2,76,60,74, 2,34,32],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,65,62, 2,65,60,74, 2,77, 2,60,60,62, 2,65,62, 2,31],
			[31, 2,61,61, 2,61, 3, 2, 2,61, 2, 2, 3,61, 2,61,61, 2,31],
			[31, 2,64,63, 2,75, 2,76,60,68,60,74, 2,75, 2,64,63, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[34,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,33],
			],
		startDirection:"left",
		startPos:[9,16],
		ghostPos:[9,8],
		ghostStayPos:[
			[9,10],
			[9,10],
			[8,10],
			[10,10],
			],
		multiPos:[
			[7,3],
			[11,3],
			[7,16],
			[11,16],
			],
		multiDirection:["left","right","left","right",],
		totalGhosts:[0,1000,5000,10000],
		loop:"",
	},

	{
		map:[
			[35,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,32],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,65,60,60,60,74, 2,77, 2,76,60,60,60,62, 2,31],
			[31, 2,61, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2,61, 2,31],
			[31, 2,61, 2,77, 2,80, 2,75, 2,80, 2,77, 2,61, 2,31],
			[31, 2,61, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2,61, 2,31],
			[31, 2,75, 2,75, 2,35,30, 5,30,32, 2,75, 2,75, 2,31],
			[31, 2, 2, 2, 2, 2,31, 1, 1, 1,31, 2, 2, 2, 2, 2,31],
			[31, 2,80, 2,80, 2,34,30,30,30,33, 2,80, 2,80, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,76,60,60,60,60,74, 2,76,60,60,60,60,74, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,77, 2,65,60,62, 2,77, 2,65,60,62, 2,77, 2,31],
			[31, 2,61, 2,75, 3,75, 2,61, 2,75, 3,75, 2,61, 2,31],
			[31, 2,61, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2,61, 2,31],
			[31, 2,64,60,60,60,74, 2,75, 2,76,60,60,60,63, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[34,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,33],
			],
		startDirection:"left",
		startPos:[8,11],
		ghostPos:[8,5],
		ghostStayPos:[
			[8,7],
			[8,7],
			[7,7],
			[9,7],
			],
		multiPos:[
			[6,9],
			[10,9],
			[6,11],
			[10,11],
			],
		multiDirection:["left","right","left","right",],
		totalGhosts:[0,1000,5000,10000],
		loop:"",
	},

	{
		map:[
			[ 1, 1, 1,35,30,30,30,30,44, 1,46,30,30,30,30,30,44, 1,46,30,30,30,30,32, 1, 1, 1],
			[ 1, 1, 1,31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31, 1, 1, 1],
			[35,30,30,33, 2,65,60,60,74, 2,76,60,60,66,60,60,74, 2,76,60,60,62, 2,34,30,30,32],
			[31, 2, 2, 2, 2,61, 3, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 3,61, 2, 2, 2, 2,31],
			[31, 2,65,74, 2,75, 2,77, 2,65,60,74, 2,75, 2,76,60,62, 2,77, 2,75, 2,76,62, 2,31],
			[31, 2,61, 2, 2, 2, 2,61, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2,61, 2, 2, 2, 2,61, 2,31],
			[31, 2,75, 2,76,74, 2,75, 2,75, 2,35,30, 5,30,32, 2,75, 2,75, 2,76,74, 2,75, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31, 1, 1, 1,31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,77, 2,76,74, 2,77, 2,77, 2,34,30,30,30,33, 2,77, 2,77, 2,76,74, 2,77, 2,31],
			[31, 2,61, 2, 2, 2, 2,61, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2,61, 2, 2, 2, 2,61, 2,31],
			[31, 2,64,74, 2,77, 2,75, 2,64,60,74, 2,77, 2,76,60,63, 2,75, 2,77, 2,76,63, 2,31],
			[31, 2, 2, 2, 2,61, 3, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 3,61, 2, 2, 2, 2,31],
			[34,30,30,32, 2,64,60,60,74, 2,76,60,60,68,60,60,74, 2,76,60,60,63, 2,35,30,30,33],
			[ 1, 1, 1,31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31, 1, 1, 1],
			[ 1, 1, 1,34,30,30,30,30,44, 1,46,30,30,30,30,30,44, 1,46,30,30,30,30,33, 1, 1, 1],
			],
		startDirection:"left",
		startPos:[13,9],
		ghostPos:[13,5],
		ghostStayPos:[
			[13,7],
			[13,7],
			[12,7],
			[14,7],
			],
		multiPos:[
			[10,1],
			[16,1],
			[10,13],
			[16,13],
			],
		multiDirection:["left","right","left","right",],
		totalGhosts:[0,1000,5000,10000],
		loop:"",
	},

	{
		map:[
			[35,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,32],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,65,60,62, 2,65,60,62, 2,65,60,62, 2,65,60,62, 2,31],
			[31, 2,61, 1,61, 2,61, 1,61, 2,61, 1,61, 2,61, 1,61, 2,31],
			[31, 2,64,60,63, 2,64,60,63, 2,64,60,63, 2,64,60,63, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,65,60,62, 2,65,60,62, 2,65,60,62, 2,65,60,62, 2,31],
			[31, 2,61, 1,61, 2,61, 1,61, 2,61, 1,61, 2,61, 1,61, 2,31],
			[31, 2,64,60,63, 2,64,60,63, 2,64,60,63, 2,64,60,63, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,65,60,60,74, 2,35,30, 5,30,32, 2,76,60,60,62, 2,31],
			[31, 2,61, 3, 2, 2, 2,31, 1, 1, 1,31, 2, 2, 2, 3,61, 2,31],
			[31, 2,64,60,60,74, 2,34,30,30,30,33, 2,76,60,60,63, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,65,60,62, 2,65,60,62, 2,65,60,62, 2,65,60,62, 2,31],
			[31, 2,61, 1,61, 2,61, 1,61, 2,61, 1,61, 2,61, 1,61, 2,31],
			[31, 2,64,60,63, 2,64,60,63, 2,64,60,63, 2,64,60,63, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,65,60,62, 2,65,60,62, 2,65,60,62, 2,65,60,62, 2,31],
			[31, 2,61, 1,61, 2,61, 1,61, 2,61, 1,61, 2,61, 1,61, 2,31],
			[31, 2,64,60,63, 2,64,60,63, 2,64,60,63, 2,64,60,63, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[34,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,33],
			],
		startDirection:"left",
		startPos:[9,13],
		ghostPos:[9,9],
		ghostStayPos:[
			[9,11],
			[9,11],
			[8,11],
			[10,11],
			],
		multiPos:[
			[7,5],
			[11,5],
			[7,17],
			[11,17],
			],
		multiDirection:["left","right","left","right",],
		totalGhosts:[0,1000,5000,10000],
		loop:"",
	},

	{
		map:[
			[35,30,30,30,40,30,30,30,30,30,30,30,30,30,30,30,30,30,40,30,30,30,32],
			[31, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2,31],
			[31, 2,80, 2,75, 2,76,60,66,60,74, 2,76,60,66,60,74, 2,75, 2,80, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2,31],
			[43,60,74, 2,77, 2,77, 2,61, 2,65,60,62, 2,61, 2,77, 2,77, 2,76,60,41],
			[31, 2, 2, 2,61, 2,61, 2,61, 2,61, 1,61, 2,61, 2,61, 2,61, 2, 2, 2,31],
			[31, 2,80, 2,61, 2,61, 2,75, 2,64,60,63, 2,75, 2,61, 2,61, 2,80, 2,31],
			[31, 2, 2, 3,61, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2,61, 3, 2, 2,31],
			[43,60,60,60,63, 2,61, 2,76,60,60,60,60,60,74, 2,61, 2,64,60,60,60,41],
			[31, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2,31],
			[45, 2,76,60,60,60,63, 2,35,30, 5,30, 5,30,32, 2,64,60,60,60,74, 2,45],
			[ 1, 2, 2, 2, 2, 2, 2, 2,31, 1, 1, 1, 1, 1,31, 2, 2, 2, 2, 2, 2, 2, 2],
			[47, 2,76,60,60,60,62, 2,34,30,30,30,30,30,33, 2,65,60,60,60,74, 2,47],
			[31, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2,31],
			[43,60,60,60,62, 2,61, 2,76,60,60,60,60,60,74, 2,61, 2,65,60,60,60,41],
			[31, 2, 2, 3,61, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2,61, 3, 2, 2,31],
			[31, 2,80, 2,61, 2,61, 2,77, 2,65,60,62, 2,77, 2,61, 2,61, 2,80, 2,31],
			[31, 2, 2, 2,61, 2,61, 2,61, 2,61, 1,61, 2,61, 2,61, 2,61, 2, 2, 2,31],
			[43,60,74, 2,75, 2,75, 2,61, 2,64,60,63, 2,61, 2,75, 2,75, 2,76,60,41],
			[31, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,80, 2,77, 2,76,60,68,60,74, 2,76,60,68,60,74, 2,77, 2,80, 2,31],
			[31, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2,31],
			[34,30,30,30,42,30,30,30,30,30,30,30,30,30,30,30,30,30,42,30,30,30,33],
			],
		startDirection:"left",
		startPos:[11,15],
		ghostPos:[11,9],
		ghostStayPos:[
			[10,11],
			[10,11],
			[11,11],
			[12,11],
			[13,11],
			[9,11],
			],
		multiPos:[
			[10,7],
			[12,7],
			[10,13],
			[12,13],
			],
		multiDirection:["left","right","left","right",],
		totalGhosts:[0,1000,3000,6000,9000,12000],
		loop:"",
	},

	{
		map:[
			[35,30,30,30,30,30,30,30,30,40,30,30,30,30,30,30,30,30,30,40,30,30,30,30,30,30,30,30,30,40,30,30,30,30,30,30,30,30,32],
			[31, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,65,62, 2,65,60,62, 2,61, 2,65,60,62, 2,65,60,62, 2,61, 2,65,60,62, 2,65,60,62, 2,61, 2,65,60,62, 2,65,62, 2,31],
			[31, 2,64,63, 3,64,60,63, 2,61, 2,64,60,63, 2,64,60,63, 2,75, 2,64,60,63, 2,64,60,63, 2,61, 2,64,60,63, 3,64,63, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,76,74, 2,76,60,74, 2,75, 2,76,60,74, 2,77, 2,76,60,66,60,74, 2,77, 2,76,60,74, 2,75, 2,76,60,74, 2,76,74, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2,61, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[34,30,30,32, 2,76,60,74, 2,77, 2,76,60,74, 2,69,60,74, 2,75, 2,76,60,67, 2,76,60,74, 2,77, 2,76,60,74, 2,35,30,30,33],
			[ 1, 1, 1,31, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2,31, 1, 1, 1],
			[30,30,30,33, 2,77, 2,76,60,78,60,74, 2,77, 2,75, 2,35,30, 5,30,32, 2,75, 2,77, 2,76,60,78,60,74, 2,77, 2,34,30,30,30],
			[ 1, 1, 1, 1, 2,61, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2,31, 2, 2, 2,31, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2,61, 2, 1, 1, 1, 1],
			[30,30,30,32, 2,69,60,74, 2,75, 2,76,60,67, 2,77, 2,34,30,30,30,33, 2,77, 2,69,60,74, 2,75, 2,76,60,67, 2,35,30,30,30],
			[ 1, 1, 1,31, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2,61, 2, 2, 2, 2, 2, 2, 2,61, 2,31, 1, 1, 1],
			[35,30,30,33, 2,75, 2,76,60,66,60,74, 2,75, 2,75, 2,76,60,66,60,74, 2,75, 2,75, 2,76,60,66,60,74, 2,75, 2,34,30,30,32],
			[31, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[31, 2,76,62, 2,76,60,74, 2,75, 2,76,60,62, 2,76,60,74, 2,75, 2,76,60,74, 2,65,74, 2, 2,75, 2,76,60,74, 2,65,74, 2,31],
			[31, 2, 2,61, 2, 2, 2, 2, 2, 2, 2, 3, 2,61, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2,61, 2, 3, 2, 2, 2, 2, 2, 2, 2,61, 2, 2,31],
			[43,74, 2,75, 2,77, 2,76,60,66,60,74, 2,75, 2,77, 2,76,60,66,60,74, 2,77, 2,75, 2,76,60,66,60,74, 2,77, 2,75, 2,76,41],
			[31, 2, 2, 2, 3,61, 2, 2, 2,61, 2, 2, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2,61, 2, 2, 2, 2, 2,61, 2, 2, 2,61, 3, 2, 2, 2,31],
			[31, 2,76,60,60,68,60,74, 2,75, 2,76,60,60,60,68,60,74, 2,75, 2,76,60,68,60,60,60,74, 2,75, 2,76,60,68,60,74, 2, 2,31],
			[31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31],
			[34,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,33],
			],
		startDirection:"left",
		startPos:[19,16],
		ghostPos:[19,8],
		ghostStayPos:[
			[19,10],
			[19,10],
			[18,10],
			[20,10],
			],
		multiPos:[
			[12,4],
			[26,4],
			[12,14],
			[26,14],
			],
		multiDirection:["left","right","left","right",],
		totalGhosts:[0,1000,5000,10000],
		loop:"",
	},

	{
		map:[
			[35,30,30,30,30,30,30,30,30,30,30,30,40,30,40,30,40,30,30,30,30,30,30,30,30,30,30,30,30,32],
			[31, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,61, 2,75, 2,61, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3,31],
			[31, 2,76,74, 2,77, 2,65,60,60,62, 2,61, 2, 2, 2,61, 2,65,60,60,62, 2,65,62, 2,76,74, 2,31],
			[31, 2, 2, 2, 2,75, 2,64,60,60,63, 2,64,74, 2,76,63, 2,64,60,60,63, 2,64,63, 2, 2, 2, 2,31],
			[34,30,30,32, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,35,30,30,33],
			[ 1, 1, 1,31, 2,15,10,12, 2,15,10,12, 2,15,12,15,12, 2,15,10,12, 2,15,12,11, 2,31, 1, 1, 1],
			[30,30,30,33, 2,11,47,11, 2,11,80,11, 2,11,11,11,11, 2,11,47,11, 2,11,11,11, 2,34,30,30,30],
			[ 1, 1, 1, 2, 2,11,31,11, 2,11,10,13, 2,11,11,11,11, 2,11,31,11, 2,11,11,11, 2, 2, 1, 1, 1],
			[30,30,30,32, 2,11,45,11, 2,11, 2, 2, 2,11,14,13,11, 2,11,45,11, 2,11,11,11, 2,35,30,30,30],
			[ 1, 1, 1,31, 2,14,10,13, 2,14,10, 2, 2,11, 2, 2,11, 2,14,10,13, 2,11,14,13, 2,31, 1, 1, 1],
			[35,30,30,33, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,34,30,30,32],
			[31, 2, 2, 2, 2,77, 2,65,60,60,62, 2,35,30, 5,30,32, 2,65,60,60,62, 2,65,62, 2, 2, 2, 2,31],
			[31, 2,76,74, 2,75, 2,64,60,60,63, 2,31, 2, 2, 2,31, 2,64,60,60,63, 2,64,63, 2,76,74, 2,31],
			[31, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,31, 2, 2, 2,31, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3,31],
			[34,30,30,30,30,30,30,30,30,30,30,30,38,30,30,30,38,30,30,30,30,30,30,30,30,30,30,30,30,33],
			],
		startDirection:"left",
		startPos:[14,4],
		ghostPos:[14,10],
		ghostStayPos:[
			[14,12],
			[13,12],
			[15,12],
			[14,13],
			[13,13],
			[15,13],
			],
		multiPos:[
			[10,4],
			[19,4],
			[10,10],
			[19,10],
			],
		multiDirection:["left","right","left","right",],
		totalGhosts:[0,1000,3000,6000,9000,12000],
		loop:"",
	},

	];