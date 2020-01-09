describe("Mars Rover", function(){

	var grid;

	beforeEach(function(){
		grid = new Grid(10, 15);
	});

	it("gets direction", function(){
		var rover = new Rover(new Position(new Point(1, 2), Direction.SOUTH), grid);

		var currentPosition = rover.currentPosition;

		expect(currentPosition.getDirection()).toBe('S');
	});

	describe("moves forward", function(){

		it("facing north", function(){
		var rover = new Rover(new Position(new Point(1, 2), Direction.NORTH), grid);
		var movements = ['F'];

		var currentPosition = rover.move(movements);

		expect(currentPosition.getXCoordinate()).toBe(1);
		expect(currentPosition.getYCoordinate()).toBe(3);
		});

		it("facing south", function(){
			var rover = new Rover(new Position(new Point(1, 2), Direction.SOUTH), grid);
			var movements = ['F'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(1);
			expect(currentPosition.getYCoordinate()).toBe(1);
		});

		it("facing east", function(){
			var rover = new Rover(new Position(new Point(1, 2), Direction.EAST), grid);
			var movements = ['F'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(2);
			expect(currentPosition.getYCoordinate()).toBe(2);
		});

		it("facing west", function(){
			var rover = new Rover(new Position(new Point(4, 2), Direction.WEST), grid);
			var movements = ['F'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(3);
			expect(currentPosition.getYCoordinate()).toBe(2);
		});

		it("twice", function(){
			var rover = new Rover(new Position(new Point(4, 2), Direction.NORTH), grid);
			var movements = ["F", "F"];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(4);
			expect(currentPosition.getYCoordinate()).toBe(4);
		});
	});

	describe("moves backward", function(){

		it("facing north", function(){
			var rover = new Rover(new Position(new Point(1, 2), Direction.NORTH), grid);
			var movements = ['B'];
		
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(1);
			expect(currentPosition.getYCoordinate()).toBe(1);
		});

		it("facing south", function(){
			var rover = new Rover(new Position(new Point(1, 2), Direction.SOUTH), grid);
			var movements = ['B'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(1);
			expect(currentPosition.getYCoordinate()).toBe(3);
		});

		it("facing east", function(){
			var rover = new Rover(new Position(new Point(3, 3), Direction.EAST), grid);
			var movements = ['B'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(2);
			expect(currentPosition.getYCoordinate()).toBe(3);
		});

		it("facing west", function(){
			var rover = new Rover(new Position(new Point(3, 3), Direction.WEST), grid);
			var movements = ['B'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(4);
			expect(currentPosition.getYCoordinate()).toBe(3);
		});

		it("twice", function(){
			var rover = new Rover(new Position(new Point(3, 3), Direction.NORTH), grid);
			var movements = ['B', 'B'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getXCoordinate()).toBe(3);
			expect(currentPosition.getYCoordinate()).toBe(1);
		});

	});

	describe("turns left", function(){
		
		it("facing north", function(){
			var rover = new Rover(new Position(new Point(1, 2), Direction.NORTH), grid);
			var movements = ['L'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.WEST);
		});

		it("facing west", function(){
			var rover = new Rover(new Position(new Point(1, 2), Direction.WEST), grid);
			var movements = ['L'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.SOUTH);
		});

		it("facing south", function(){
			var rover = new Rover(new Position(new Point(1, 2), Direction.SOUTH), grid);
			var movements = ['L'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.EAST);
		});

		it("facing east", function(){
			var rover = new Rover(new Position(new Point(1, 2), Direction.EAST), grid);
			var movements = ['L'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.NORTH);
		});

		it("twice facing east", function(){
			var rover = new Rover(new Position(new Point(1, 2), Direction.EAST), grid);
			var movements = ['L','L'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.WEST);
		});
	});

	describe("turns right", function(){

		it("facing north", function(){
			var rover = new Rover(new Position(new Point(1, 2), Direction.NORTH), grid);
			var movements = ['R'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.EAST);
		});

		it("facing east", function(){
			var rover = new Rover(new Position(new Point(1, 2), Direction.EAST), grid);
			var movements = ['R'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.SOUTH);
		});

		it("facing south", function(){
			var rover = new Rover(new Position(new Point(1, 2), Direction.SOUTH), grid);
			var movements = ['R'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.WEST);
		});

		it("facing west", function(){
			var rover = new Rover(new Position(new Point(1, 2), Direction.WEST), grid);
			var movements = ['R'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.NORTH);
		});

		it("twice facing west", function(){
			var rover = new Rover(new Position(new Point(1, 2), Direction.WEST), grid);
			var movements = ['R', 'R'];
			
			var currentPosition = rover.move(movements);

			expect(currentPosition.getDirection()).toBe(Direction.EAST);
		});
	});
});