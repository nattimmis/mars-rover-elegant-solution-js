describe("Grid", function(){
	var grid, gridWidth, gridHeight;
	beforeEach(function(){
		gridWidth = 5;
		gridHeight = 4;
		grid = new Grid(gridWidth, gridHeight);
	});

	it("throws exception when a point is out of the grid", function(){

		var validatePoint = function(){
			grid.validatePoint(new Point(6, 2))
		};

		expect(validatePoint).toThrow();
	});

	it("generates next north point", function(){
		var nextPoint = grid.nextNorthPoint(new Point(2, 3));

		expect(nextPoint.getX()).toBe(2);
		expect(nextPoint.getY()).toBe(4);
	});

	it("generates next north point wrapping from one edge to another", function(){
		var nextPoint = grid.nextNorthPoint(new Point(2, 4));

		expect(nextPoint.getX()).toBe(2);
		expect(nextPoint.getY()).toBe(0);
	});

	it("generates next south point", function(){
		var nextPoint = grid.nextSouthPoint(new Point(2, 3));

		expect(nextPoint.getX()).toBe(2);
		expect(nextPoint.getY()).toBe(2);
	});

	it("generates next south point wrapping from one edge to another", function(){
		var nextPoint = grid.nextSouthPoint(new Point(2, 0));

		expect(nextPoint.getX()).toBe(2);
		expect(nextPoint.getY()).toBe(4);
	});

	it("generates next east point", function(){
		var nextPoint = grid.nextEastPoint(new Point(2, 3));

		expect(nextPoint.getX()).toBe(3);
		expect(nextPoint.getY()).toBe(3);
	});

	it("generates next east point wrapping from one edge to another", function(){
		var nextPoint = grid.nextEastPoint(new Point(5, 3));

		expect(nextPoint.getX()).toBe(0);
		expect(nextPoint.getY()).toBe(3);
	});

	it("generates next west point", function(){
		var nextPoint = grid.nextWestPoint(new Point(2, 3));

		expect(nextPoint.getX()).toBe(1);
		expect(nextPoint.getY()).toBe(3);
	});

	it("generates next west point wrapping from one edge to another", function(){
		var nextPoint = grid.nextWestPoint(new Point(0, 3));

		expect(nextPoint.getX()).toBe(gridWidth);
		expect(nextPoint.getY()).toBe(3);
	});
});