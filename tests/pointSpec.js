describe("Point", function(){

	it("gets X coordinate", function(){
		var point = new Point(1, 1);

		var coordinateX = point.getX();

		expect(coordinateX).toBe(1);
	});

	it("gets Y coordinate", function(){
		var point = new Point(1, 2);

		var coordinateY = point.getY();

		expect(coordinateY).toBe(2);
	});
});