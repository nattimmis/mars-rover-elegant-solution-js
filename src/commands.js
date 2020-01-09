function CommandFactory(command, position, grid)
{
	if(command == Commands.FORWARD)
		return new ForwardCommand(position, grid);
	if(command == Commands.BACKWARD)
		return new BackwardCommand(position, grid);
	if(command == Commands.LEFT)
		return new LeftCommand(position, grid);
	if(command == Commands.RIGHT)
		return new RightCommand(position, grid);
}

function ForwardCommand(position, grid)
{
	this.execute = function()
	{
		if(position.getDirection() == Direction.NORTH) {
			return new Position(grid.nextNorthPoint(position.getPoint()), position.getDirection());
		}
		if(position.getDirection() == Direction.SOUTH) {
			return new Position(grid.nextSouthPoint(position.getPoint()), position.getDirection());
		}
		if(position.getDirection() == Direction.EAST) {
			return new Position(grid.nextEastPoint(position.getPoint()), position.getDirection());
		}
		if(position.getDirection() == Direction.WEST) {
			return new Position(grid.nextWestPoint(position.getPoint()), position.getDirection());
		}
	};
}

function BackwardCommand(position, grid)
{
	this.execute = function()
	{
		if(position.getDirection() == Direction.NORTH) {
			return new Position(grid.nextSouthPoint(position.getPoint()), position.getDirection());
		}
		if(position.getDirection() == Direction.SOUTH) {
			return new Position(grid.nextNorthPoint(position.getPoint()), position.getDirection());
		}
		if(position.getDirection() == Direction.EAST) {
			return new Position(grid.nextWestPoint(position.getPoint()), position.getDirection());
		}
		if(position.getDirection() == Direction.WEST) {
			return new Position(grid.nextEastPoint(position.getPoint()), position.getDirection());
		}	
	}
}

function LeftCommand(position)
{
	this.execute = function()
	{
		if(position.getDirection() == Direction.NORTH) {
			return new Position(position.getPoint(), Direction.WEST);
		}
		if(position.getDirection() == Direction.SOUTH) {
			return new Position(position.getPoint(), Direction.EAST);
		}
		if(position.getDirection() == Direction.EAST) {
			return new Position(position.getPoint(), Direction.NORTH);
		}
		if(position.getDirection() == Direction.WEST) {
			return new Position(position.getPoint(), Direction.SOUTH);
		}
	}
}

function RightCommand(position)
{
	this.execute = function()
	{
		if(position.getDirection() == Direction.NORTH) {
			return new Position(position.getPoint(), Direction.EAST);
		}
		if(position.getDirection() == Direction.EAST) {
			return new Position(position.getPoint(), Direction.SOUTH);
		}
		if(position.getDirection() == Direction.SOUTH) {
			return new Position(position.getPoint(), Direction.WEST);
		}
		if(position.getDirection() == Direction.WEST) {
			return new Position(position.getPoint(), Direction.NORTH);
		}
	}
}

var Commands = {
	FORWARD: 'F',
	BACKWARD: 'B',
	LEFT: 'L',
	RIGHT: 'R'
};