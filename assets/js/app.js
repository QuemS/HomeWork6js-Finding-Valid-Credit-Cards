
	let data = "Pellentesque ex eros, +380665433321 porttitor eu bibendum ac, aliquam tincidunt urna. Mauris tristique lobortis orci, nec varius magna convallis interdum. Etiam 5363 4567 8765 3454 pharetra tempor ex, vel eleifend (067) 678 44 21 odio lacinia (0562) 35-30-38 eget. Morbi maximus libero vitae aliquet facilisis. Vivamus 5674-2346-8945-0012 vitae quam nisi. Quisque 12/45 quis venenatis 5192722517688913 lacus. Sed ac lorem (050)567-45-33 nec leo pharetra 4556796335044346 dapibus sed eu +38067432112 ex. In hac 4913-8185-2881-4543  habitasse platea dictumst. In dignissim 5461158320267908 suscipit rutrum. Ut 4916 8494 1754 2904 luctus  sapien in risus 56th street auctor, ac placerat 067-678-44-21  quam malesuada. Pellentesque (056) 7783322 bibendum justo  5363 4567 87653 3455 tempus purus convallis, a viverra nunc ullamcorper. Nulla 5213 9203 2475 5355 eget lectus gravida, porta eros vitae, semper erat +39-926-1234567.  Aenean volutpat vehicula dui ut pharetra.";

	let re = /[0-9]{13,19}/gi;
	let resultArrStr= data.replace(/-|\s|\(|\)/g, '').match(re);

	let IsCorrectCard = {
		numberCard: '',

		data(number){
			this.numberCard = number;
			this.render();
		},//data()
		convert(){
			return this.numberCard.split('').reverse().map(i =>+i)
		},//convert()

		render(){
			if (this.isCorrect()) {
				let re = /.{4}/g
				let result = this.numberCard.match(re).join(' ');
				console.log(result);
				
			}
		},//render()
		isCorrect(){
			let sum = 0 ;
			this.convert().map( (item,i) =>{
				if (i % 2 == 0) {
					sum = sum + this.convert()[i];
				}else{
					let double = this.convert()[i] * 2;
					sum = sum + (double > 9 ? double - 9: double);
				}
				
			});
			return sum % 10 == 0;
		}//isCorrect()
    }
	console.log('Valid cards');
	let result = resultArrStr.map(number => IsCorrectCard.data(number));
	

	

	

	
	
	

	

	
	
	

	
	
	
	/*
		
	Необходимо выбрать !!валидные!! номера банковских карт и вывести их в формате 4 блока по 4 цифры.
	
	Например:
	
	5475 0330 3843 6453
	4539 1799 4927 2557
	...
	
	*/